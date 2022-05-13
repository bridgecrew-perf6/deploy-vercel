import { useUser } from '~~/stores/user';

export default defineNuxtRouteMiddleware(() => {
  const storeUser = useUser();

  if (!storeUser.token) {
    return navigateTo('/login');
  }
});
