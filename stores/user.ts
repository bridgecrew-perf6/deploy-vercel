import { acceptHMRUpdate, defineStore } from 'pinia';

export const useUser = defineStore('user', {
  state: () => ({
    token: '',
    isLoggedIn: false,
  }),

  getters: {
    getToken: state => state.token,
  },

  actions: {
    setTokenLogin(data: string) {
      this.token = data;
      this.isLoggedIn = true;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot));
}
