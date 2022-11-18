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
  grid-template-columns: repeat(3, 1fr);
}

ul {
  list-style-type: none;

  margin: 0;
  padding: 0;

  display: flex;
  gap: 1rem;
}

small {
  grid-column-start: 3;
  justify-self: end;
}
</style>
