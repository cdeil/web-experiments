import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer, MapComponent } from 'react-leaflet';
import L from 'leaflet';

const IMG1 = 'https://raw.githubusercontent.com/cdeil/fermi-ts-maps/master/emin_0030_emax_0100.png';

export default class Maps extends Component {
  constructor() {
    super();
    this.url = 'https://raw.githubusercontent.com/cdeil/fermi-ts-maps/master/emin_0030_emax_0100.png';
  }
  componentDidMount() {
    const map = this.map = this.refs.map.leafletElement;

    const w = 10001;
    const h = 401;

    // calculate the edges of the image, in coordinate space
    const southWest = map.unproject([0, h], map.getMaxZoom() - 1);
    const northEast = map.unproject([w, 0], map.getMaxZoom() - 1);
    const bounds = new L.LatLngBounds(southWest, northEast);

    L.imageOverlay(IMG1, bounds).addTo(map);

    map.setMaxBounds(bounds);

    L.marker([-20, 500]).addTo(map)
      .bindPopup('Hello world!');
  }

  render() {
    // console.log(mappy.getLeafletElement());
    const props = {
      minZoom: 1,
      maxZoom: 4,
      center: [0, 0],
      zoom: 1,
      crs: L.CRS.Simple,
    };
    return (
        <Map ref="map" className="map" id="map" {...props} />
    );
  }
}
