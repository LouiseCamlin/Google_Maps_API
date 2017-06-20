
var initialize = function(){

  var container = document.querySelector('#main-map')
  var coords = {lat: 54.34, lng: -6.27}
  var zoom = 10

  var mainMap = new MapWrapper(container, coords, zoom);

  mainMap.addMarker(coords);
  mainMap.addClickEvent();
  mainMap.addInfoBox(0, "Banbridge");


  var goTo = function(){
    var fiji = {lat: -17.83, lng: 177.98};
    mainMap.googleMap.setCenter(fiji);
  }

  var takeButton = document.querySelector("#take-button");

  takeButton.addEventListener('click', goTo)
}







window.addEventListener('load', initialize);