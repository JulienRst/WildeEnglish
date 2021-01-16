const mapStyle = [
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#444444'
      }
    ]
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry',
    stylers: [
      {
        weight: '2.75'
      }
    ]
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        color: '#f2f2f2'
      },
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      },
      {
        hue: '#ff0000'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on'
      },
      {
        color: '#dedede'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off'
      },
      {
        color: '#d3d3d3'
      },
      {
        saturation: '-100'
      },
      {
        lightness: '-79'
      },
      {
        gamma: '1.21'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi.attraction',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi.attraction',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'off'
      },
      {
        color: '#6300ff'
      }
    ]
  },
  {
    featureType: 'poi.attraction',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'off'
      },
      {
        color: '#af3c3c'
      }
    ]
  },
  {
    featureType: 'poi.attraction',
    elementType: 'geometry.stroke',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi.attraction',
    elementType: 'labels',
    stylers: [
      {
        color: '#6300ff'
      },
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi.attraction',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off'
      },
      {
        color: '#b2b2b2'
      }
    ]
  },
  {
    featureType: 'poi.attraction',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'off'
      },
      {
        saturation: '0'
      }
    ]
  },
  {
    featureType: 'poi.attraction',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'off'
      },
      {
        color: '#6300ff'
      },
      {
        saturation: '0'
      },
      {
        lightness: '60'
      },
      {
        gamma: '1'
      }
    ]
  },
  {
    featureType: 'poi.attraction',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off'
      },
      {
        saturation: '0'
      },
      {
        lightness: '60'
      },
      {
        weight: '10.00'
      },
      {
        gamma: '1'
      },
      {
        hue: '#6300ff'
      }
    ]
  },
  {
    featureType: 'poi.government',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'off'
      },
      {
        color: '#b45656'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on'
      },
      {
        color: '#6300ff'
      },
      {
        lightness: '60'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [
      {
        saturation: -100
      },
      {
        lightness: 45
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.stroke',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#b9bbbc'
      },
      {
        visibility: 'on'
      }
    ]
  }
]

export default mapStyle
