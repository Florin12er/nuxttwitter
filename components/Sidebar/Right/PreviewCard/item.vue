<template>
  <div
    class="p-4 hover:bg-gray-100 cursor-pointer dark:hover:bg-dim-800 border-b"
        :class="wrapperClasses"
  >
        <slot></slot>
  </div>
</template>

<script setup>
const wrapperClasses = computed(
  () => `${defaultTransition} ${twitterBorderColor}`,
);
const { defaultTransition, twitterBorderColor } = useTailwindConfig();
</script>
