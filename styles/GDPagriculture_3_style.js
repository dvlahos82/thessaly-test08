var size = 0;
var placement = 'point';
function categories_GDPagriculture_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Καρδίτσας':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(56,128,54,0.45)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(77,175,74,0.45)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Λάρισας':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(119,61,128,0.45)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(152,78,163,0.45)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Μαγνησίας':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(153,80,119,0.45)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(247,129,191,0.45)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Τρικάλων':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,62,0,0.45)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.45)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_GDPagriculture_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Nomos");
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (exp_label_GDPagriculture_3_eval_expression(context) !== null) {
        labelText = String(exp_label_GDPagriculture_3_eval_expression(context));
    }
    
    var style = categories_GDPagriculture_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
