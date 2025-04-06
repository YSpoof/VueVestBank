import { consola } from "consola";
export default defineNuxtRouteMiddleware((to, from) => {
  const { loggedIn } = useUserSession();
  if (to.path.includes("dashboard") && !loggedIn.value) {
    consola.warn("User is not logged in, redirecting to login page.");
    return navigateTo("/login");
  }
});
