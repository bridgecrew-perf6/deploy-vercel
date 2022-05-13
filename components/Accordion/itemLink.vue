<template>
  <div class="hover:bg-secondary pl-4 py-2">
    <nuxt-link :to="props.to">
      <span
        class="inline-flex items-center justify-start text-white-light"
        :class="$route.path === props.to ? 'font-bold text-black' : ''"
      >
        {{ props.title }}
      </span>
    </nuxt-link>
  </div>
</template>

<script setup>
  const props = defineProps({
    to: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  });
</script>
