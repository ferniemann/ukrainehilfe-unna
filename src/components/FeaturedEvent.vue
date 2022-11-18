<script setup>
import { computed } from "vue";
import getData from "../composables/getData";

const { getFeaturedEvent, getPostByTag } = getData();
const featuredEvent = await getFeaturedEvent();
const props = defineProps({ fs: Boolean, text: Boolean, link: Boolean });

const date = computed(() =>
  featuredEvent.event_date.split("-").reverse().join(".")
);

const featuredImage = computed(
  () =>
    `https://api.ukrainehilfe-unna.de/assets/${featuredEvent.featured_image}`
);
</script>

<template>
  <div
    class="event-container"
    :class="fs ? 'full-size' : ''"
    v-if="featuredEvent"
  >
    <header>
      <h4>{{ featuredEvent.title }}</h4>
      <p class="event-date" v-if="featuredEvent?.event_date">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-calendar-event"
          viewBox="0 0 16 16"
        >
          <path
            d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"
          />
          <path
            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
          />
        </svg>
        {{ date }}
      </p>
    </header>
    <div class="event-container__flex">
      <div class="event-container__left">
        <img :src="featuredImage" alt="Logo Dezemberfahrt" />
      </div>
      <div
        class="event-container__right"
        v-if="text"
        v-html="featuredEvent.description"
      ></div>
    </div>
  </div>
  <router-link to="aktuelles" v-if="link">Mehr erfahren</router-link>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  flex-direction: column;
}

header > * {
  border: 2px solid var(--clr-blue);
}

h4 {
  background-color: var(--clr-blue);
  color: white;
  font-size: 1.25rem;
  font-weight: 400;

  width: fit-content;
  padding: var(--spacing-xxs) var(--spacing-xs);
  margin: 0;
}

.event-container {
  padding: var(--spacing-small);
}

.event-date {
  color: var(--clr-blue);
  font-size: 1.25rem;

  margin: 0;
  padding: var(--spacing-xxs) var(--spacing-xs);

  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.full-size {
  margin-inline: calc(-1 * var(--spacing-small));
}

.event-container__flex {
  margin-block: 1rem;

  display: flex;
  gap: 2rem;
  flex-direction: column;
}

img {
  width: 100%;
}

.event-container__right {
  width: 100%;

  line-height: 1.6;
}

a {
  color: var(--clr-blue);

  padding: 0.25rem 0.75rem;
  border: 0.125rem solid currentColor;
}

@media screen and (min-width: 768px) {
  header,
  .event-container__flex {
    flex-direction: row;
  }
}
</style>
