<template>
  <nav
    class="bg-white border-gray-200 px-4 lg:px-6 dark:bg-gray-800 md:block hidden"
  >
    <div class="py-3 px-4 mx-auto">
      <div class="container md:px-0 md:mx-auto md:max-w-7xl mx-auto">
        <ul class="flex flex-row mt-0 mr-6 text-sm font-medium px-5">
          <li
            v-for="(subNavItem, subNavIndex) in subNavLinks"
            :key="subNavIndex"
            class="me-8"
          >
            <NuxtLink
              :to="localepath(subNavItem.link)"
              class="py-4 hover:text-blue-700 text-gray-600 dark:text-gray-300 hover:border-b-2 border-blue-600 dark:hover:text-white dark:border-blue-500"
              aria-current="page"
              active-class="!text-blue-700 dark:!text-blue-500 border-b-2 border-blue-600 
              dark:border-blue-500"
            >
              <Icon :name="subNavItem.icon" class="-mt-1" size="16" />
              {{ subNavItem.title }}
            </NuxtLink>
          </li>
        </ul>
        <button
          id="dropdownDefault"
          data-dropdown-toggle="dropdown"
          data-dropdown-placement="bottom"
          class="text-gray-500 md:hidden dark:hover:bg-gray-600 dark:text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-1.5"
        >
          <Icon
            name="mdi-dots-horizontal"
            class="w-5 h-5 text-gray-700 dark:text-gray-400"
          />
        </button>
        <div
          id="dropdown"
          class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
        >
          <ul
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefault"
          >
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Marketplace</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Dashboard</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Resources</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Forum</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Support</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const localepath = useLocalePath();

// Sub Nav Links
const subNavLinks = ref([
  { title: "Finance", link: "/my/finance", icon: "mdi:finance" },
  {
    title: "Products",
    link: "/my/products",
    icon: "mdi:package-variant-closed",
  },
  {
    title: "Trading Accounts",
    link: "/my/finance/transactions",
    icon: "mdi:account-settings-variant",
  },
]);
</script>
