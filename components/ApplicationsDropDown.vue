<template>
  <!-- Apps -->
  <button
    v-show="!headerConfig.hideappMenu"
    type="button"
    data-dropdown-toggle="apps-dropdown"
    class="p-2 rtl:ml-2 text-gray-500 rounded hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
  >
    <span class="sr-only">View notifications</span>
    <!-- Icon -->
    <Icon name="mdi-view-grid" class="w-6 h-6" />
  </button>
  <!-- Dropdown menu -->
  <div
    class="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600"
    id="apps-dropdown"
  >
    <div
      class="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
    >
      Apps
    </div>
    <div class="grid grid-cols-3 gap-4 p-4">
      <a
        v-for="item in appMenuData"
        :key="item.iconName"
        :href="item.link"
        class="block p-4 text-center rounded hover:bg-gray-100 dark:hover:bg-gray-600 group"
      >
        <Icon
          :name="item.iconName"
          class="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
        />
        <div class="text-sm text-gray-900 dark:text-white">
          {{ item.iconTitle }}
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const appMenuData = useAppConfig().config?.appsMenu;

const headerConfig = useAppConfig().config?.header;
</script>

<style scoped></style>
