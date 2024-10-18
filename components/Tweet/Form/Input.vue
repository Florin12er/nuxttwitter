<template>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <div class="flex items-start space-x-4">
            <img :src="props.user?.profileImage" alt="" class="w-12 h-12 rounded-full" />
            <div class="flex-grow">
                <div class="relative">
                    <textarea ref="textareaRef" v-model="text" @input="autoGrow"
                        class="w-full p-3 text-lg text-gray-900 placeholder-gray-400 bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
                        :placeholder="props.placeholder" rows="1"></textarea>
                </div>

                <!-- File Preview -->
                <div v-if="inputImageUrl" class="mt-3">
                    <button @click="handleRemove" class="relative top-12 left-1  p-2 text-white bg-black rounded-full transition duration-200 hover:opacity-70">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <img :src="inputImageUrl" alt="" class="border rounded-lg max-w-full h-auto"
                        :class="twitterBorderColor" />
                </div>

                <!-- Icons and Submit Button -->
                <div class="flex items-center justify-between mt-3">
                    <div class="flex space-x-2">
                        <button @click="handleImageClick"
                            class="p-2 text-blue-500 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-full transition duration-200">
                            <svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor">
                                <g>
                                    <path
                                        d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z">
                                    </path>
                                    <circle cx="8.868" cy="8.309" r="1.542"></circle>
                                </g>
                            </svg>
                        </button>
                        <NuxtEmoji @on-select="select" :theme="light" :placement="bottom">
                            <template v-slot:button>
                                <button
                                    class="p-2 text-blue-500 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-full transition duration-200">
                                    <svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor">
                                        <g>
                                            <path
                                                d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z">
                                            </path>
                                            <path
                                                d="M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z">
                                            </path>
                                            <circle cx="14.738" cy="9.458" r="1.478"></circle>
                                            <circle cx="9.262" cy="9.458" r="1.478"></circle>
                                        </g>
                                    </svg>
                                </button>
                            </template>
                        </NuxtEmoji>
                    </div>
                    <UIButton size="sm" :disabled="isDisabled" @onClick="handleFormSubmit"
                        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-200">
                        Tweet
                    </UIButton>
                </div>
            </div>
        </div>

        <input type="file" ref="imageInput" hidden accept="image/png, image/gif, image/jpeg, image/jpg"
            @change="handleImageChange" />
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const { twitterBorderColor } = useTailwindConfig();

const imageInput = ref();
const selectedFile = ref(null);
const inputImageUrl = ref(null);
const text = ref("");
const textareaRef = ref(null);

const emits = defineEmits(["onSubmit"]);

const isDisabled = computed(() => text.value === "");

const props = defineProps({
    user: {
        type: Object,
        required: true,
    },
    placeholder: {
        type: String,
        required: true,
    },
});

function handleFormSubmit() {
    emits("onSubmit", {
        text: text.value,
        mediaFiles: [selectedFile.value],
    });
}

function handleImageClick() {
    imageInput.value.click();
}

function handleImageChange(event) {
    const file = event.target.files[0];
    selectedFile.value = file;
    const reader = new FileReader();
    reader.onload = (event) => {
        inputImageUrl.value = event.target.result;
    };
    reader.readAsDataURL(file);
}
function handleRemove() {
    inputImageUrl.value = null;
    selectedFile.value = null;
}

function select(emojiObject) {
    text.value += emojiObject;
    autoGrow();
}

function autoGrow() {
    if (textareaRef.value) {
        textareaRef.value.style.height = "auto";
        textareaRef.value.style.height = textareaRef.value.scrollHeight + "px";
    }
}

onMounted(() => {
    autoGrow();
});
</script>

<style scoped>
textarea {
    min-height: 50px;
    overflow-y: hidden;
}

textarea:focus {
    outline: none;
}
</style>
