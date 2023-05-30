<template>
  <!-- Block start -->
  <div
    id="banner"
    tabindex="-1"
    class="flex justify-between rounded top-0 py-1 px-4 w-full bg-white border border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800"
  >
    <div class="flex items-center mx-auto">
      <p class="text-xs font-medium text-gray-900 md:my-0 dark:text-white">
        <span
          class="hidden md:inline-flex rtl:ml-2 bg-blue-100 text-blue-800 font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
          >{{ announcementConfig.badge }}</span
        >
        {{ announcementConfig.title }}

        <NuxtLink
          class="inline-flex items-center ml-0 rtl:mr-2 text-xs font-medium text-blue-600 md:ml-2 dark:text-blue-500 hover:underline"
          :to="announcementConfig.link.src"
        >
          {{ announcementConfig.link.text }}

          <Icon
            name="mdi-arrow-right-thick"
            class="ml-1 mt-1 w-4 h-4 rtl:mr-1 rtl:mt-1 text-blue-600 dark:text-blue-500 rtl:rotate-180"
          />
        </NuxtLink>
      </p>
    </div>
    <button
      data-collapse-toggle="banner"
      type="button"
      class="inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <Icon name="mdi-close" class="w-5 h-5" />
    </button>
  </div>
  <!-- Block end -->
</template>

<script setup lang="ts">
const announcementConfig = useAppConfig().config?.announcement;
</script>
