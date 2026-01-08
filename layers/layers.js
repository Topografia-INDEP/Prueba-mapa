var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_DEM_BOMBA_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM_BOMBA<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEM_BOMBA_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9472604.467933, 1145239.528505, -9470086.830787, 1146693.509401]
        })
    });
var format_prueba_2 = new ol.format.GeoJSON();
var features_prueba_2 = format_prueba_2.readFeatures(json_prueba_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_prueba_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_prueba_2.addFeatures(features_prueba_2);
var lyr_prueba_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_prueba_2, 
                style: style_prueba_2,
                popuplayertitle: 'prueba',
                interactive: true,
                title: '<img src="styles/legend/prueba_2.png" /> prueba'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_DEM_BOMBA_1.setVisible(true);lyr_prueba_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_DEM_BOMBA_1,lyr_prueba_2];
lyr_prueba_2.set('fieldAliases', {'Proyecto': 'Proyecto', });
lyr_prueba_2.set('fieldImages', {'Proyecto': '', });
lyr_prueba_2.set('fieldLabels', {'Proyecto': 'no label', });
lyr_prueba_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});