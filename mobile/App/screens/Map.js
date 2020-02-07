import React, { Component } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";

import HeatMap from "../components/HeatMap";

class Map extends React.Component {
  state = {
    loading: false,
    location: null,
    showMap: false
  };

  render() {
    const { location, loading } = this.state;

    return (
      <HeatMap
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: 34.1301,
          longitude: 117.8884,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421
        }}
      >
        <Marker
          coordinate={{
            latitude: 34.1301,
            longitude: 117.8884
          }}
        />
      </HeatMap>
    );
  }
}

export default Map;
