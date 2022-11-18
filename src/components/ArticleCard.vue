<template>
  <div>
    <h4>{{ article.title }}</h4>
    <p>{{ article.description }}</p>
    <router-link :to="`/artikel/${article.id}`">Lesen</router-link>
  </div>
</template>

<script setup>
import getData from "@/composables/getData";
const { getPostById } = getData();
const props = defineProps({ id: String });

const article = await getPostById(props.id);
</script>

<style scoped>
div {
  background-color: var(--clr-blue-light);
  color: var(--clr-blue);

  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
}

div > * {
  margin: 0;
}

h4 {
  font-size: 1.5rem;
}

a {
  border: 0.125rem solid var(--clr-blue);
  padding: 0.25rem 0.75rem;
}
</style>
