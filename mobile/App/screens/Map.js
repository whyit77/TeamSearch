import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";
// import { Overlay } from "react-native-elements";

import { EmbeddedWebView } from '../components/EmbeddedWebView';

class Map extends React.Component {
  render() {
    const gradientHeight = 500;
    const gradientBackground = "red";
    const data = Array.from({ length: gradientHeight });

    return (

      <EmbeddedWebView url={"http://localhost:8000/"} />

    );
  }
}

export default Map;
