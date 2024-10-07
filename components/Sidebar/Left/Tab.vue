<template>
  <nuxt-link
    :to="link"
    class="flex items-center gap-4 mt-2 hover:bg-blue-50 dark:hover:bg-white/20 p-4 w-min"
    :class="defaultTransition"
  >
    <div class="w-7 h-7">
      <slot name="icon"></slot>
    </div>

    <div class="text-xl hidden xl:block" :class="textClass">
      <slot name="name"></slot>
    </div>
  </nuxt-link>
</template>
<script setup>
const { defaultTransition } = useTailwindConfig();
const route = useRoute();

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  link: {
    type: String,
    default: "#",
  },
});

const isActive = computed(() => route.path === props.link);
const textClass = computed(() =>
  isActive.value ? "font-semibold" : "font-normal",
);
</script>
