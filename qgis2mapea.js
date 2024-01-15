var proxy = false
var layerName = 'Cat3 Test'
var fillColor = '#d5b43c'
var strokeColor = 'blue'
var bb = [656563.927200,966407.451700,782016.081000,1222686.939000]
var basemaps = ['cdau_hibrido']

M.proxy(proxy);

mapajs = M.map({
    container: "map",
    controls:[],
    // zoom: 7,
    bbox : bb,
    wmcfiles: basemaps
  });
  
mapajs.setProjection ("EPSG:3005*d");

// Define estilo polygon

let estiloLayer = new M.style.Polygon({
  //radius: 5, 
   fill: {
      color: fillColor,
      opacity: 0.5,
    },
  stroke: {
    color: '#FF0000',
    width: 2
  }
});


// Crea capa

var layerQGIS2Mapea4 = new M.layer.GeoJSON(
  {name: layerName, 
  source: geo

});

layerQGIS2Mapea4.setStyle(estiloLayer);
mapajs.addLayers(layerQGIS2Mapea4);


