<template lang="html">
  <header id="header" class="fcolumn">
    <div class="parallaxe-child background-container" :style="{zIndex: 1}">
      <img src="~@/assets/img/4.png" alt="">
    </div>
    <div class="parallaxe-child background-container" :style="{zIndex: 1}">
      <img src="~@/assets/img/2.png" alt="">
    </div>
    <div class="parallaxe-child background-container" :style="{zIndex: 1}">
      <img src="~@/assets/img/3.png" alt="">
    </div>
    <div class="parallaxe-child title fcolumn" :style="{zIndex: 2}">
      <h1>Wilde English</h1>
      <div class="quote">
        ART IS THE ONLY SERIOUS THING IN THE WORLD.
        AND THE ARTIST IS THE ONLY PERSON WHO IS NEVER SERIOUS.
      </div>
      <div class="artist">
        Oscar Wilde
      </div>
    </div>
    <div class="parallaxe-child background-container" :style="{zIndex: 3}">
      <img src="~@/assets/img/1.png" alt="">
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  mounted() {
    const headerRef = document.getElementById('header')
    const childRef = headerRef.getElementsByClassName('parallaxe-child')

    const zoneMin = 0
    const zoneMax = headerRef.offsetHeight

    const factor = [0.6, 0.7, 0.7, -0.4, 0.9]

    window.addEventListener('scroll', () => {
      let value = 0
      if (window.scrollY > zoneMin && window.scrollY < zoneMax) {
        // Limit Parallaxe to the Header Zone
        Array.from(childRef).forEach((child, i) => {
          value = factor[i] * scrollY
          child.style.top = `${value}px`
        })
      }
    })
  }
}
</script>

<style lang="css">
</style>
