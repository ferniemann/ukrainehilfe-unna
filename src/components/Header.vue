<script setup>
import { RouterLink } from "vue-router";
import Donations from "./Donations.vue";
</script>

<template>
  <header>
    <a href="/" class="logo">
      <h1><span>Ukrainehilfe</span> Unna e.V.</h1>
    </a>
    <nav class="main-nav-wrapper">
      <ul class="main-nav">
        <li>
          <RouterLink to="/" class="main-nav-link">Startseite</RouterLink>
        </li>
        <li>
          <RouterLink to="/aktuelles" class="main-nav-link"
            >Aktuelles</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/erreichtes" class="main-nav-link"
            >Erreichtes</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/wir" class="main-nav-link">Wir</RouterLink>
        </li>
      </ul>
    </nav>
    <RouterLink to="/spenden" class="do main-nav-link featured-nav-link">
      Spenden
    </RouterLink>
    <RouterLink to="#" class="mo main-nav-link featured-nav-link">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.5rem"
        height="2.5rem"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M17.726 13.02 14 16H9v-1h4.065a.5.5 0 0 0 .416-.777l-.888-1.332A1.995 1.995 0 0 0 10.93 12H3a1 1 0 0 0-1 1v6a2 2 0 0 0 2 2h9.639a3 3 0 0 0 2.258-1.024L22 13l-1.452-.484a2.998 2.998 0 0 0-2.822.504zm1.532-5.63c.451-.465.73-1.108.73-1.818s-.279-1.353-.73-1.818A2.447 2.447 0 0 0 17.494 3S16.25 2.997 15 4.286C13.75 2.997 12.506 3 12.506 3a2.45 2.45 0 0 0-1.764.753c-.451.466-.73 1.108-.73 1.818s.279 1.354.73 1.818L15 12l4.258-4.61z"
        />
      </svg>
    </RouterLink>

    <Suspense>
      <Donations />
    </Suspense>
  </header>
</template>

<style scoped>
header {
  text-align: center;
}
.logo > h1 {
  color: black;
  font-weight: 400;
  font-size: 1.5rem;
  text-transform: unset;

  padding-block: var(--spacing-small);
}

.logo > h1 > span {
  background-image: linear-gradient(var(--clr-blue) 50%, var(--clr-yellow) 50%);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-weight: 900;
  text-transform: uppercase;
}

.main-nav-wrapper {
  background-color: var(--clr-blue);

  padding-block: var(--spacing-xs);

  display: flex;
  justify-content: center;
}

.main-nav {
  list-style-type: none;

  padding: 0;
  margin: 0;

  display: flex;
  justify-content: center;
  gap: 1rem;
}

.main-nav-link {
  color: white;
}

.featured-nav-link:not(.do) {
  background-color: var(--clr-blue);
  box-shadow: 1.6px 1.1px 2.2px rgba(0, 0, 0, 0.02),
    2.4px 1.7px 5.3px rgba(0, 0, 0, 0.028),
    3.3px 2.2px 10px rgba(0, 0, 0, 0.035),
    5.6px 3.9px 17.9px rgba(0, 0, 0, 0.042),
    13.7px 9.5px 33.4px rgba(0, 0, 0, 0.05), 55px 38px 80px rgba(0, 0, 0, 0.07);

  padding: var(--spacing-xs);
  border-radius: 50%;

  position: fixed;
  bottom: var(--spacing-big);
  right: var(--spacing-normal);

  display: flex;
}

@media screen and (min-width: 768px) {
  header {
    padding: var(--spacing-small) var(--spacing-big);

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo > h1 {
    padding: unset;
  }

  .main-nav-wrapper {
    background-color: white;

    padding-inline: var(--spacing-big) var(--spacing-normal);

    flex-grow: 2;
  }

  .main-nav-link {
    color: var(--clr-blue);
  }

  .main-nav-link:not(.featured-nav-link):hover {
    text-decoration: underline;
    text-underline-offset: 0.25rem;
  }

  .featured-nav-link {
    font-weight: 900;
    text-transform: uppercase;

    margin-left: auto;
    padding-right: var(--spacing-xs);
  }

  .featured-nav-item:hover {
    transform: scale(1.1);
  }
}
</style>
