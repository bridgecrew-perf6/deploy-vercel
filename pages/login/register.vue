<template>
  <div class="bg-white shadow-lg p-10 rounded space-y-8 w-[90%] lg:w-[512px]">
    <div class="space-y-4">
      <logo-ipsum class="text-sm" />
      <h2 class="text-display-md font-bold">Faça o seu cadastro</h2>
    </div>
    <form
      class="flex flex-col space-y-5"
      @submit.prevent="register"
    >
      <base-input
        v-model="registerForm.name"
        placeholder="Nome"
        label="Nome"
      />
      <base-input
        v-model="registerForm.email"
        placeholder="Email"
        label="Email"
      />
      <base-input
        v-model="registerForm.password"
        placeholder="Senha"
        label="Senha"
        type="password"
      />
      <div class="w-full flex flex-col gap-4">
        <base-button type="submit">Registrar</base-button>
        <base-button
          variant="outline"
          tag="a"
          href="/login"
        >
          Voltar
        </base-button>
      </div>
    </form>
  </div>
</template>
<script
  lang="ts"
  setup
>
  import LogoIpsum from './../../icons/LogoIpsum.vue';
  const router = useRouter();
  const registerForm = ref({ name: '', email: '', password: '' });

  const register = async () => {
    const credentials = await createUser(registerForm.value.email, registerForm.value.password);
    registerForm.value = { name: '', email: '', password: '' };
    if (credentials) {
      router.push('/login');
    }
  };
</script>
<style
  scoped
  lang=""
></style>
