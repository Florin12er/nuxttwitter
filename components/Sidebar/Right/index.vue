<template>
  <div class="flex flex-col">
    <SidebarRightPreviewCard title="What is happening?">
      <SidebarRightPreviewCardItem
        v-for="whatsHappening in whatsHappeningItems"
      >
        <div>
          <h2 class="font-bold text-md">{{ whatsHappening.title }}</h2>
          <p class="text-xs">{{ whatsHappening.count }}</p>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
    <SidebarRightPreviewCard title="Who to follow?">
      <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems">
        <div class="flex flex-row justify-between p-2 items-center">
          <div class="flex flex-row">
            <img
              :src="whoToFollow.image"
              class="w-8 h-8 rounded-full"
              :alt="whoToFollow.name"
            />
            <div class="flex flex-col ml-2">
              <h1 class="font-bold text-sm">{{ whoToFollow.name }}</h1>
              <p class="text-xs">@{{ whoToFollow.handle }}</p>
            </div>
          </div>
          <div class="flex h-full">
            <button class="px-4 py-2 font-bold text-xs text-white dark:text-black bg-black dark:bg-white rounded-full">
              Follow
            </button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>

<script setup>
const whatsHappeningItems = [
  {
    title: "What is happening?",
    count: "10k followers",
  },
  {
    title: "Michael Jackson",
    count: "3k followers",
  },
];

const whoToFollowItems = [
  {
    name: "Michael Jackson",
    handle: "mjackson",
    image: "https://i.pravatar.cc/30",
  },
  {
    name: "Michael Jackson",
    handle: "mjackson",
    image: "https://i.pravatar.cc/30",
  },
];
</script>
