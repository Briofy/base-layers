<template>
  <a
    :id="`sub-${title}`"
    :data-dropdown-toggle="`dropdown-${title}`"
    class="py-4 hover:text-blue-700 text-gray-600 dark:text-gray-300 hover:border-b-2 border-blue-600 dark:hover:text-white dark:border-blue-500"
    role="button"
  >
    <Icon :name="icon" />
    {{ title }}
    <Icon name="mdi:chevron-down" />
  </a>
  <!-- Dropdown menu -->
  <div
    :id="`dropdown-${title}`"
    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
  >
    <ul
      class="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownDefaultButton"
    >
      <li v-for="(subItem, subIndex) in submenu">
        <NuxtLink
          :to="subItem.link"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          aria-current="page"
          active-class="!text-blue-700 dark:!text-blue-500 border-b-2 border-blue-600 
              dark:border-blue-500"
        >
          {{ subItem.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  icon: string;
  submenu: [] | any;
}>();
</script>
