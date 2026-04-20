<script setup lang="ts">
defineProps<{
  iconClasses: string;
}>();
</script>

<template>
  <NuxtLink
    to="/"
    class="flex items-center gap-x-1 sm:gap-x-2"
  >
    <Icon
      name="code"
      :class="`-rotate-6 ${iconClasses}`"
    />
    <span
      v-if="$slots.default"
      class="text-xl font-black sm:text-2xl dark:text-white"
    >
      <slot />
    </span>
  </NuxtLink>
</template>
