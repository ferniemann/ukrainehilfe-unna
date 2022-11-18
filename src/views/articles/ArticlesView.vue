<template>
  <div>
    <FeaturedEvent text />
    <ArticleCard
      v-for="article of articles"
      :key="article.id"
      :id="article.id"
    />
  </div>
</template>

<script lang="ts" setup>
import FeaturedEvent from "../../components/FeaturedEvent.vue";
import ArticleCard from "../../components/ArticleCard.vue";
import getData from "../../composables/getData";

const { getAllPosts } = getData();
const articles = await getAllPosts();
</script>

<style scoped>
div {
  padding: 2rem;
  margin-bottom: 2rem;
}
</style>
