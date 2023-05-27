<template>
  <Suspense>
    <template #default>
      <div
        class="grid gap-6 md:grid-cols-2 grid-cols-1 my-5"
        :style="dir === 'rtl' ? 'direction:rtl' : ''"
      >
        <section class="mx-2 col-span-1 text-sm">
          <h2 class="text-xl">Schema</h2>
          <span class="text-xs schema">
            <ul>
              <li class="my-2 text-sm">
                <code>succeed</code> <span>Boolean</span>
                <p>The status of request.</p>
              </li>
              <li class="my-2 text-sm">
                <code>message</code> <span>String</span>
                <p>The message of request.</p>
              </li>
              <li class="my-2 text-sm">
                <code>result</code> <span>JSON Array</span>
                <p>The result of request.</p>
              </li>
              <div class="result">
                <slot name="result" />
              </div>
              <li class="meta">
                <code>meta</code> <span>JSON Array</span>
                <p>The meta of request.</p>
                <slot name="meta" />
              </li>
            </ul>
          </span>
        </section>
        <section
          class="sticky top-36 col-span-1 bg-gray-50 dark:bg-gray-900 rounded-lg min-w-full max-w-sm h-fit overflow-auto overflow-x-auto"
        >
          <div
            class="bg-gray-200 title dark:bg-gray-700 dark:text-white p-2 rounded-t-lg mb-4 sticky top-0 z-1"
          >
            RESPONSE
          </div>
          <ResponseData :jfile="jfile" />
        </section>
      </div>
    </template>
    <template #fallback>
      <div class="flex justify-center items-center h-64">
        <div class="text-gray-500 dark:text-gray-400">Loading...</div>
      </div>
    </template>
  </Suspense>
</template>
<script>
import ResponseData from "./ResponseData.vue";

export default {
  name: "Response",
  components: {
    ResponseData,
  },
  props: {
    jfile: { type: String },
  },
  setup(props) {
    const dir = "ltr";
    return { dir, props };
  },
};
</script>
<style>
.vjs-tree-node.is-highlight,
.vjs-tree-node:hover {
  background-color: rgba(255, 255, 255, 0.26);
}
.title {
  font-family: monospace, monospace, sans-serif;
  font-size: 0.9em;
  color: #858585;
  font-weight: bolder;
}
.schema ul li span,
.datatype {
  font-family: monospace, monospace, sans-serif;
  font-size: 0.82em;
  color: #858585;
  font-weight: bolder;
}
.schema {
  /* add style for schema code like stripe documention */
  font-family: monospace, monospace, sans-serif;
}
.schema p {
  /* add style for schema code like stripe documention */
  font-family: monospace, monospace, sans-serif;
  font-size: 0.82em;
  color: #858585;
  font-weight: bolder;
  line-height: 1rem !important;
}
.result {
  margin-bottom: 1rem;
}
.result hr {
  @apply my-3 dark:border-gray-700 border-gray-200;
}
.result ul {
  @apply list-none mx-0 px-0 my-0;
}
.result ul li {
  @apply text-sm  list-none font-light;
  line-height: 1.5rem !important;
}
.result ul li span {
  @apply text-xs  font-normal;
}
.result ul li code {
  @apply text-xs  font-normal mx-0 bg-gray-200 dark:bg-gray-700 dark:text-white px-1 rounded-sm;
}
.result ul li p {
  @apply text-sm  list-none font-light;
}
</style>
