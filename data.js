var APP_DATA = {
  "scenes": [
    {
      "id": "0-carport",
      "name": "Carport",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.44180175132662924,
          "pitch": 0.08411044529837497,
          "rotation": 1.5707963267948966,
          "target": "1-living-area"
        },
        {
          "yaw": 0.03551431732134702,
          "pitch": 0.0664772634884443,
          "rotation": 1.5707963267948966,
          "target": "7-front-yard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-area",
      "name": "Living Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10179364327814788,
          "pitch": 0.09032607437266549,
          "rotation": 0,
          "target": "2-dining-and-kitchen-area"
        },
        {
          "yaw": -0.8289097264682503,
          "pitch": -0.4204282342091865,
          "rotation": 1.5707963267948966,
          "target": "9-hallway"
        },
        {
          "yaw": -0.7599234862699227,
          "pitch": 0.08091118007208564,
          "rotation": 1.5707963267948966,
          "target": "6-lanai"
        },
        {
          "yaw": 0.2941915968387576,
          "pitch": 0.05749847550700338,
          "rotation": 1.5707963267948966,
          "target": "3-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining-and-kitchen-area",
      "name": "Dining and Kitchen Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5318866295851308,
          "pitch": 0.09540009747125211,
          "rotation": 6.283185307179586,
          "target": "0-carport"
        },
        {
          "yaw": 0.2185123735763792,
          "pitch": -0.23203169691180392,
          "rotation": 1.5707963267948966,
          "target": "9-hallway"
        },
        {
          "yaw": -1.056426455941459,
          "pitch": 0.10766372873801444,
          "rotation": 4.71238898038469,
          "target": "3-bedroom-2"
        },
        {
          "yaw": -2.3925461076266448,
          "pitch": 0.05017807312635725,
          "rotation": 0,
          "target": "4-bathroom-1"
        },
        {
          "yaw": 2.9390970455974212,
          "pitch": 0.23250550934453784,
          "rotation": 0,
          "target": "5-service-area"
        },
        {
          "yaw": 0.6083035448283258,
          "pitch": 0.07972925671563935,
          "rotation": 1.5707963267948966,
          "target": "6-lanai"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4989245140112546,
          "pitch": 0.16265022167047505,
          "rotation": 0,
          "target": "2-dining-and-kitchen-area"
        },
        {
          "yaw": -0.09830299297406775,
          "pitch": 0.09718109296910882,
          "rotation": 0,
          "target": "0-carport"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bathroom-1",
      "name": "Bathroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8542505875257618,
          "pitch": 0.1490108269970758,
          "rotation": 0,
          "target": "2-dining-and-kitchen-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-service-area",
      "name": "Service Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.0093650113349373,
        "pitch": 0.04202867210985772,
        "fov": 1.3199838779965631
      },
      "linkHotspots": [
        {
          "yaw": 0.9405735624432587,
          "pitch": 0.06360006720294109,
          "rotation": 4.71238898038469,
          "target": "2-dining-and-kitchen-area"
        },
        {
          "yaw": 1.460234315408786,
          "pitch": 0.11548730187523759,
          "rotation": 4.71238898038469,
          "target": "6-lanai"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-lanai",
      "name": "Lanai",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5861300790846187,
          "pitch": 0.16280883251253542,
          "rotation": 3.141592653589793,
          "target": "5-service-area"
        },
        {
          "yaw": 0.05603907897748783,
          "pitch": 0.0914993598986058,
          "rotation": 3.141592653589793,
          "target": "7-front-yard"
        },
        {
          "yaw": -0.1380763679561987,
          "pitch": 0.09373065994424223,
          "rotation": 4.71238898038469,
          "target": "8-bar"
        },
        {
          "yaw": -1.3495142432131324,
          "pitch": 0.04205044094264743,
          "rotation": 1.5707963267948966,
          "target": "2-dining-and-kitchen-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-front-yard",
      "name": "Front Yard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.011102436258708437,
          "pitch": 0.0465955194470169,
          "rotation": 0,
          "target": "6-lanai"
        },
        {
          "yaw": 1.6033295542196253,
          "pitch": 0.04141134284751047,
          "rotation": 0,
          "target": "0-carport"
        },
        {
          "yaw": 1.283780889708373,
          "pitch": 0.027767792617364506,
          "rotation": 4.71238898038469,
          "target": "1-living-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bar",
      "name": "Bar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7463567738913053,
          "pitch": 0.18698176259442434,
          "rotation": 0,
          "target": "1-living-area"
        },
        {
          "yaw": -0.23684313224476305,
          "pitch": 0.05446125191993367,
          "rotation": 0,
          "target": "3-bedroom-2"
        },
        {
          "yaw": -0.5130701388906314,
          "pitch": 0.16052648143521075,
          "rotation": 0,
          "target": "2-dining-and-kitchen-area"
        },
        {
          "yaw": -2.9128885448549813,
          "pitch": 0.219050089446716,
          "rotation": 0,
          "target": "6-lanai"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6462331775886572,
          "pitch": 0.7113545762311837,
          "rotation": 4.71238898038469,
          "target": "1-living-area"
        },
        {
          "yaw": 0.13067730411171752,
          "pitch": 0.03587701098615881,
          "rotation": 3.141592653589793,
          "target": "11-family-area"
        },
        {
          "yaw": -0.2013679819282892,
          "pitch": 0.013530019512790759,
          "rotation": 4.71238898038469,
          "target": "12-master-bedroom"
        },
        {
          "yaw": 0.24249514773881842,
          "pitch": 0.037919438419919516,
          "rotation": 1.5707963267948966,
          "target": "10-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.79521491263516,
          "pitch": 0.16084903621216995,
          "rotation": 0,
          "target": "9-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-family-area",
      "name": "Family Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6473115618560392,
          "pitch": 0.11529251966919496,
          "rotation": 4.71238898038469,
          "target": "9-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-master-bedroom",
      "name": "Master Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Dusaran 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
