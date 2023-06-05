<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-800 md:block hidden">
    <div class="py-3 container md:px-0 px-4 mx-auto">
      <div class="mx-auto">
        <ul class="flex flex-row text-sm font-medium">
          <li
            v-for="(subNavItem, subNavIndex) in subNavLinks"
            :key="subNavIndex"
            class="me-8 relative"
          >
            <NuxtLink
              v-if="!subNavItem.submenu"
              :to="localepath(subNavItem.link)"
              class="py-4 hover:text-blue-700 text-gray-600 dark:text-gray-300 hover:border-b-2 border-blue-600 dark:hover:text-white dark:border-blue-500"
              aria-current="page"
              active-class="!text-blue-700 dark:!text-blue-500 border-b-2 border-blue-600 
              dark:border-blue-500"
            >
              <Icon
                :name="(subNavItem.icon as string)"
                class="-mt-1"
                size="16"
              />
              {{ subNavItem.title }}
            </NuxtLink>
            <BaseDropDown
              v-else
              :icon="subNavItem.icon"
              :link="subNavItem.link"
              :title="subNavItem.title"
              :submenu="subNavItem.submenu"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const localepath = useLocalePath();
// Sub Nav Links
const subNavLinks = ref(useAppConfig().config.header.subnavLinks);
</script>
