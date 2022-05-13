<template>
  <div class="wrapper-layout">
    <the-side-nav-bar class="aside" />
    <header class="fixed w-full bg-secondary p-4 flex justify-end items-center header">
      <div class="flex justify-center items-center text-xl space-x-4 cursor-pointer">
        <span class="text-white-light">User</span>
        <div
          class="w-10 h-10 rounded-full bg-primary text-white-light font-bold flex items-center justify-center text-xl"
        >
          US
        </div>
      </div>
    </header>

    <main class="main">
      <slot />
    </main>
  </div>
</template>
<script setup></script>
<style>
  .wrapper-layout {
    display: grid;
    grid-template-columns: 0px 0.3fr 1fr;
    grid-template-rows: 65px 1fr;
    gap: 0px 0px;
    grid-template-areas:
      'aside header header'
      'aside main main'
      'aside main main';

    @media (min-width: 1024px) {
      grid-template-columns: 220px 0.3fr 1fr;
    }
  }
  .aside {
    grid-area: aside;
  }
  .main {
    grid-area: main;
  }
  .header {
    grid-area: header;
  }

  body {
    @apply bg-gray-100;
    height: 100vh;
  }
</style>
