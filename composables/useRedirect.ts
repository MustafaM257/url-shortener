export default function useRedirect(url: string, code: number = 302) {

    // Is the url valid ? 
    if(/^(http|https):\/\/[^ "]+$/.test(url) === false) {
        throw new Error('Invalid URL');
    }

    // Is it on server side
    if(process.server){
        const nuxtApp = useNuxtApp();
        if(nuxtApp.ssrContext && nuxtApp.ssrContext.event){
            return sendRedirect(nuxtApp.ssrContext.event, url, code);
        }
    }
    // Is it on client side
    else {
        window.location.href = url;
    }
    throw new Error("Could not redirect. ")

}