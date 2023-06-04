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
        <a
          @click="changeRoute(subItem.link)"
          class="block px-4 cursor-pointer py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          aria-current="page"
          active-class="!text-blue-700 dark:!text-blue-500 border-b-2 border-blue-600 
              dark:border-blue-500"
        >
          {{ subItem.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Dropdown } from "flowbite";

const localePath = useLocalePath();
const router = useRouter();
const props = defineProps<{
  title: string;
  icon: string;
  submenu: [] | any;
}>();

const changeRoute = (link: string) => {
  router.push(localePath(link));
  /*
   * $targetEl: required
   * $triggerEl: required
   * options: optional
   */
  // set the dropdown menu element
  const $targetEl = document.getElementById(`dropdown-${props.title}`);
  // set the element that trigger the dropdown menu on click
  const $triggerEl = document.getElementById(`sub-${props.title}`);
  const dropdown = new Dropdown($targetEl, $triggerEl);
  // hide the dropdown menu
  dropdown.hide();
};
</script>
