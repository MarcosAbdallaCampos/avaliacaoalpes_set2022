var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Fazendaalpes_1 = new ol.format.GeoJSON();
var features_Fazendaalpes_1 = format_Fazendaalpes_1.readFeatures(json_Fazendaalpes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fazendaalpes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fazendaalpes_1.addFeatures(features_Fazendaalpes_1);
var lyr_Fazendaalpes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fazendaalpes_1, 
                style: style_Fazendaalpes_1,
                popuplayertitle: 'Fazenda alpes',
                interactive: false,
                title: '<img src="styles/legend/Fazendaalpes_1.png" /> Fazenda alpes'
            });
var format_GlebaA1_2 = new ol.format.GeoJSON();
var features_GlebaA1_2 = format_GlebaA1_2.readFeatures(json_GlebaA1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlebaA1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlebaA1_2.addFeatures(features_GlebaA1_2);
var lyr_GlebaA1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlebaA1_2, 
                style: style_GlebaA1_2,
                popuplayertitle: 'Gleba A1',
                interactive: true,
                title: '<img src="styles/legend/GlebaA1_2.png" /> Gleba A1'
            });
var format_GlebaB1_3 = new ol.format.GeoJSON();
var features_GlebaB1_3 = format_GlebaB1_3.readFeatures(json_GlebaB1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlebaB1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlebaB1_3.addFeatures(features_GlebaB1_3);
var lyr_GlebaB1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlebaB1_3, 
                style: style_GlebaB1_3,
                popuplayertitle: 'Gleba B1',
                interactive: true,
                title: '<img src="styles/legend/GlebaB1_3.png" /> Gleba B1'
            });
var format_GlebaA2_4 = new ol.format.GeoJSON();
var features_GlebaA2_4 = format_GlebaA2_4.readFeatures(json_GlebaA2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlebaA2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlebaA2_4.addFeatures(features_GlebaA2_4);
var lyr_GlebaA2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlebaA2_4, 
                style: style_GlebaA2_4,
                popuplayertitle: 'Gleba A2',
                interactive: true,
                title: '<img src="styles/legend/GlebaA2_4.png" /> Gleba A2'
            });
var format_GlebaB2_5 = new ol.format.GeoJSON();
var features_GlebaB2_5 = format_GlebaB2_5.readFeatures(json_GlebaB2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlebaB2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlebaB2_5.addFeatures(features_GlebaB2_5);
var lyr_GlebaB2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlebaB2_5, 
                style: style_GlebaB2_5,
                popuplayertitle: 'Gleba B2',
                interactive: true,
                title: '<img src="styles/legend/GlebaB2_5.png" /> Gleba B2'
            });
