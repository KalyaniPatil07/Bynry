import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrl: './profile-list.component.css'
})
export class ProfileListComponent {
  profiles = [
    {
      name: 'John Doe',
      photo: 'user.png',
      description: 'Software Developer',
      address: '1234 Main St, New York, NY',
      lat: 40.7128,
      lng: -74.0060
    },
    {
      name: 'Jane Smith',
      photo: 'user.png',
      description: 'Product Manager',
      address: '5678 Elm St, Los Angeles, CA',
      lat: 34.0522,
      lng: -118.2437
    }
  ];

  selectedProfile: any = null;

  showOnMap(profile: any) {
    this.selectedProfile = profile;
  }

  searchQuery: string = '';

  get filteredProfiles() {
    return this.profiles.filter(profile =>
      profile.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

}
