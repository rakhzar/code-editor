<script setup lang="ts">
const classes = ['rounded-md bg-indigo-600 px-6 py-2 font-semibold text-indigo-50 hover:bg-indigo-700 sm:rounded-lg sm:px-8 sm:py-3 sm:text-lg'];
</script>

<template>
  <NuxtLink v-if="$attrs.to" :to="$attrs.to" :class="classes">
    <slot />
  </NuxtLink>
  <button v-else :class="classes">
    <slot />
  </button>
</template>
