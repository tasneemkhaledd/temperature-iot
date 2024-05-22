import { Component , ViewChild} from '@angular/core';
import {  MapInfoWindow,GoogleMapsModule  ,MapMarker, GoogleMap} from '@angular/google-maps';
import { Router } from '@angular/router';



@Component({
  selector: 'app-map',
  templateUrl: './googlemap.component.html',
})
export class googlemapComponent {

  constructor(private router: Router ) {}

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
   
   
  openInfoWindow(marker: MapMarker) {
    if (this.infoWindow != undefined) this.infoWindow.open(marker);
    
}
    mapCenter: google.maps.LatLngLiteral = { lat: 29.866249084472656, lng: 31.31622314453125 };
  mapOptions: google.maps.MapOptions = {
    center: this.mapCenter,
      zoom: 14,
    
  }
  markerPosition : google.maps.LatLngLiteral={lat:29.86626625061035 , lng:31.31612777709961};
  


  markerOptions: google.maps.MarkerOptions = {
    draggable: false
   };

  //markerPositions: google.maps.LatLngLiteral= {lat:30, lng:31};

  // onMarkerClick() : any {
  //  this.crudService.googlemap(this.onMarkerClick)
  //  .subscribe(()=>{
  //    this.ngOnInit.run(()=>this.router.navigateByUrl('/temps'))
//
  //  })
  //};
//this.router.navigateByUrl('/temps') // Change '/details' to the desired route
  

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPosition=event.latLng.toJSON();
    var marker3 = new google.maps.Marker({
      position: {lat: 29.866249084472656, lng: 31.31622314453125},
      //map:google.maps

    })}
    
     
  
     
 
    ngOnInit(): void {}
  
    display: any;
    center: google.maps.LatLngLiteral = {
        lat: 29.866249084472656,
        lng: 31.31622314453125
    };
    zoom = 14;
  
    /*------------------------------------------
    --------------------------------------------
    moveMap()
    --------------------------------------------
    --------------------------------------------*/
    moveMap(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.center = (event.latLng.toJSON());
    }
  
    /*------------------------------------------
    --------------------------------------------
    move()
    --------------------------------------------
    --------------------------------------------*/
    move(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.display = event.latLng.toJSON();
    }
    onMarkerClick(){
      this.router.navigateByUrl('/temps');
    }
}