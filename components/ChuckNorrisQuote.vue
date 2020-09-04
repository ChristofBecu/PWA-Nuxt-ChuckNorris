<template>
  <div @click="getPosts()">
    <p v-if="$fetchState.pending">
      ... Chuck Norris is downloading the internet into his brain ...
    </p>
    <p v-else-if="$fetchState.error">
      Chuck Norris has broken the internet, because he already knows every single bit of it by heart
    </p>
    <p v-else>
      {{ results.value }}
    </p>
  </div>
</template>

<script>
const APIBaseUrl = 'https://api.chucknorris.io/jokes/random'
export default {
  async fetch () {
    await this.getPosts()
  },
  data () {
    return {
      results: null
    }
  },
  methods: {
    async getPosts () {
      this.results = await fetch(
        APIBaseUrl
      ).then(res => res.json())
    }
  }
}
</script>

<style scoped>
  div {
      user-select: none;
      cursor: pointer;
      padding: 0.5em;
  }
</style>
