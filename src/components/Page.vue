<template>
  <main>
    <slot />
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
main {
  line-height: 1.6;

  width: min(100%, 1000px);
  padding-inline: 2rem;
  margin-block: 2rem 4rem;
  margin-inline: auto;
}

main :deep() h3:not(:first-of-type) {
  margin-top: 4rem;
}
</style>
