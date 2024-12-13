import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  @Input() latitude!: number;
  @Input() longitude!: number;
  @Input() address!: string;

  center: google.maps.LatLngLiteral = { lat: 0, lng: 0 };
  markerOptions: google.maps.MarkerOptions = { draggable: false };

  ngOnInit(): void {
    this.center = { lat: this.latitude, lng: this.longitude };
  }
}
