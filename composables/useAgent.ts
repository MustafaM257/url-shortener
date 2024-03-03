type UserAgent = {
    userAgent : string;
    ip?: string;
}

export function useAgent() : UserAgent | null {
    if (process.server) {
        const nuxtApp = useNuxtApp();
        const request = nuxtApp.ssrContext?.event.node.req;

        if (nuxtApp.ssrContext && request) {
            const IP = request.headers['x-forwarded-for'] || request.socket.remoteAddress;
            const userAgent = request.headers['user-agent'] || "";

            return {
                userAgent,
                ip: typeof IP === "string" ? IP : IP?.[0]
            }
        }

    }
    else {
        return {
            userAgent: navigator.userAgent
        };
    }
    return null;
}