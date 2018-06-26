<template>
  <div id="app">
    <Header/>
    <About/>
    <Reminder/>
    <Quote />
    <Artist />
  </div>
</template>

<script>
import Header from './components/Header'
import About from './components/About'
import Reminder from './components/Reminder'
import Quote from './components/Quote'
import Artist from './components/Artist'

export default {
  name: 'App',
  components: {
    Header,
    About,
    Reminder,
    Quote,
    Artist
  }
}
</script>

<style lang="scss">
  @import '~@/assets/sass/master.scss';
</style>
