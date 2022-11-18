<script setup>
import FeaturedEvent from "../components/FeaturedEvent.vue";
import ArticleCard from "../components/ArticleCard.vue";
</script>

<template>
  <main>
    <div class="hero">
      <div class="hero-image-container" style="display: flex">
        <img src="/images/IMG_20220314_172330_8.jpeg" alt="" />
      </div>
      <div class="hero-text-container">
        <div>
          <h2 class="hero-title">Hand in Hand für die Ukraine</h2>
          <p class="hero-subtitle">
            Wir versorgen vom Krieg betroffene Menschen mit lebensnotwendigen
            Materialien
          </p>
        </div>
      </div>
    </div>
    <section class="container">
      <header class="container-header">
        <h3>Aktuelle Aktionen</h3>
        <p class="subtitle">Was wir zur Zeit auf die Beine stellen</p>
      </header>
      <Suspense>
        <FeaturedEvent fs text />
      </Suspense>
      <Suspense>
        <ArticleCard id="1" />
      </Suspense>
    </section>
  </main>
</template>

<style scoped>
.hero-image-container > img {
  width: 100%;
  height: 10rem;

  object-fit: cover;
  object-position: 40% 30%;
}

.hero {
  display: flex;
  flex-direction: column;
}

.hero-text-container {
  background-color: var(--clr-blue);
  text-align: center;

  padding: var(--spacing-normal);
}

.hero-text-container > * {
  line-height: 1.8;

  margin: 0;

  display: flex;
  flex-direction: column;
}

.hero-title {
  color: white;
}

.hero-subtitle {
  color: var(--clr-yellow);
}

.container {
  margin-block: var(--spacing-big);
  padding-inline: var(--spacing-small);
}

.container-header {
  font-size: 1.25rem;
}

.container-header > h3 {
  letter-spacing: 0.125rem;
}

.subtitle {
  color: var(--clr-text-light);
  font-size: 1rem;
  text-transform: uppercase;
}

.container-header > * {
  margin: 0;
}

@media screen and (min-width: 768px) {
  .hero {
    flex-direction: row-reverse;
  }

  .hero-image-container {
    width: 50%;
  }

  .hero-image-container > img {
    height: auto;
  }

  .hero-text-container {
    font-size: 1.25rem;
    text-align: left;

    display: flex;
  }

  .hero-text-container > div {
    margin: auto;
  }
}
</style>
