<template>
  <main>
    <article>
      <header>
        <h2>{{ article.title }}</h2>
      </header>
      <img
        :src="`https://api.ukrainehilfe-unna.de/assets/${article.featured_image}`"
        alt="Artikelbild"
        style="width: 100%"
      />
      <section class="article-event" v-if="article.start_date">
        <div class="date">
          <p>Wann:</p>
          <p>{{ startDate }}</p>
          <p>{{ timeframe }}</p>
        </div>
        <div class="location">
          <p>Wo:</p>
          <p v-html="address"></p>
        </div>
      </section>
      <section class="article-content" v-html="article.article_text"></section>
    </article>
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import getData from "@/composables/getData";

const route = useRoute();
const id = route.params.id;

const { getPostById } = getData();
const article = await getPostById(id);

const startDate = computed(() => formatDate(article.start_date));
const timeframe = computed(() => {
  if (article.end_time) {
    return (
      formatTime(article.start_time) + " – " + formatTime(article.end_time)
    );
  }

  return formatTime(article.start_time);
});
const address = computed(() => article.location.split(",").join("<br>"));

const formatDate = (unformattedDate) =>
  unformattedDate.split("-").reverse().join(".");

const formatTime = (unformattedTime) => {
  const timeArr = unformattedTime.split(":");
  timeArr.splice(-1, 1);

  return timeArr.join(":");
};
</script>

<style scoped>
main {
  width: min(100%, 1000px);
  padding-inline: 2rem;
  margin-block: 2rem 4rem;
  margin-inline: auto;
}

h2 {
  font-size: 2rem;
}

.article-event {
  background-color: var(--clr-blue-light);

  padding: 1rem;
  margin-block: 2rem;

  display: flex;
  justify-content: space-evenly;
}

.article-content :deep() h3 {
  text-transform: unset;
  font-weight: 700;
}

.article-content :deep() p {
  line-height: 1.6;
}
</style>
