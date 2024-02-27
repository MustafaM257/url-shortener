export default defineNuxtRouteMiddleware((to,from) => {

    // If the user is not authenticated and is trying to access a page that requires authentication then redirect to the login page
    const user = useSupabaseUser();
    if (!user.value) {
        return navigateTo('/authentication');
    }
})