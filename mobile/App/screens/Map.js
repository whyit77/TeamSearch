import React, { Component } from "react";
import { Alert } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";

import { EmbeddedWebView } from '../components/EmbeddedWebView';

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

      <EmbeddedWebView url={"http://172.17.59.143:3000"} />

    );
  }
}

export default Map;
