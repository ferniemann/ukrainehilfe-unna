<template>
  <main>
    <slot />
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
main {
  width: min(100%, 1000px);
  padding-inline: 2rem;
  margin-block: 2rem 4rem;
  margin-inline: auto;
}
</style>
