<template>
  <div class="container">
    <p class="title">
      <img src="/favicon.png" alt="chuck norris">
      <ChuckNorrisQuote />
    </p>
  </div>
</template>

<script setup>
// Using script setup syntax for Vue 3, 
// no additional JS needed for this component
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 200px;
  max-width: 900px;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 3em;
  color: whitesmoke;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

img {
  position: fixed;
  top: 0;
  left: 50%;
  margin-left: -75px;
}
</style>
