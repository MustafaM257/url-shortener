
export default function useRedirect(url: string, code: number = 302): Promise<void> | void {
    // Validate the URL
    if (!/^(http|https):\/\/[^ "]+$/.test(url)) {
      throw new Error('Invalid URL');
    }
  
    // Server-side redirection
    if (process.server) {
      const nuxtApp = useNuxtApp();
      if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
        return nuxtApp.callHook("app:redirect").then(() => {
          return sendRedirect(nuxtApp.ssrContext.event, url, code);
        });
      } else {
        // If ssrContext or event is not available, throw an error
        throw new Error("SSR context or event not available for redirect.");
      }
    } else {
      // Client-side redirection
      window.location.href = url;
      return; // Early return to avoid throwing an error unnecessarily
    }
  
    // If neither client nor server-side conditions are met, throw an error
    // Note: This line may never be reached due to the logic above covering all cases
    throw new Error("Could not redirect.");
  }
  