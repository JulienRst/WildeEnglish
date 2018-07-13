<template lang="html">
  <section class="artist">
    <h2>Parmi les artistes, producteurs et réalisateurs<br />qui me font confiance :</h2>
    <div class="phantom-artist-container">
      <div id="artists" class="ctn-artists frow">
        <div :style="{zIndex: artists.length - artist.key}" :class="{'ctn-artist fcolumn': true, 'top': (artist.key % 2 === 0), 'bottom': (artist.key % 2 !== 0)}" v-for="artist in artists" v-bind:key='artist.key'>
          <img class="artist-img" :src="generateUrl(artist.img)" alt="">
          <div class="artist-name">
            {{ artist.name }}
          </div>
        </div>
      </div>
      <div class="controls">
        <div class="control" @click="moveLeft">
          LEFT
        </div>
        <div class="control" @click="moveRight">
          RIGHT
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Artists from '../fixtures/artists'

export default {
  name: 'Artist',
  data() {
    return {
      artists: Artists,
      captureStatus: false,
      startCaptureValue: 0,
      artistsRef: null,
      basis: 150,
      current: 0
    }
  },
  mounted() {
    this.artistsRef = document.getElementById('artists')
  },
  methods: {
    generateUrl(end) {
      return `/static/img/artists/${end}`
    },
    moveLeft() {
      if (this.basis < 150) {
        this.basis += 400
        this.artistsRef.style.left = `${this.basis}px`
      }
    },
    moveRight() {
      if (this.basis > -8000) {
        this.basis -= 400
        this.artistsRef.style.left = `${this.basis}px`
      }
    }
  }
}
</script>

<style lang="scss">
</style>
