<template>
  <a
    :id="`sub-${title}`"
    class="py-4 hover:text-blue-700 text-gray-600 dark:text-gray-300 hover:border-b-2 border-blue-600 dark:hover:text-white dark:border-blue-500"
    :class="
      route.path.includes(link)
        ? '!dark:border-blue-500 !border-b-2 !border-blue-600'
        : ''
    "
  >
    <button @click="toggleDropDown" @blur="closeDropDown">
      <Icon :name="icon" />
      {{ title }}
      <Icon name="mdi:chevron-down" /></button
  ></a>
  <!-- Dropdown menu -->
  <div
    v-show="showDropDown"
    :id="`dropdown-${title}`"
    class="z-10 absolute left-0 top-8 bg-white divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700"
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
          <Icon v-if="subItem.icon" :name="subItem.icon" class="me-1" />
          {{ subItem.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const router = useRouter();
const route = useRoute();
const props = defineProps<{
  title: string;
  icon?: string;
  link: string;
  submenu: [] | any;
}>();

console.log(route);

const showDropDown = ref(false);
const changeRoute = (link: string) => {
  router.push(localePath(link));
};

const toggleDropDown = () => {
  setTimeout(() => {
    showDropDown.value = !showDropDown.value;
  }, 150);
};
const closeDropDown = () => {
  setTimeout(() => {
    showDropDown.value = false;
  }, 150);
};
</script>
