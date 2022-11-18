<script setup>
import { computed } from "vue";
import getData from "../composables/getData";

const { getDonations } = getData();
const currentDonations = await getDonations();

const donations = computed(() =>
  currentDonations.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
);
</script>

<template>
  <div>
    <p><span class="mo">Spendenstand: </span>{{ donations }}<span> €</span></p>
  </div>
</template>

<style scoped>
div {
  background-image: linear-gradient(
    180deg,
    var(--clr-blue) 50%,
    var(--clr-yellow) 50%
  );
  padding: var(--spacing-xxs);

  position: fixed;
  inset-inline: 0;
  bottom: 0;
}

p {
  color: var(--clr-blue);
  font-size: 1.5rem;
  font-weight: 900;
  background-color: rgb(255 255 255 / 0.75);

  margin: 0;
}

span {
  font-weight: 400;
}

@media screen and (min-width: 768px) {
  div {
    width: fit-content;

    position: static;
  }

  p {
    background-color: rgb(255 255 255 / 0.75);
    color: var(--clr-blue);

    padding-block: 0.5rem;
    padding-inline: 1.5rem;
  }
}
</style>
