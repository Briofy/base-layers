<template>
  <button
    v-show="!headerConfig.hideUserInfo"
    type="button"
    class="flex mx-3 text-sm bg-gray-800 rounded md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
    id="user-menu-button"
    aria-expanded="false"
    data-dropdown-toggle="dropdown"
  >
    <span class="sr-only">Open user menu</span>
    <img
      v-if="userData?.avatar"
      class="w-8 h-8 rounded"
      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      alt="user photo"
    />
    <div
      v-else
      class="relative w-8 h-8 overflow-hidden bg-gray-100 rounded dark:bg-gray-600"
    >
      <Icon
        name="mdi:account"
        class="absolute w-10 h-10 text-gray-400 -left-1"
      />
    </div>
  </button>
  <!-- Dropdown menu -->
  <div
    class="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
    id="dropdown"
  >
    <div class="py-3 px-4">
      <span class="block text-sm font-semibold text-gray-900 dark:text-white">
        {{
          `${userData?.first_name ?? ""} ${userData?.middle_name ?? ""} ${
            userData?.last_name ?? ""
          }`
        }}
      </span>
      <span
        class="block text-sm font-light text-gray-500 truncate dark:text-gray-400"
      >
        {{ userData?.email }}
      </span>
    </div>
    <ul
      class="py-1 font-light text-gray-500 dark:text-gray-400"
      aria-labelledby="dropdown"
    >
      <li>
        <a
          v-for="item in accountLinks"
          :key="item.title"
          :href="item.link"
          class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
          >{{ item.title }}</a
        >
      </li>
    </ul>
    <ul
      class="py-1 font-light text-gray-500 dark:text-gray-400"
      aria-labelledby="dropdown"
    >
      <li>
        <a
          href="#"
          class="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <Icon
            name="mdi-cards-heart"
            class="mr-2 rtl:ml-2 w-5 h-5 text-gray-400"
          />
          My likes</a
        >
      </li>
      <li>
        <a
          href="#"
          class="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <Icon
            name="mdi-folder-multiple"
            class="mr-2 rtl:ml-2 w-5 h-5 text-gray-400"
          />

          Collections</a
        >
      </li>
      <li>
        <a
          href="#"
          class="flex justify-between items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <span class="flex items-center">
            <Icon
              name="mdi-fire"
              class="mr-2 rtl:ml-2 w-5 h-5 text-blue-600 dark:text-blue-500"
            />

            Pro version
          </span>
          <Icon
            name="mdi-chevron-right"
            class="w-5 h-5 rtl:rotate-180 text-gray-400"
          />
        </a>
      </li>
    </ul>
    <ul
      class="py-1 font-light text-gray-500 dark:text-gray-400"
      aria-labelledby="dropdown"
    >
      <li>
        <button
          class="block w-full text-start py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          @click="signoutUser"
        >
          Sign out
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const headerConfig = useAppConfig().config?.header;
const accountLinks = useAppConfig().config?.userAvatarMenu.accountLinks;
const userData = ref<User>();
userData.value = useCookie("user").value as any;
const signoutUser = () => {
  // localStorage.removeItem("user");
  useCookie("user").value = undefined;
  location.replace("/");
};
</script>
