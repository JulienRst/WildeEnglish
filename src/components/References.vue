<template lang="html">
  <section class="references fcolumn">
    <h2>Références</h2>
    <div class="ctn-references">
      <img src="~@/assets/img/border-gatsby.png" class="sprt" alt="">
      <div class="references fcolumn">
        <img class="brand" src="~@/assets/img/papillon-orange.png" alt="">
        <div class="inner-references frow">
          <div class="reference" v-for="reference in references" v-bind:key="reference.key">
            {{ reference.name }}
          </div>
        </div>
      </div>
      <img src="~@/assets/img/border-gatsby.png" class="sprt" alt="">
    </div>
  </section>
</template>

<script>
import References from '../fixtures/references'

export default {
  name: 'references',
  data() {
    return {
      references: References
    }
  }
}
</script>

<style lang="scss">
</style>
