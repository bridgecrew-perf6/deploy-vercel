<template>
  <div class="flex">
    <span
      v-if="page === null"
      class="flex items-center justify-center font-bold text-[#697586]"
    >
      ...
    </span>
    <button
      v-else
      class="flex w-10 h-10 items-center justify-center rounded-xl"
      :class="isActive ? 'text-primary border bg-[#F1EBF9] ' : 'text-[#697586]'"
      type="button"
      @click="handleChangePage"
    >
      {{ props.page }}
    </button>
  </div>
</template>
<script
  lang="ts"
  setup
>
  const props = defineProps({
    page: {
      type: Number || null,
      default: null,
    },
    current: {
      type: Number,
      default: 0,
    },
  });

  const emit = defineEmits(['update']);

  const isActive = computed(() => {
    return props.page === props.current;
  });

  function handleChangePage() {
    emit('update', props.page);
  }
</script>
