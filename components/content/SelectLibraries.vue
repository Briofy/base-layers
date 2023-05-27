<template>
  <div
    class="my-5 grid gap-6 md:grid-cols-2 grid-cols-1 items-center"
    :style="dir === 'rtl' ? 'direction:rtl' : ''"
  >
    <ClientOnly>
      <div class="col-span-1">
        <slot />
      </div>

      <div class="col-span-1">
        <div
          class="w-full box-border bg-gray-200 text-black dark:bg-gray-700 rounded-lg"
        >
          <div
            class="pt-3 px-4 py-5 text-gray-500 dark:text-white text-xs uppercase"
          >
            Client Libraries
          </div>
          <ul
            class="mb-4 list-none cursor-pointer flex items-center"
            style="list-style-type: none"
          >
            <li
              class="flex-auto text-center"
              v-for="(item, index) in libraries"
              :key="index"
            >
              <div
                @click="toggleTabs(index, item.name, $event)"
                class="hover:text-blue-500 text-gray-700 dark:text-white"
                :class="openTab === index ? '!text-blue-500' : ''"
              >
                <img
                  :src="`/img/${item.name.toLowerCase()}.svg`"
                  class="w-8 h-8 mx-auto"
                  alt=""
                />
                <span class="text-xs font-bold py-3">
                  {{ item.name }}
                </span>
              </div>
            </li>
          </ul>
          <div
            class="min-w-0 break-words bg-gray-50 w-full py-4 shadow-lg rounded-b-lg dark:bg-gray-900 dark:text-white"
          >
            <div class="px-3 py-1 flex-auto">
              <div
                class="tab-content tab-space flex flex-row justify-between items-center"
              >
                <div v-show="openTab === index">
                  <pre
                    class="text-sm"
                  ><span class="disable-copy text-gray-400"> $ </span>{{libraries[openTab]?.code}}</pre>
                </div>
                <div class="flex flex-row justify-between items-center">
                  <div class="i-carbon-logo-github cursor-pointer" />
                  <a
                    :href="libraries[openTab]?.link"
                    target="_blank"
                    class="dark:text-gray-100 decoration-none !dark:text-white text-sm mx-1"
                  >
                    <Icon name="mdi:github" size="20" />
                  </a>
                  <!--  <div v-if="isSupported" class="mt-1">
                  <button @click="copy(libraries[openTab].code)">
                    <span v-if="!copied"
                      ><Tooltip class="mt-2" tooltip-text="Copy">
                        <div
                          class="i-carbon-copy text-gray-600 !dark:text-white cursor-pointer mx-2"
                        /> </Tooltip
                    ></span>
                    <span v-else>
                      <div class="i-carbon-checkmark cursor-pointer mx-2"
                    /></span>
                  </button>
                </div>
                <p v-else class="text-xs">Not Support Clipboard API</p> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>
<script>
import { setLabraries } from "@/composables/useLabraries";

export default {
  name: "SelectLibraries",

  props: {
    libraries: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { slots }) {
    const router = useRouter();
    const route = useRoute();
    const dir = "ltr";

    const openTab = ref(0);
    const index = ref(0);

    function toggleTabs(tabNumber, name, { pageY }) {
      openTab.value = tabNumber;
      index.value = tabNumber;
      router.push(`${route.path}?lang=${name.toLowerCase()}&pos=${pageY}`);
    }
    onBeforeMount(() => {
      setLabraries(props.libraries);
    });
    onMounted(() => {
      handeleNavigationOnLangChange(route.query);
    });
    function handeleNavigationOnLangChange(params) {
      if (params.lang) {
        const findQueryIndex = props.libraries.findIndex((item) => {
          return item.name.toLowerCase() === params.lang;
        });
        openTab.value = findQueryIndex;
        index.value = findQueryIndex;
        nextTick(() => {
          window.scrollTo({
            top: parseInt(params.pos) > 400 ? parseInt(params.pos) : 0,
            left: 0,
            behavior: "smooth",
          });
        });
      } else {
        router.push(
          `${route.path}?lang=${props.libraries[0].name.toLowerCase()}&pos=${0}`
        );
      }
    }
    watch(
      () => route.query.lang,
      (val) => {
        console.log("route change in select library", route.query);
        handeleNavigationOnLangChange(route.query);
      }
    );
    return {
      dir,
      openTab,
      toggleTabs,
      index,
    };
  },
};
</script>
<style scoped>
.vp-doc li + li {
  margin-top: unset;
}
.disable-copy {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.decoration-none {
  text-decoration: none !important;
}
</style>
