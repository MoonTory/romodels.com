import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { genInfoWindowContent } from './genInfoWinContent';

export class Map extends Component {
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
      console.log('result', results);
      if (status === maps.places.PlacesServiceStatus.OK) {
        this.renderMarkers(results, maps, map);
      }
    });
  };

  renderMarkers = async (results, maps, map) => {
    const infoWindow = new maps.InfoWindow();
    const infoWinContent = genInfoWindowContent(results);
    const marker = new maps.Marker({
      position: {
        lat: results.geometry.location.lat(),
        lng: results.geometry.location.lng()
      },
      map: map,
      title: 'Hello World!'
    });

    infoWindow.setContent(infoWinContent);
    infoWindow.open(map, marker);

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
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
          bootstrapURLKeys={{ key: 'GOOGLE_API_KEY_GOES_HERE', libraries: 'places' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
        />
      </div>
    );
  }
}
