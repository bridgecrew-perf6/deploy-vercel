<template>
  <div class="flex justify-between flex-row flex-wrap items-center gap-2 w-full py-2">
    <!-- Arrow Left -->
    <div
      class="h-10 px-4 gap-2 flex cursor-pointer justify-center items-center text-lg"
      @click="goToPrev"
    >
      <ic-arrow-l class="w-5 h-5"></ic-arrow-l>
      <span class="text-gray-500 text-md"> Previous </span>
    </div>
    <!-- center -->
    <div class="flex">
      <pagination-page
        v-for="page in pagination"
        :key="page"
        :page="page"
        :current="props.modelValue"
        @update="updatePageHandler"
      />
    </div>
    <!-- Arrow Right -->
    <div
      class="h-10 flex px-4 gap-2 cursor-pointer justify-center items-center text-lg"
      @click="goToNext"
    >
      <span class="text-gray-500 text-md"> Next </span>
      <ic-arrow-l class="w-5 h-5 inverter"></ic-arrow-l>
    </div>
  </div>
</template>
<script
  lang="ts"
  setup
>
  import IcArrowL from '~~/icons/IcArrowL.vue';
  const props = defineProps({
    pages: {
      type: Number,
      default: 10,
    },
    rangeSize: {
      type: Number,
      default: 1,
    },
    modelValue: {
      type: Number,
      default: 0,
    },
  });

  const emit = defineEmits(['update:modelValue']);

  const pagination = computed((): (number | undefined)[] => {
    const res = [];

    const minPaginationElems = 5 + props.rangeSize * 2;

    let rangeStart = props.pages <= minPaginationElems ? 1 : props.modelValue - props.rangeSize;

    let rangeEnd = props.pages <= minPaginationElems ? props.pages : props.modelValue + props.rangeSize;
    rangeEnd = rangeEnd > props.pages ? props.pages : rangeEnd;
    rangeStart = rangeStart < 1 ? 1 : rangeStart;

    if (props.pages > minPaginationElems) {
      const isStartBoundaryReached = rangeStart - 1 < 3;
      const isEndBoundaryReached = props.pages - rangeEnd < 3;
      if (isStartBoundaryReached) {
        rangeEnd = minPaginationElems - 2;
        for (let i = 1; i < rangeStart; i++) {
          res.push(i);
        }
      } else {
        res.push(1);
        res.push(undefined);
      }
      if (isEndBoundaryReached) {
        rangeStart = props.pages - (minPaginationElems - 3);
        for (let i = rangeStart; i <= props.pages; i++) {
          res.push(i);
        }
      } else {
        for (let i = rangeStart; i <= rangeEnd; i++) {
          res.push(i);
        }
        res.push(undefined);
        res.push(props.pages);
      }
    } else {
      for (let i = rangeStart; i <= rangeEnd; i++) {
        res.push(i);
      }
    }

    return res;
  });

  function updatePageHandler(params: number) {
    emit('update:modelValue', params);
  }
  // controls

  const isPrevControlsActive = computed((): boolean => {
    return props.modelValue > 1;
  });
  const isNextControlsActive = computed((): boolean => {
    return props.modelValue < props.pages;
  });

  function goToFirst(): void {
    if (isPrevControlsActive.value) {
      emit('update:modelValue', 1);
    }
  }

  function goToPrev(): void {
    if (isPrevControlsActive.value) {
      emit('update:modelValue', props.modelValue - 1);
    }
  }

  function goToLast(): void {
    if (isNextControlsActive.value) {
      emit('update:modelValue', props.pages);
    }
  }

  function goToNext(): void {
    if (isNextControlsActive.value) {
      emit('update:modelValue', props.modelValue + 1);
    }
  }
</script>
<style scoped>
  .inverter {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
</style>
