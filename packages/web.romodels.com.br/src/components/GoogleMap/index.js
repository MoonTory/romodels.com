import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { genInfoWindowContent } from './genInfoWinContent';

export class GoogleMap extends Component {
  handleApiLoaded = (map, maps) => {
    // use map and maps objects
    const request = {
      placeId: 'ChIJu3AG-uzxXpMRDcAORoQvFmA',
      fields: [
        'name',
        'rating',
        'formatted_phone_number',
        'geometry',
        'formatted_address',
        'formatted_address',
        'url',
        'photo'
      ]
    };

    const service = new maps.places.PlacesService(map);

    service.getDetails(request, (results, status) => {
      if (status === maps.places.PlacesServiceStatus.OK) {
        const infoWindow = new maps.InfoWindow();
        const infoWinContent = genInfoWindowContent(results);
        const marker = new maps.Marker({
          position: {
            lat: results.geometry.location.lat(),
            lng: results.geometry.location.lng()
          },
          map: map,
          title: 'Ronaldo Oliveira Models, School & Production'
        });

        infoWindow.setContent(infoWinContent);
        infoWindow.open(map, marker);

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      }
    });
  };

  static defaultProps = {
    center: {
      lat: -16.70038,
      lng: -49.2740642
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyChTFUgMz9pItqll6yY8bwQA0yb7jk8HsE', libraries: 'places' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
        />
      </div>
    );
  }
}
