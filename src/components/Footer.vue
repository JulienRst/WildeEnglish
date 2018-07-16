<template lang='html'>
  <footer class='frow'>
    <div class='info fcolumn'>
      <h2>WILDE ENGLISH</h2>
      <div class='details fcolumn'>
        <div class='line'>40, rue des Martyrs</div>
        <div class='cedex'>75009 Paris</div>
        <div class='tel'><span class='icon-phone'></span> <a href='tel:0622743607'>06 22 74 36 07</a></div>
        <div class='mail'><span class='icon-mail-alt'></span> <a href='mailto:wilde.english@gmail.com'>wilde.english@gmail.com</a></div>
        <div class='siret'>Siret: 532 789 013 00010</div>
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
      mapStyle: [
        {
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#0F0919'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#E4F7F7'
            }
          ]
        },
        {
          elementType: 'geometry.stroke',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#002FA7'
            }
          ]
        },
        {
          featureType: 'poi.attraction',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#E60003'
            }
          ]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#FBFCF4'
            }
          ]
        },
        {
          featureType: 'poi.business',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#FFED00'
            }
          ]
        },
        {
          featureType: 'poi.government',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#D41C1D'
            }
          ]
        },
        {
          featureType: 'poi.school',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#BF0000'
            }
          ]
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry.fill',
          stylers: [
            {
              saturation: -100
            }
          ]
        }
      ]
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
