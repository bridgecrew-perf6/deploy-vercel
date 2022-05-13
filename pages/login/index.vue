<template>
  <div class="bg-white shadow-lg p-10 rounded space-y-8 w-[90%] lg:w-[512px]">
    <div class="space-y-4">
      <logo-ipsum class="text-sm" />
      <h2 class="text-display-md font-bold">Faça o seu login</h2>
      <p>Bem vindo!</p>
    </div>
    <form class="flex flex-col space-y-5">
      <base-input
        v-model="signInForm.email"
        placeholder="Email"
        label="Email"
      />
      <base-input
        v-model="signInForm.password"
        placeholder="Senha"
        label="Senha"
        type="password"
      />
    </form>
    <div class="w-full flex flex-col gap-4">
      <base-button @click="signIn">{{ labelEnterButton }}</base-button>
    </div>
    <div class="text-sm flex justify-center"></div>
  </div>
</template>
<script
  setup
  lang="ts"
>
  import { useToast } from 'vue-toastification';
  import LogoIpsum from '~~/icons/LogoIpsum.vue';
  import { AuthServices } from '~~/services/api';
  import { useUser } from '~~/stores/user';
  const toast = useToast();
  const router = useRouter();
  const storeUser = useUser();
  const isCheckingAuth = ref(false);
  const tokenAccess = useCookie<{ token: string }>('token');

  tokenAccess.value = { token: '' };

  const labelEnterButton = computed(() => {
    return isCheckingAuth.value ? 'Entrando...' : 'Entrar';
  });

  const signInForm = ref({ email: '', password: '' });

  const signIn = async () => {
    isCheckingAuth.value = true;
    const data = await AuthServices.singIn({ ...signInForm.value });
    if (data.statusCode) {
      toast.error('Email ou senha incorretos!', {
        timeout: 2000,
      });
    } else {
      storeUser.setTokenLogin(data.token);
      tokenAccess.value = { token: data.token };

      signInForm.value = { email: '', password: '' };
      router.push('/');
    }
    isCheckingAuth.value = false;
  };
</script>
