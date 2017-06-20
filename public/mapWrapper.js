var MapWrapper = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  })
  this.markers = [];
}

MapWrapper.prototype = {

  addMarker: function(coords) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    this.markers.push(marker);
  },

  addClickEvent: function() {
    this.googleMap.addListener('click', function(event){
      var coords = {lat: event.latLng.lat(), lng: event.latLng.lng() }
      this.addMarker(coords);
    }.bind(this));
  },

  addInfoBox: function(index, contentString) {
  var infoBox = new google.maps.InfoWindow({
       content: contentString
     });
     this.markers[index].addListener('click', function() {
       infoBox.open(this.googleMap, this.markers[index]);
     }.bind(this));
  }




}