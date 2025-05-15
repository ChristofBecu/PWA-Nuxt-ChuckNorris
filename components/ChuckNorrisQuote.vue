<template>
  <div @click="refreshQuote">
    <p v-if="pending">
      ... Chuck Norris is downloading the internet into his brain ...
    </p>
    <p v-else-if="error">
      Chuck Norris has broken the internet, because he already knows every
      single bit of it by heart
    </p>
    <p v-else>
      {{ quote }}
    </p>
  </div>
</template>

<script setup>
const APIBaseUrl = 'https://api.chucknorris.io/jokes/random'

const quote = ref('')
const pending = ref(true)
const error = ref(false)

async function fetchQuote() {
  pending.value = true
  error.value = false
  
  try {
    const response = await fetch(APIBaseUrl)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    quote.value = data.value
  } catch (err) {
    console.error('Error fetching Chuck Norris quote:', err)
    error.value = true
  } finally {
    pending.value = false
  }
}

// Initial fetch
onMounted(() => {
  fetchQuote()
})

// Method to refresh the quote
function refreshQuote() {
  fetchQuote()
}
</script>

<style scoped>
div {
  user-select: none;
  cursor: pointer;
  padding: 0.5em;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
