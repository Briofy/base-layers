<template>
  <footer class="bg-white dark:bg-gray-800 rounded">
    <div class="md:pt-7 p-4 container mx-auto">
      <div class="md:flex grid justify-between grid-cols-2 lg:grid-cols-5">
        <!-- Links -->
        <div v-for="(footerItem, footerIndex) in footerConfig.footerLinks">
          <h2 class="mb-6 text-sm font-semibold text-gray-900 dark:text-white">
            {{ footerItem.title }}
          </h2>
          <ul class="text-gray-500 dark:text-gray-400">
            <li
              v-for="(link, index) in footerItem.links"
              :key="index"
              class="mb-4 text-xs"
            >
              <NuxtLink class="hover:underline" :to="link.link">
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="pt-10 text-center px-4">
        <div class="row sm:flex justify-center sm:justify-between space-x-3">
          <NuxtLink
            :to="localepath('/')"
            class="flex items-center mb-4 text-2xl font-semibold text-gray-900 lg:mb-0 dark:text-white"
          >
            <NuxtImg
              class="block md:m-0 mx-auto dark:hidden"
              width="100"
              height="100"
              :src="footerConfig.logo"
            />
            <NuxtImg
              class="md:m-0 mx-auto hidden dark:block"
              width="100"
              height="100"
              :src="footerConfig.darkLogo"
            />
          </NuxtLink>
          <form
            action="#"
            class="flex w-full sm:max-w-sm lg:ms-auto max-h-12"
            v-show="!footerConfig.hideEmailBox"
          >
            <div class="relative w-full">
              <label
                for="email"
                class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Email address</label
              >
              <div
                class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
              >
                <ClientOnly>
                  <Icon
                    name="mdi:email-outline"
                    class="w-5 h-5 text-gray-400"
                  />
                </ClientOnly>
              </div>
              <input
                type="email"
                id="email"
                class="outline-none h-12 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-l rtl:rounded-l-none rtl:rounded-r border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your email"
                required
              />
            </div>
            <button
              type="submit"
              class="py-1 px-5 text-sm text-center text-white rounded-r rtl:rounded-l rtl:rounded-r-none border cursor-pointer !bg-primary-600 border-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Subscribe
            </button>
          </form>
        </div>
        <hr
          class="lg:my-8 my-6 border-gray-200 sm:mx-auto dark:border-gray-700"
        />
        <div
          class="pb-5 grid grid-cols-3 sm:space-y-0 space-y-2 justify-between"
        >
          <div class="col-span-full sm:col-span-2 lg:col-span-1 order-1">
            <div class="flex mt-1 lg:mt-0 justify-center sm:justify-start">
              <span
                class="block text-sm text-gray-500 dark:text-gray-400 text-clip overflow-hidden"
                v-html="footerConfig.copyRight"
              ></span>
            </div>
          </div>
          <div class="lg:col-span-1 col-span-full order-last lg:order-2">
            <div
              class="flex flex-wrap items-center justify-center sm:mt-5 lg:mt-0 text-sm text-gray-500 lg:mb-0 dark:text-gray-400"
            >
              <ClientOnly>
                <p v-html="footerConfig.partOf"></p>
              </ClientOnly>
            </div>
          </div>
          <div class="sm:col-span-1 col-span-full order-3">
            <div class="flex justify-center sm:justify-end space-x-4">
              <a
                v-for="(social, index) in footerConfig.socials"
                :key="index"
                :href="social.link"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <Icon :name="social.icon" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localepath = useLocalePath();
const footerConfig = useAppConfig().config?.footer;
</script>

<style scoped></style>
