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
      <div class="mentions-legales">
        <router-link :to="{ name: 'CGU' }" target="_blank">Mentions légales</router-link>
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
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#444444"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "geometry",
          "stylers": [
            {
              "weight": "2.75"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
            {
              "color": "#f2f2f2"
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            },
            {
              "hue": "#ff0000"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "color": "#dedede"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            },
            {
              "color": "#d3d3d3"
            },
            {
              "saturation": "-100"
            },
            {
              "lightness": "-79"
            },
            {
              "gamma": "1.21"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.attraction",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.attraction",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "off"
            },
            {
              "color": "#6300ff"
            }
          ]
        },
        {
          "featureType": "poi.attraction",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "visibility": "off"
            },
            {
              "color": "#af3c3c"
            }
          ]
        },
        {
          "featureType": "poi.attraction",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.attraction",
          "elementType": "labels",
          "stylers": [
            {
              "color": "#6300ff"
            },
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.attraction",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            },
            {
              "color": "#b2b2b2"
            }
          ]
        },
        {
          "featureType": "poi.attraction",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "visibility": "off"
            },
            {
              "saturation": "0"
            }
          ]
        },
        {
          "featureType": "poi.attraction",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "visibility": "off"
            },
            {
              "color": "#6300ff"
            },
            {
              "saturation": "0"
            },
            {
              "lightness": "60"
            },
            {
              "gamma": "1"
            }
          ]
        },
        {
          "featureType": "poi.attraction",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            },
            {
              "saturation": "0"
            },
            {
              "lightness": "60"
            },
            {
              "weight": "10.00"
            },
            {
              "gamma": "1"
            },
            {
              "hue": "#6300ff"
            }
          ]
        },
        {
          "featureType": "poi.government",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "visibility": "off"
            },
            {
              "color": "#b45656"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "color": "#6300ff"
            },
            {
              "lightness": "60"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
            {
              "saturation": -100
            },
            {
              "lightness": 45
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
            {
              "color": "#b9bbbc"
            },
            {
              "visibility": "on"
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
