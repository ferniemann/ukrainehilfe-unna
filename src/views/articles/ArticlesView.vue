<template>
  <div>
    <FeaturedEvent link text />
    <ArticleCard id="1" />
  </div>
</template>

<script lang="ts" setup>
import FeaturedEvent from "../../components/FeaturedEvent.vue";
import ArticleCard from "../../components/ArticleCard.vue";
</script>

<style scoped>
div {
  padding: 2rem;
  margin-bottom: 2rem;
}
</style>
