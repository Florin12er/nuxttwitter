<template>
    <div class="flex flex-col h-screen">
        <div class="p-2 my-2 hover:bg-blue-50 dark:hover:bg-white/20 rounded-full w-min" :class="defaultTransition">
            <nuxt-link to="/">
                <div>
                    <LogoTwitter :width="width" :height="height" className="text-blue-400 dark:text-white" />
                </div>
            </nuxt-link>
        </div>
    </div>
</template>
<script setup>
const width = ref(30);
const height = ref(30);
const { defaultTransition } = useTailwindConfig();
</script>
