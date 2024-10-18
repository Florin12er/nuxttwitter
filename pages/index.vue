<template>
  <div>
    <MainSection title="home" :loading="isLoading">
            <TweetForm :user="user"/>
    </MainSection>
  </div>
</template>

<script setup>
const { useAuthUser, useAuthLoading } = useAuth();

const isLoading = useAuthLoading();

const user = useAuthUser();
</script>
