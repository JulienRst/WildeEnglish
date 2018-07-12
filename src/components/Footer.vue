<template lang="html">
  <footer class="frow">
    <div class="info fcolumn">
      <h2>WILDE ENGLISH</h2>
      <a class="ctn-linkedin" href="https://www.linkedin.com/in/fiona-fitzpatrick-5171a446" target="_blank"><img class="linkedin" src="~@/assets/img/linkedin.png" alt=""></a>
      <div class="details fcolumn">
        <div class="line">40, rue des Martyrs</div>
        <div class="cedex">75009 Paris</div>
        <div class="tel"><span class="icon-phone"></span> <a href="tel:0622743607">06 22 74 36 07</a></div>
        <div class="mail"><span class="icon-mail-alt"></span> <a href="mailto:wilde.english@gmail.com">wilde.english@gmail.com</a></div>
        <div class="siret">Siret: 532 789 013 00010</div>
      </div>
      <div class="prefect">
        Organisme de formation déclaré auprès <br />
        du Préfet de la Région Ile de France <br />
        N° 11 75 47190 75
      </div>
    </div>
    <div class="map-container">
      <GmapMap :center="{lat:48.879357, lng:2.339982}" :zoom="17" map-type-id="terrain" style="width: 100%; height: 500px">
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :draggable="false"
        />
      </GmapMap>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      markers: [
        {
          position: { lat: 48.879357, lng: 2.339982 }
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
