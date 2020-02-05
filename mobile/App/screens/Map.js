import React, { Component } from "react";
import { Alert } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";

class Map extends React.Component {
  state = {
    loading: false,
    location: null,
    showMap: false
  };

  render() {
    const { location, loading } = this.state;

    // locationLat = this.props.navigation.state.params.locationLat;
    // locationLong = this.props.navigation.state.params.locationLong;
    // statLat = this.props.navigation.state.params.statLat;
    // statLong = this.props.navigation.state.params.statLong;

    //Alert.alert({ locationLong });

    return (
      
      <MapView
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
      </MapView>
    );
  }
}

export default Map;
