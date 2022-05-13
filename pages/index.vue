<template>
  <div class="p-4">Hello Skyot Dashbord template!</div>
</template>
<script
  lang="ts"
  setup
>
  definePageMeta({
    middleware: 'auth',
    layout: 'default',
  });
</script>
