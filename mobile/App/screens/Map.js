import React, { Component } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";

import Heatmap from "react-native-simpleheat";
import WebView from "react-native";

class Map extends React.Component {
  // Write this as JavaScript???
  HeatMap() {
    return (
      <Heatmap>
        WebView={WebView}
        region=
        {{
          latitude: 34.1301,
          longitude: -117.8884,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421
        }}
        data={[-117.8884, 34.1301, 10]}
      </Heatmap>
    );
  }
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: 34.1301,
          longitude: -117.8884,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421
        }}
        onRegionChange={this.HeatMap()}
      >
        {/* <Marker
          coordinate={{
            latitude: 34.1301,
            longitude: -117.8884
          }}
        /> */}
      </MapView>
    );
  }
}

export default Map;
