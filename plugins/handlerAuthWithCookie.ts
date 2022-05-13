import { useUser } from '~~/stores/user';

export default defineNuxtPlugin(_nuxtApp => {
  const tokenAccess = useCookie<{ token: string }>('token');

  if (tokenAccess.value) {
    if (tokenAccess.value.token !== '') {
      const store = useUser();

      if (process.server) {
        store.setTokenLogin(tokenAccess.value.token);
      }
    }
  }
});
