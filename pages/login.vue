<template>
  <div class="grid md:grid-cols-2 h-screen">
    <div class="hidden md:flex flex-col justify-center items-center login-background"></div>
    <div class="flex-col items-center flex justify-center">
      <NuxtChild />
    </div>
  </div>
</template>

<script
  lang="ts"
  setup
>
  definePageMeta({
    layout: 'login-layout',
  });
</script>

<style>
  .login-background {
    background: url(../assets/img/login-background.jpg) no-repeat center;
    background-size: cover;
  }
</style>
