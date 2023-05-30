<template>
  <div
    class="items-center row hidden w-full md:flex md:w-auto md:order-1"
    id="search-bar"
  >
    <div class="relative mt-3 md:hidden">
      <div
        class="absolute inset-y-0 left-0 rtl:right-0 flex items-center ps-3 pointer-events-none"
      >
        <Icon name="mdi-magnify" class="w-6 h-6 text-gray-500" />
      </div>
      <input
        type="text"
        id="search-navbar"
        class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-sm outline-none bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search..."
      />
    </div>
  </div>

  <div
    class="items-center row hidden w-full md:flex md:w-auto md:order-1"
    id="navbar-search"
  >
    <div class="relative mt-3 sm:hidden">
      <div
        class="absolute inset-y-0 left-0 rtl:right-0 flex items-center ps-3 pointer-events-none"
      >
        <Icon name="mdi-magnify" class="w-6 h-6 text-gray-500" />
      </div>
      <input
        type="text"
        id="search-navbar"
        class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-sm outline-none bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search..."
      />
    </div>
    <ul
      id="accordion-color"
      data-accordion="collapse"
      class="flex md:hidden flex-col md:p-0 my-4 font-medium border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
    >
      <li
        v-for="(extraLinkItem, extraLinkIndex) in mobileLinks"
        :key="extraLinkIndex"
        class="block py-2 relative pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
      >
        <!-- <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a> -->
        <NuxtLink
          v-if="!extraLinkItem.subMenu"
          :key="extraLinkIndex"
          :to="localepath(extraLinkItem.link as string)"
          class="mx-2 hover:text-blue-700 text-gray-600 dark:text-gray-300"
          active-class="!text-blue-700 dark:!text-blue-500"
        >
          {{ extraLinkItem.title }}
        </NuxtLink>
        <CompanyMegaMenu />

        <ul v-if="extraLinkItem.subMenu">
          <div
            id="accordion-color"
            data-accordion="collapse"
            data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
          >
            <h2 id="accordion-color-heading-2 flex">
              <NuxtLink
                :key="extraLinkIndex"
                data-accordion-target="#accordion-color-body-2"
                aria-expanded="false"
                aria-controls="accordion-color-body-2"
                class="mx-2 hover:text-blue-700 text-gray-600 dark:text-gray-300 cursor-pointer"
                active-class="!text-blue-700 dark:!text-blue-500"
              >
                {{ extraLinkItem.title }}
                <Icon name="mdi-chevron-down" class="w-6 h-6 shrink-0 inline" />
              </NuxtLink>
            </h2>
            <div
              id="accordion-color-body-2"
              class="hidden"
              aria-labelledby="accordion-color-heading-2"
            >
              <div class="p-5 border-b-0 border-gray-200 dark:border-gray-700">
                <li
                  class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  v-for="item in extraLinkItem.subMenu"
                >
                  <NuxtLink
                    :key="extraLinkIndex"
                    :to="localepath(item.link as string)"
                    class="mx-2 hover:text-blue-700 text-gray-600 dark:text-gray-300"
                    active-class="!text-blue-700 dark:!text-blue-500"
                  >
                    {{ item.title }}
                  </NuxtLink>
                </li>
              </div>
            </div>
          </div>
        </ul>
      </li>
    </ul>
  </div>

  <div
    id="accordion-color"
    data-accordion="collapse"
    data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
  >
    <div
      class="items-center row hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-search"
    >
      <ul
        class="flex md:hidden flex-col md:p-0 my-4 font-medium border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
      >
        <li
          v-for="(extraLinkItem, extraLinkIndex) in mobileLinks"
          class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
        >
          <!-- <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a> -->

          <NuxtLink
            :key="extraLinkIndex"
            :to="localepath(extraLinkItem.link as string)"
            class="mx-2 hover:text-blue-700 text-gray-600 dark:text-gray-300"
            active-class="!text-blue-700 dark:!text-blue-500"
          >
            {{ extraLinkItem.title }}
          </NuxtLink>
          <CompanyMegaMenu />

          <ul v-if="extraLinkItem.subMenu">
            <div
              id="accordion-color"
              data-accordion="collapse"
              data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
            >
              <h2
                id="accordion-color-heading-2"
                class="hover:text-blue-700 text-gray-600 dark:!text-gray-300"
              >
                {{ extraLinkItem.title }}
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:focus:!text-gray-100 hover:bg-blue-100 dark:hover:bg-gray-800"
                  data-accordion-target="#accordion-color-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-color-body-2"
                >
                  <span></span>
                  <Icon name="mdi-chevron-down" class="w-6 h-6 shrink-0" />
                </button>
              </h2>
              <div
                id="accordion-color-body-2"
                class="hidden"
                aria-labelledby="accordion-color-heading-2"
              >
                <div
                  class="p-5 border border-b-0 border-gray-200 dark:border-gray-700"
                >
                  <li
                    class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    v-for="item in extraLinkItem.subMenu"
                  >
                    <NuxtLink
                      :key="extraLinkIndex"
                      :to="localepath(item.link as string)"
                      class="mx-2 hover:text-blue-700 text-gray-600 dark:text-gray-300"
                      active-class="!text-blue-700 dark:!text-blue-500"
                    >
                      {{ item.title }}
                    </NuxtLink>
                  </li>
                </div>
              </div>
            </div>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const searchInput = ref();
const userData = ref<User | unknown>();
const localepath = useLocalePath();

// Sub Nav Links
const subNavLinks = ref<Menu[]>([
  { title: "Finance", link: "/my/finance" },
  { title: "Products", link: "/my/products" },
  { title: "Trading Accounts", link: "/my/finance/transactions" },
]);

// Links beside dark mode button
const extraLinks = ref<Menu[]>([
  { title: "Pricing", link: "/pricing" },
  { title: "Help", link: "/help" },
  {
    title: "company",
    link: "#",
    subMenu: [
      { title: "Animation", link: "/" },
      { title: "Branding", link: "/" },
      { title: "Branding", link: "/" },
      { title: "Illustration", link: "/" },
      { title: "Mobile", link: "/" },
      { title: "Print", link: "/" },
      { title: "Product Design", link: "/" },
      { title: "Web Design", link: "/" },
    ],
  },
]);

const mobileLinks = ref([...extraLinks.value]);

let userStorage = useCookie("user").value;
userData.value = userStorage ?? undefined;

if (userData.value) {
  mobileLinks.value = [...subNavLinks.value];
}

// color mode
onBeforeMount(() => {
  // Ctrl K press to focus search input
  document.addEventListener("keydown", (event: any) => {
    if (
      event.ctrlKey &&
      (event.keyCode == 83 || event.keyCode == 11 || event.keyCode == 75)
    ) {
      searchInput.value.focus();
      event.preventDefault();
    }
  });
});
</script>
