<script setup>
import { HomeIcon, HashtagIcon } from "@heroicons/vue/20/solid";
import {
  DocumentIcon,
  EnvelopeIcon,
  BookmarkIcon,
  BellIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/vue/24/outline";
const width = ref(28);
const height = ref(28);
const { defaultTransition } = useTailwindConfig();
</script>

<template>
  <div class="flex flex-col h-screen">
    <div
      class="p-2 my-2 hover:bg-blue-50 dark:hover:bg-white/20 rounded-full w-min"
      :class="defaultTransition"
    >
      <nuxt-link to="/">
        <div>
          <LogoTwitter
            :width="width"
            :height="height"
            className="text-blue-400 dark:text-white"
          />
        </div>
      </nuxt-link>
    </div>
    <div class="mt-2 space-y-3">
      <SidebarLeftTab :link="'/'">
        <template v-slot:icon>
          <HomeIcon class="w-7 h-7" />
        </template>
        <template v-slot:name> Home </template>
      </SidebarLeftTab>
      <SidebarLeftTab :link="'/explore'">
        <template v-slot:icon>
          <HashtagIcon class="w-7 h-7" />
        </template>
        <template v-slot:name> Explore</template>
      </SidebarLeftTab>
      <SidebarLeftTab :link="'/notifications'">
        <template v-slot:icon>
          <BellIcon class="w-7 h-7" />
        </template>
        <template v-slot:name> Notifications</template>
      </SidebarLeftTab>
      <SidebarLeftTab :link="'/messages'">
        <template v-slot:icon>
          <EnvelopeIcon class="w-7 h-7" />
        </template>
        <template v-slot:name> Messages</template>
      </SidebarLeftTab>
      <SidebarLeftTab :link="'/bookmarks'">
        <template v-slot:icon>
          <BookmarkIcon class="w-7 h-7" />
        </template>
        <template v-slot:name> Bookmarks</template>
      </SidebarLeftTab>
      <SidebarLeftTab :link="'/lists'">
        <template v-slot:icon>
          <DocumentIcon class="w-7 h-7" />
        </template>
        <template v-slot:name> Lists</template>
      </SidebarLeftTab>
      <SidebarLeftTab :link="'/profile'">
        <template v-slot:icon>
          <UserIcon class="w-7 h-7" />
        </template>
        <template v-slot:name> Profile</template>
      </SidebarLeftTab>
      <SidebarLeftTab :link="'/settings'">
        <template v-slot:icon>
          <EllipsisHorizontalCircleIcon class="w-7 h-7" />
        </template>
        <template v-slot:name> More</template>
      </SidebarLeftTab>
    </div>
  </div>
</template>
