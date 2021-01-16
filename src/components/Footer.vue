<template lang='html'>
  <footer class='frow'>
    <div class='info fcolumn'>
      <h2>WILDE ENGLISH</h2>
      <div class='details fcolumn'>
        <div class='line'>Villa Moncey</div>
        <div class='line'>50 bis, rue de Clichy</div>
        <div class='cedex'>75009 Paris</div>
        <div class='tel'><span class='icon-phone'></span> <a href='tel:0622743607'>06 22 74 36 07</a></div>
        <div class='mail'><span class='icon-mail-alt'></span> <a href='mailto:wilde.english@gmail.com'>wilde.english@gmail.com</a></div>
        <div class='siret'>Siret: 532 789 013 00028</div>
      </div>
      <div class='ctn-socials'>
        <a class='ctn-social' :href='linkedinLink' target='_blank'><img class='linkedin' src='~@/assets/img/linkedin.png' alt=''></a>
        <a class='ctn-social' :href='instagramLink' target='_blank'><img class='linkedin' src='~@/assets/img/instagram.png' alt=''></a>
        <a class='ctn-social' :href='facebookLink' target='_blank'><img class='linkedin' src='~@/assets/img/facebook.svg' alt=''></a>
      </div>
      <div class='prefect'>
        Organisme de formation déclaré auprès <br />
        du Préfet de la Région Ile de France <br />
        N° 11 75 47190 75
      </div>
      <div class="mentions-legales">
        <a href="/static/cgu.pdf" target="_blank">Mentions légales</a>
      </div>
    </div>
    <div class='map-container'>
      <GmapMap :center='{lat:48.879357, lng:2.339982}' :zoom='14' map-type-id='terrain' ref="mapRef" style='width: 100%; height: 500px'>
        <GmapMarker
          :key='index'
          v-for='(m, index) in markers'
          :position='m.position'
          :draggable='false'
        />
      </GmapMap>
    </div>
  </footer>
</template>

<script>
import mapStyle from '../services/mapStyle'

export default {
  name: 'Footer',
  data() {
    return {
      markers: [
        {
          position: { lat: 48.879357, lng: 2.339982 }
        }
      ],
      facebookLink: process.env.FACEBOOK,
      instagramLink: process.env.INSTAGRAM,
      linkedinLink: process.env.LINKEDIN,
      mapStyle
    }
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then((map) => {
      const mapStyleType = new window.google.maps.StyledMapType(this.mapStyle)
      map.mapTypes.set('styled_map', mapStyleType)
      map.setMapTypeId('styled_map')
    })
  }
}
</script>

<style lang='css'>
</style>
