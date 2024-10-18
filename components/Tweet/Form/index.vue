<template>
    <div>

        <div v-if="loading" class="flex items-center justify-center py-6">
            <UISpinner />
        </div>
        <div v-else>
            <TweetFormInput :placeholder="props.placeholder" :user="props.user" @onSubmit="handleFormSubmit" />
        </div>

    </div>
</template>
<script setup>
import { toast } from 'vue-sonner'
const emits = defineEmits(['onSuccess'])
const loading = ref(false)
const { postTweet } = useTweets()

const props = defineProps({
    user: {
        type: Object,
        required: true
    },
    placeholder: {
        type: String,
        default: "What's happening ?"
    },
})

async function handleFormSubmit(data) {
    loading.value = true
    try {
        const response = await postTweet({
            text: data.text,
            mediaFiles: data.mediaFiles,
        })
        toast.success('Tweet posted successfully!!')

        emits('onSuccess', response.tweet)
    } catch (error) {
        console.log(error)
        toast.error('Something went wrong!!')
    } finally {
        loading.value = false
    }
}

</script>
