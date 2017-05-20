$(document).ready(function(){
    
    /***** MAPS *****/
    var map = new GMaps({
      div: '.map-box',
      lat: 13.0416495,
      lng: 80.30,
      zoom: 11
    });  
    
    map.addMarker({
      lat: 13.0416495,
      lng: 80.188938,
      title: 'K K Nagar',
      infoWindow: {
      content: '<p>I Stay Here!</p>'
    }
    });

});