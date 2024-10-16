<template>
  <div>
    <MainSection title="home" :loading="isLoading">
      Hello {{ user.name }} !!
    </MainSection>
  </div>
</template>

<script setup>
const { useAuthUser, useAuthLoading } = useAuth();

const isLoading = useAuthLoading();

const user = useAuthUser();
</script>
