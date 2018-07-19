<template>
  <div id="app">
    <Header/>
    <About/>
    <Reminder/>
    <Quote />
    <Artist />
    <References />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import About from '../components/About'
import Reminder from '../components/Reminder'
import Quote from '../components/Quote'
import Artist from '../components/Artist'
import References from '../components/References'
import Footer from '../components/Footer'

export default {
  name: 'Home',
  components: {
    Header,
    About,
    Reminder,
    Quote,
    Artist,
    References,
    Footer
  }
}
</script>

<style lang="scss">
</style>
