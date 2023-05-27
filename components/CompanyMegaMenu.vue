<template>
  <button
    id="mega-menu-button"
    data-dropdown-toggle="mega-menu"
    class="md:flex hidden items-center pr-4 pl-3 lg:w-auto mx-2 hover:text-blue-700 text-gray-600 dark:text-gray-300 lg:p-0">
    Company
    <svg
      class="ms-1 w-5 h-5 lg:w-4 lg:h-4"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd"></path>
    </svg>
  </button>
  <div
    id="mega-menu"
    class="grid hidden absolute z-10 w-full bg-white border border-gray-100 shadow-md dark:border-gray-700 lg:rounded-lg lg:w-auto lg:grid-cols-3 dark:bg-gray-700">
    <div
      class="p-2 text-gray-900 bg-white lg:rounded-lg dark:text-white lg:col-span-2 dark:bg-gray-800">
      <ul>
        <li v-for="item in plansMenu"
        :key="item.title"
        >
          <a
            :href=item.link
            class="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <div class="p-2 me-4 bg-white rounded-lg shadow dark:bg-gray-700">
             <Icon :name="item.icon" class="w-5 h-5"/>
            </div>
            <div>
              <div class="font-semibold">{{item.title}}</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                {{item.description}}
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div
      class="py-5 px-5 bg-gray-50 lg:rounded-lg lg:col-span-1 dark:bg-gray-700">
      <h3 class="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
        Browse categories
      </h3>
      <ul class="space-y-4 text-sm text-gray-500 dark:text-gray-400">
        <li v-for="item in categoryMenu"
        :key="item.title"
        >
          <a href="#" class="hover:text-primary-600 dark:hover:text-primary-500"
            >{{item.title}}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const categoryMenu=useAppConfig().config?.appCompanyMegaMenu.catergories;
const plansMenu=useAppConfig().config?.appCompanyMegaMenu.plans;
</script>

<style scoped></style>
