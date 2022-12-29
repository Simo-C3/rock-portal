<script setup lang="ts">
const props = defineProps({
  linkIcon: { type: String, required: true },
  linkName: { type: String, required: true },
  linkUrl: { type: String, required: true },
});
</script>

<template>
  <a
    :href="linkUrl"
    :title="linkName"
    target="_blank"
    class="h-[3vw] min-h-[24.5px] max-h-[35.3px] flex items-center link-m"
  >
    <img
      :src="linkIcon"
      :alt="`${linkName} Name`"
      class="h-full w-auto rounded-lg dropshadow link-icon mr-[1.5vw]"
    />
    <div class="link-name">{{ linkName }}</div>
  </a>
</template>

<style scoped>
.link-m {
  margin-top: clamp(16px, 2vw, 23.6px);
  margin-bottom: clamp(16px, 2vw, 23.6px);
}
.link-name {
  font-size: clamp(12px, 1.5vw, 18px);
}
.link-icon {
  margin-right: clamp(12px, 1.5vw, 17.7px);
}
.dropshadow {
  -webkit-filter: drop-shadow(-2px 2px 1px rgba(0, 0, 0, 0.2));
  -moz-filter: drop-shadow(-2px 2px 1px rgba(0, 0, 0, 0.2));
  -ms-filter: drop-shadow(-2px 2px 1px rgba(0, 0, 0, 0.2));
  filter: drop-shadow(-2px 2px 1px rgba(0, 0, 0, 0.2));
}
.link-m:hover .dropshadow {
  -webkit-filter: drop-shadow(-2px 4px 1px rgba(0, 0, 0, 0.2));
  -moz-filter: drop-shadow(-2px 4px 1px rgba(0, 0, 0, 0.2));
  -ms-filter: drop-shadow(-2px 4px 1px rgba(0, 0, 0, 0.2));
  filter: drop-shadow(-2px 4px 1px rgba(0, 0, 0, 0.2));
}
</style>
