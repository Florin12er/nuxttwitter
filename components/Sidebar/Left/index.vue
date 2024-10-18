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
      <div>
        <div class="hidden xl:block">
          <UIButton liquid size="lg">
            <span class="font-bold"> Tweet </span>
          </UIButton>
        </div>
        <div class="block xl:hidden">
          <UIButton>
            <div class="w-6 h-6 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                />
              </svg>
            </div>
          </UIButton>
        </div>
      </div>
    </div>
  </div>
</template>
