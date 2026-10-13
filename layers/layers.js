var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_density_1 = new ol.format.GeoJSON();
var features_density_1 = format_density_1.readFeatures(json_density_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_density_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_density_1.addFeatures(features_density_1);
var lyr_density_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_density_1, 
                style: style_density_1,
                popuplayertitle: 'density',
                interactive: false,
    title: 'density<br />\
    <img src="styles/legend/density_1_0.png" /> <5<br />\
    <img src="styles/legend/density_1_1.png" /> 5 - 10<br />\
    <img src="styles/legend/density_1_2.png" /> 10 - 20<br />\
    <img src="styles/legend/density_1_3.png" /> 20 - 50<br />\
    <img src="styles/legend/density_1_4.png" /> >50<br />' });
var format_gdp_sector_2 = new ol.format.GeoJSON();
var features_gdp_sector_2 = format_gdp_sector_2.readFeatures(json_gdp_sector_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gdp_sector_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gdp_sector_2.addFeatures(features_gdp_sector_2);
var lyr_gdp_sector_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gdp_sector_2, 
                style: style_gdp_sector_2,
                popuplayertitle: 'gdp_sector',
                interactive: false,
    title: 'gdp_sector<br />\
    <img src="styles/legend/gdp_sector_2_0.png" /> Καρδίτσας<br />\
    <img src="styles/legend/gdp_sector_2_1.png" /> Λάρισας<br />\
    <img src="styles/legend/gdp_sector_2_2.png" /> Μαγνησίας<br />\
    <img src="styles/legend/gdp_sector_2_3.png" /> Τρικάλων<br />' });
