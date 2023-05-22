<template>
  <vue-json-pretty
    :data="data"
    style="direction: ltr"
    class="p-3"
    showLength
    virtual
    :showLine="false"
  />
</template>

<script>
import { ref } from "vue";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
// import { withBase } from "vitepress";

export default {
  name: "ResponseData",
  components: {
    VueJsonPretty,
  },
  props: {
    jfile: { type: String },
  },
  async setup(props) {
    const data = ref(null);
    if (!import.meta.env.SSR) {
      await new Promise((r) => setTimeout(r, 2000));
      try {
        console.log();
        const res = await fetch(
          window.location.origin + "/" + props.jfile + ".json",
          { method: "GET" }
        );
        data.value = await res.json();
      } catch (e) {
        console.error(e);
      }
    }
    return { data };
  },
};
</script>
