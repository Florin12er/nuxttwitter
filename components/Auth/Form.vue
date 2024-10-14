<template>
    <div class="pt-5 space-y-6">
        <UIInput v-model="data.username" label="Username" placeholder="@username">
            <UserIcon class="w-5 h-5 text-gray-400 dark:text-gray-500" />
        </UIInput>
        <UIInput v-model="data.password" :type="passwordFieldType" label="Password" placeholder="*********">
            <button @click="togglePasswordVisibility" type="button" class="focus:outline-none">
                <EyeIcon class="w-5 h-5 text-gray-400 dark:text-gray-500" />
            </button>
        </UIInput>
        <button @click="handleLogin">Login</button>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { toast } from 'vue-sonner'
import { EyeIcon, UserIcon } from "@heroicons/vue/20/solid";

const username = ref("Your Username");
const password = ref("Password");
const passwordFieldType = ref("password");
const data = reactive({
    username: "",
    password: "",
    loading: false,
});

async function handleLogin() {
    const { login } = useAuth();
    data.loading = true;

    try {
        await login({ username: data.username, password: data.password });
    } catch (error) {
        toast.error("Invalid username or password");
    } finally {
        data.loading = false;
    }
}

function togglePasswordVisibility() {
    passwordFieldType.value =
        passwordFieldType.value === "password" ? "text" : "password";
}
</script>