var group_FazendaalpesGLEBAS = new ol.layer.Group({
                                layers: [lyr_Fazendaalpes_1,lyr_GlebaA1_2,lyr_GlebaB1_3,lyr_GlebaA2_4,lyr_GlebaB2_5,],
                                fold: 'open',
                                title: 'Fazenda alpes GLEBAS'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Fazendaalpes_1.setVisible(true);lyr_GlebaA1_2.setVisible(true);lyr_GlebaB1_3.setVisible(true);lyr_GlebaA2_4.setVisible(true);lyr_GlebaB2_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_FazendaalpesGLEBAS];
lyr_Fazendaalpes_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Area_total (ha)': 'Area_total (ha)', 'Area_vegetação (ha)': 'Area_vegetação (ha)', 'Area_util (ha)': 'Area_util (ha)', 'Valor_total (R$ mil)': 'Valor_total (R$ mil)', 'Valor R$/m²': 'Valor R$/m²', 'Valor_terra_nua (R$ mil)': 'Valor_terra_nua (R$ mil)', 'Valor_benfeitorias (R$ mil)': 'Valor_benfeitorias (R$ mil)', 'Principais_benfeitorias': 'Principais_benfeitorias', });
lyr_GlebaA1_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Area_total (ha)': 'Area_total (ha)', 'Area_vegetação (ha)': 'Area_vegetação (ha)', 'Area_util (ha)': 'Area_util (ha)', 'Valor_total (R$ mil)': 'Valor_total (R$ mil)', 'Valor R$/m²': 'Valor R$/m²', 'Valor_terra_nua (R$ mil)': 'Valor_terra_nua (R$ mil)', 'Valor_benfeitorias (R$ mil)': 'Valor_benfeitorias (R$ mil)', 'Principais_benfeitorias': 'Principais_benfeitorias', });
lyr_GlebaB1_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Area_total (ha)': 'Area_total (ha)', 'Area_vegetação (ha)': 'Area_vegetação (ha)', 'Area_util (ha)': 'Area_util (ha)', 'Valor_total (R$ mil)': 'Valor_total (R$ mil)', 'Valor R$/m²': 'Valor R$/m²', 'Valor_terra_nua (R$ mil)': 'Valor_terra_nua (R$ mil)', 'Valor_benfeitorias (R$ mil)': 'Valor_benfeitorias (R$ mil)', 'Principais_benfeitorias': 'Principais_benfeitorias', });
lyr_GlebaA2_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Area_total (ha)': 'Area_total (ha)', 'Area_vegetação (ha)': 'Area_vegetação (ha)', 'Area_util (ha)': 'Area_util (ha)', 'Valor_total (R$ mil)': 'Valor_total (R$ mil)', 'Valor R$/m²': 'Valor R$/m²', 'Valor_terra_nua (R$ mil)': 'Valor_terra_nua (R$ mil)', 'Valor_benfeitorias (R$ mil)': 'Valor_benfeitorias (R$ mil)', 'Principais_benfeitorias': 'Principais_benfeitorias', });
lyr_GlebaB2_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Area_total (ha)': 'Area_total (ha)', 'Area_vegetação (ha)': 'Area_vegetação (ha)', 'Area_util (ha)': 'Area_util (ha)', 'Valor_total (R$ mil)': 'Valor_total (R$ mil)', 'Valor R$/m²': 'Valor R$/m²', 'Valor_terra_nua (R$ mil)': 'Valor_terra_nua (R$ mil)', 'Valor_benfeitorias (R$ mil)': 'Valor_benfeitorias (R$ mil)', 'Principais_benfeitorias': 'Principais_benfeitorias', });
lyr_Fazendaalpes_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area_total (ha)': 'TextEdit', 'Area_vegetação (ha)': 'TextEdit', 'Area_util (ha)': 'TextEdit', 'Valor_total (R$ mil)': 'TextEdit', 'Valor R$/m²': 'TextEdit', 'Valor_terra_nua (R$ mil)': 'TextEdit', 'Valor_benfeitorias (R$ mil)': 'TextEdit', 'Principais_benfeitorias': 'TextEdit', });
lyr_GlebaA1_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area_total (ha)': 'TextEdit', 'Area_vegetação (ha)': 'TextEdit', 'Area_util (ha)': 'TextEdit', 'Valor_total (R$ mil)': 'TextEdit', 'Valor R$/m²': 'TextEdit', 'Valor_terra_nua (R$ mil)': 'TextEdit', 'Valor_benfeitorias (R$ mil)': 'TextEdit', 'Principais_benfeitorias': 'TextEdit', });
lyr_GlebaB1_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area_total (ha)': 'TextEdit', 'Area_vegetação (ha)': 'TextEdit', 'Area_util (ha)': 'TextEdit', 'Valor_total (R$ mil)': 'TextEdit', 'Valor R$/m²': 'TextEdit', 'Valor_terra_nua (R$ mil)': 'TextEdit', 'Valor_benfeitorias (R$ mil)': 'TextEdit', 'Principais_benfeitorias': 'TextEdit', });
lyr_GlebaA2_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area_total (ha)': 'TextEdit', 'Area_vegetação (ha)': 'TextEdit', 'Area_util (ha)': 'TextEdit', 'Valor_total (R$ mil)': 'TextEdit', 'Valor R$/m²': 'TextEdit', 'Valor_terra_nua (R$ mil)': 'TextEdit', 'Valor_benfeitorias (R$ mil)': 'TextEdit', 'Principais_benfeitorias': 'TextEdit', });
lyr_GlebaB2_5.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area_total (ha)': 'TextEdit', 'Area_vegetação (ha)': 'TextEdit', 'Area_util (ha)': 'TextEdit', 'Valor_total (R$ mil)': 'TextEdit', 'Valor R$/m²': 'TextEdit', 'Valor_terra_nua (R$ mil)': 'TextEdit', 'Valor_benfeitorias (R$ mil)': 'TextEdit', 'Principais_benfeitorias': 'TextEdit', });
lyr_Fazendaalpes_1.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Area_total (ha)': 'inline label - always visible', 'Area_vegetação (ha)': 'inline label - always visible', 'Area_util (ha)': 'inline label - always visible', 'Valor_total (R$ mil)': 'inline label - always visible', 'Valor R$/m²': 'inline label - always visible', 'Valor_terra_nua (R$ mil)': 'inline label - always visible', 'Valor_benfeitorias (R$ mil)': 'inline label - always visible', 'Principais_benfeitorias': 'inline label - always visible', });
lyr_GlebaA1_2.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Area_total (ha)': 'inline label - always visible', 'Area_vegetação (ha)': 'inline label - always visible', 'Area_util (ha)': 'inline label - always visible', 'Valor_total (R$ mil)': 'inline label - always visible', 'Valor R$/m²': 'inline label - always visible', 'Valor_terra_nua (R$ mil)': 'inline label - always visible', 'Valor_benfeitorias (R$ mil)': 'inline label - always visible', 'Principais_benfeitorias': 'inline label - always visible', });
lyr_GlebaB1_3.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Area_total (ha)': 'inline label - always visible', 'Area_vegetação (ha)': 'inline label - always visible', 'Area_util (ha)': 'inline label - always visible', 'Valor_total (R$ mil)': 'inline label - always visible', 'Valor R$/m²': 'inline label - always visible', 'Valor_terra_nua (R$ mil)': 'inline label - always visible', 'Valor_benfeitorias (R$ mil)': 'inline label - always visible', 'Principais_benfeitorias': 'inline label - always visible', });
lyr_GlebaA2_4.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Area_total (ha)': 'inline label - always visible', 'Area_vegetação (ha)': 'inline label - always visible', 'Area_util (ha)': 'inline label - always visible', 'Valor_total (R$ mil)': 'inline label - always visible', 'Valor R$/m²': 'inline label - always visible', 'Valor_terra_nua (R$ mil)': 'inline label - always visible', 'Valor_benfeitorias (R$ mil)': 'inline label - always visible', 'Principais_benfeitorias': 'inline label - always visible', });
lyr_GlebaB2_5.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Area_total (ha)': 'inline label - always visible', 'Area_vegetação (ha)': 'inline label - always visible', 'Area_util (ha)': 'inline label - always visible', 'Valor_total (R$ mil)': 'inline label - always visible', 'Valor R$/m²': 'inline label - always visible', 'Valor_terra_nua (R$ mil)': 'inline label - always visible', 'Valor_benfeitorias (R$ mil)': 'inline label - always visible', 'Principais_benfeitorias': 'inline label - always visible', });
lyr_GlebaB2_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});