var format_GDPagriculture_3 = new ol.format.GeoJSON();
var features_GDPagriculture_3 = format_GDPagriculture_3.readFeatures(json_GDPagriculture_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GDPagriculture_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GDPagriculture_3.addFeatures(features_GDPagriculture_3);
var lyr_GDPagriculture_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GDPagriculture_3, 
                style: style_GDPagriculture_3,
                popuplayertitle: 'GDP agriculture',
                interactive: false,
    title: 'GDP agriculture<br />\
    <img src="styles/legend/GDPagriculture_3_0.png" /> Καρδίτσας<br />\
    <img src="styles/legend/GDPagriculture_3_1.png" /> Λάρισας<br />\
    <img src="styles/legend/GDPagriculture_3_2.png" /> Μαγνησίας<br />\
    <img src="styles/legend/GDPagriculture_3_3.png" /> Τρικάλων<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_density_1.setVisible(true);lyr_gdp_sector_2.setVisible(false);lyr_GDPagriculture_3.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_density_1,lyr_gdp_sector_2,lyr_GDPagriculture_3];
lyr_density_1.set('fieldAliases', {'fid': 'fid', 'KAL2022': 'KAL2022', 'LAU_LABEL3': 'LAU_LABEL3', 'Nomos': 'Nomos', 'Field1': 'Field1', 'Field2': 'Field2', 'Field3': 'Field3', 'plithismos': 'plithismos', 'Astikotita': 'Astikotita', 'Oreinotita': 'Oreinotita', 'ektasi': 'ektasi', 'kodikos': 'kodikos', 'kodikos_keim': 'kodikos_keim', 'piknotita': 'piknotita', 'area': 'area', });
lyr_gdp_sector_2.set('fieldAliases', {'fid': 'fid', 'Nomos': 'Nomos', 'Ανθρωπογενές': 'Ανθρωπογενές', 'Δασικές': 'Δασικές', 'Γεωργικές': 'Γεωργικές', 'Υγρότοποι': 'Υγρότοποι', 'Αστικοί': 'Αστικοί', 'Αγροτικοί': 'Αγροτικοί', 'ορεινοί': 'ορεινοί', 'ημιορεινοί': 'ημιορεινοί', 'πεδινοί': 'πεδινοί', 'ΑΕΠ κκ': 'ΑΕΠ κκ', 'Πληθυσμός': 'Πληθυσμός', 'ΑΕΠ': 'ΑΕΠ', 'test': 'test', 'Γεωργία': 'Γεωργία', 'Βιομηχανία': 'Βιομηχανία', 'Υπηρεσίες': 'Υπηρεσίες', 'Δημόσιο': 'Δημόσιο', 'Ακίνητα': 'Ακίνητα', 'Σύνολο': 'Σύνολο', });
lyr_GDPagriculture_3.set('fieldAliases', {'fid': 'fid', 'Nomos': 'Nomos', 'Ανθρωπογενές': 'Ανθρωπογενές', 'Δασικές': 'Δασικές', 'Γεωργικές': 'Γεωργικές', 'Υγρότοποι': 'Υγρότοποι', 'Αστικοί': 'Αστικοί', 'Αγροτικοί': 'Αγροτικοί', 'ορεινοί': 'ορεινοί', 'ημιορεινοί': 'ημιορεινοί', 'πεδινοί': 'πεδινοί', 'ΑΕΠ κκ': 'ΑΕΠ κκ', 'Πληθυσμός': 'Πληθυσμός', 'ΑΕΠ': 'ΑΕΠ', 'test': 'test', 'ΑΕΠ γεωργία': 'ΑΕΠ γεωργία', 'ΑΕΠ μεταποίηση': 'ΑΕΠ μεταποίηση', 'ΑΕΠ ανά στρέμμα': 'ΑΕΠ ανά στρέμμα', });
lyr_density_1.set('fieldImages', {'fid': 'TextEdit', 'KAL2022': 'TextEdit', 'LAU_LABEL3': 'TextEdit', 'Nomos': 'TextEdit', 'Field1': 'Range', 'Field2': 'TextEdit', 'Field3': 'TextEdit', 'plithismos': 'Range', 'Astikotita': 'Range', 'Oreinotita': 'TextEdit', 'ektasi': 'TextEdit', 'kodikos': 'Range', 'kodikos_keim': 'TextEdit', 'piknotita': 'TextEdit', 'area': 'Range', });
lyr_gdp_sector_2.set('fieldImages', {'fid': 'TextEdit', 'Nomos': 'TextEdit', 'Ανθρωπογενές': 'TextEdit', 'Δασικές': 'TextEdit', 'Γεωργικές': 'TextEdit', 'Υγρότοποι': 'TextEdit', 'Αστικοί': 'TextEdit', 'Αγροτικοί': 'TextEdit', 'ορεινοί': 'Range', 'ημιορεινοί': 'Range', 'πεδινοί': 'Range', 'ΑΕΠ κκ': 'Range', 'Πληθυσμός': 'Range', 'ΑΕΠ': 'TextEdit', 'test': 'Range', 'Γεωργία': 'Range', 'Βιομηχανία': 'Range', 'Υπηρεσίες': 'Range', 'Δημόσιο': 'Range', 'Ακίνητα': 'Range', 'Σύνολο': 'Range', });
lyr_GDPagriculture_3.set('fieldImages', {'fid': 'TextEdit', 'Nomos': 'TextEdit', 'Ανθρωπογενές': 'TextEdit', 'Δασικές': 'TextEdit', 'Γεωργικές': 'TextEdit', 'Υγρότοποι': 'TextEdit', 'Αστικοί': 'TextEdit', 'Αγροτικοί': 'TextEdit', 'ορεινοί': 'Range', 'ημιορεινοί': 'Range', 'πεδινοί': 'Range', 'ΑΕΠ κκ': 'Range', 'Πληθυσμός': 'Range', 'ΑΕΠ': 'TextEdit', 'test': 'Range', 'ΑΕΠ γεωργία': 'Range', 'ΑΕΠ μεταποίηση': 'Range', 'ΑΕΠ ανά στρέμμα': 'Range', });
lyr_density_1.set('fieldLabels', {'fid': 'no label', 'KAL2022': 'no label', 'LAU_LABEL3': 'no label', 'Nomos': 'no label', 'Field1': 'no label', 'Field2': 'no label', 'Field3': 'no label', 'plithismos': 'no label', 'Astikotita': 'no label', 'Oreinotita': 'no label', 'ektasi': 'no label', 'kodikos': 'no label', 'kodikos_keim': 'no label', 'piknotita': 'no label', 'area': 'no label', });
lyr_gdp_sector_2.set('fieldLabels', {'fid': 'no label', 'Nomos': 'no label', 'Ανθρωπογενές': 'no label', 'Δασικές': 'no label', 'Γεωργικές': 'no label', 'Υγρότοποι': 'no label', 'Αστικοί': 'no label', 'Αγροτικοί': 'no label', 'ορεινοί': 'no label', 'ημιορεινοί': 'no label', 'πεδινοί': 'no label', 'ΑΕΠ κκ': 'no label', 'Πληθυσμός': 'no label', 'ΑΕΠ': 'no label', 'test': 'no label', 'Γεωργία': 'no label', 'Βιομηχανία': 'no label', 'Υπηρεσίες': 'no label', 'Δημόσιο': 'no label', 'Ακίνητα': 'no label', 'Σύνολο': 'no label', });
lyr_GDPagriculture_3.set('fieldLabels', {'fid': 'no label', 'Nomos': 'no label', 'Ανθρωπογενές': 'no label', 'Δασικές': 'no label', 'Γεωργικές': 'no label', 'Υγρότοποι': 'no label', 'Αστικοί': 'no label', 'Αγροτικοί': 'no label', 'ορεινοί': 'no label', 'ημιορεινοί': 'no label', 'πεδινοί': 'no label', 'ΑΕΠ κκ': 'no label', 'Πληθυσμός': 'no label', 'ΑΕΠ': 'no label', 'test': 'no label', 'ΑΕΠ γεωργία': 'no label', 'ΑΕΠ μεταποίηση': 'no label', 'ΑΕΠ ανά στρέμμα': 'no label', });
lyr_GDPagriculture_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});