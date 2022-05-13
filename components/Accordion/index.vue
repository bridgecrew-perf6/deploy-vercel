<template>
  <div>
    <div
      role="button"
      class="flex gap-4 items-center text-lg pl-4 text-white-light hover:text-black"
      :class="isActive ? 'bg-secondary text-white-light' : ''"
      @click="toggleAccordion"
    >
      <slot name="header" />
    </div>
    <div
      :class="[
        isActive ? 'opacity-100 h-auto' : 'opacity-0 h-0',
        isActive && props.isFloat ? 'absolute  bg-white w-full' : '',
      ]"
      class="overflow-auto transition-all ease-out duration-500"
    >
      <slot name="body" />
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    isFloat: {
      type: Boolean,
      default: false,
    },
  });

  const isActive = ref(false);
  // const computedHeight = ref('0');
  // const accordionRef = ref(null);

  const toggleAccordion = () => {
    // if (!computedHeight.value) {
    //   initHeight();
    // }
    isActive.value = !isActive.value;
  };

  // const initHeight = () => {
  //   accordionRef.value.style.height = 'auto';
  //   computedHeight.value = getComputedStyle(accordionRef.value).height;
  //   accordionRef.value.style.height = '0';
  // };

  onMounted(() => {
    // initHeight();
  });
</script>
