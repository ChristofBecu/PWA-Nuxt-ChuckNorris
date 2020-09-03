<template>
  <div>
    <p v-if="$fetchState.pending">
      ... Chuck Norris is downloading the internet into his brain ...
    </p>
    <p v-else-if="$fetchState.error">
      Chuck Norris has broken the internet, because he already knows every single bit of it by heart
    </p>
    <p v-else>
      {{ quote.value }}
    </p>
  </div>
</template>

<script>
export default {
  async fetch () {
    this.quote = await fetch(
      'https://api.chucknorris.io/jokes/random'
    ).then(res => res.json())
  },
  data () {
    return {
      quote: null
    }
  }
}
</script>
