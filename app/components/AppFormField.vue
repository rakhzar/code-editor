<script setup lang="ts">
defineProps<{ type: string; id: string }>();
</script>

<template>
  <div class="flex flex-col gap-y-1">
    <AppLabel :for="id">
      <slot />
    </AppLabel>
    <AppInput
      :type="type"
      :id="id"
    />
  </div>
</template>
