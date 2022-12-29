<script setup lang="ts">
const props = defineProps({
  pinColor: { type: String, required: true },
});
</script>

<template>
  <div
    class="absolute border-solid border-b-[5px] border-l-2 border-r-2 border-gray-700 border-opacity-40 overflow-hidden z-50 paper-wrapper"
  >
    <div
      class="bg-[#f6f2e5] w-full h-full z-10 min-h-[100px] relative pb-5 paper"
    >
      <div
        class="w-[1.5vw] h-[1.5vw] min-w-[13px] min-h-[13px] max-w-[18.6px] max-h-[18.6px] rounded-full absolute top-[1vw] left-[50%] -translate-x-1/2 pin"
        :class="{
          yellow: pinColor === 'yellow',
          blue: pinColor === 'blue',
          green: pinColor === 'green',
          red: pinColor === 'red',
        }"
      />
      <slot />
    </div>
  </div>
</template>

<style scoped>
.paper-wrapper {
  border-radius: 10px 50px/50px 10px;
}

.paper {
  padding-top: clamp(24px, 3vw, 35.4px);
  padding-left: clamp(24px, 3vw, 35.4px);
  padding-right: clamp(24px, 3vw, 35.4px);
  padding-bottom: clamp(10px, 1vw, 11.8px);
}

.yellow {
  --pin-color-light: rgba(255, 224, 0, 1);
  --pin-color: rgba(224, 162, 8, 1);
}

.blue {
  --pin-color-light: rgb(0, 132, 255);
  --pin-color: rgb(8, 15, 224);
}

.red {
  --pin-color-light: rgb(255, 0, 111);
  --pin-color: rgb(224, 8, 8);
}

.green {
  --pin-color-light: rgb(123, 255, 0);
  --pin-color: rgb(15, 224, 8);
}

.pin {
  box-shadow: -1px 1px 2px 0 rgba(0, 0, 0, 0.5);
  background-image: radial-gradient(
    circle,
    var(--pin-color-light),
    var(--pin-color) 80%
  );
  top: max(1vw, 10px);
  /* top: 1vw; */
}
</style>
