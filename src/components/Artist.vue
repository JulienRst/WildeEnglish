<template lang="html">
  <section class="artist">
    <h2>Parmi les artistes, producteurs et réalisateurs<br />qui me font confiance :</h2>
    <div class="phantom-artist-container" v-touch:swipe.left="moveLeft" v-touch:swipe.right="moveRight">
      <div id="artists" class="ctn-artists frow"  @mousedown="startCapture($event)" @mouseup="endCapture()" @mousemove="capture($event)">
        <div :style="{zIndex: artists.length - artist.key}" :class="{'ctn-artist fcolumn': true, 'top': (artist.key % 2 === 0), 'bottom': (artist.key % 2 !== 0)}" v-for="artist in artists" v-bind:key='artist.key'>
          <img class="artist-img" :src="generateUrl(artist.img)" alt="">
          <div class="artist-name">
            {{ artist.name }}
          </div>
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
    startCapture(e) {
      this.startCaptureValue = e.screenX
      this.captureStatus = true
    },
    capture(e) {
      if (this.captureStatus) {
        const diff = e.screenX - this.startCaptureValue
        this.current = this.basis - (2 * diff)
        if (this.current > 150) {
          this.current = 150
        } else if (this.current < -8000) {
          this.current = -8000
        }
        this.artistsRef.style.left = `${this.current}px`
      }
    },
    endCapture() {
      this.basis = this.current
      this.startCaptureValue = 0
      this.captureStatus = false
    },
    moveLeft() {
      console.log('Move Left', this.basis)
      if (this.basis < 150) {
        this.basis += 400
        this.artistsRef.style.left = `${this.basis}px`
      }
    },
    moveRight() {
      console.log('Move Right', this.basis)
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
