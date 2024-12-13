import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {
  profiles = [
    {
      name: 'John Doe',
      photo: 'assets/john.jpg',
      description: 'Software Developer',
      address: '1234 Main St, New York, NY',
      lat: 40.7128,
      lng: -74.0060
    },
    {
      name: 'Jane Smith',
      photo: 'assets/jane.jpg',
      description: 'Product Manager',
      address: '5678 Elm St, Los Angeles, CA',
      lat: 34.0522,
      lng: -118.2437
    }
  ];

  newProfile = {
    name: '',
    photo: '',
    description: '',
    address: '',
    lat: 0,
    lng: 0
  };

  addProfile() {
    this.profiles.push({ ...this.newProfile });
    this.newProfile = { name: '', photo: '', description: '', address: '', lat: 0, lng: 0 };
  }

  deleteProfile(index: number) {
    this.profiles.splice(index, 1);
  }

}
