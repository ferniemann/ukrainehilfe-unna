<template>
  <footer>
    <nav>
      <ul>
        <li><router-link to="/impressum">Impressum</router-link></li>
        <li>
          <router-link to="/datenschutz">Datenschutzerklärung</router-link>
        </li>
      </ul>
    </nav>
    <small>
      Erstellt von
      <a href="https://ferdinand-niemann.eu" target="_blank"
        >Ferdinand Niemann</a
      >
    </small>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
footer {
  background-color: var(--clr-blue);
  color: white;

  padding: 2rem;

  display: grid;
}

ul {
  list-style-type: none;

  margin: 0;
  padding: 0;

  display: flex;
  justify-content: center;
  gap: 1rem;
}

small {
  padding-block: 1rem;
  grid-column-start: 0;
  justify-self: center;
}

@media screen and (min-width: 768px) {
  footer {
    grid-template-columns: repeat(3, 1fr);
  }

  ul {
    justify-content: start;
  }

  small {
    grid-column-start: 3;
  }
}
</style>
