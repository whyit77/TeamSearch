import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Heatmap, Marker } from "react-native-maps";

import { area } from "../screens/DefineSearchArea";

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

class Map extends React.Component {
  state = {
    initialPosition: {
      latitude: 40.7143,
      longitude: -74.0042,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035
    },
    radius: area
  };

  points = [
    { latitude: 40.7828, longitude: -74.0065, weight: 1 },
    { latitude: 41.7121, longitude: -74.0042, weight: 1 },
    { latitude: 40.7102, longitude: -75.006, weight: 1 },
    { latitude: 40.7123, longitude: -74.0052, weight: 1 },
    { latitude: 40.7032, longitude: -74.0042, weight: 1 },
    { latitude: 40.7198, longitude: -74.0024, weight: 1 },
    { latitude: 41.7223, longitude: -74.0053, weight: 1 },
    { latitude: 40.7181, longitude: -74.0042, weight: 1 },
    { latitude: 40.7124, longitude: -74.0023, weight: 1 },
    { latitude: 40.7648, longitude: -74.0012, weight: 1 },
    { latitude: 41.7128, longitude: -74.0027, weight: 1 },
    { latitude: 40.7223, longitude: -74.0153, weight: 1 },
    { latitude: 40.7193, longitude: -74.0052, weight: 1 },
    { latitude: 40.7241, longitude: -75.0013, weight: 1 },
    { latitude: 41.7518, longitude: -74.0085, weight: 1 },
    { latitude: 40.7599, longitude: -74.0093, weight: 1 },
    { latitude: 41.7523, longitude: -74.0021, weight: 1 },
    { latitude: 40.7342, longitude: -74.0152, weight: 1 },
    { latitude: 40.7484, longitude: -75.0042, weight: 1 },
    { latitude: 40.7929, longitude: -75.0023, weight: 1 },
    { latitude: 40.7292, longitude: -74.0013, weight: 1 },
    { latitude: 40.794, longitude: -74.0048, weight: 1 },
    { latitude: 40.7874, longitude: -74.0052, weight: 1 },
    { latitude: 40.7824, longitude: -74.0024, weight: 1 },
    { latitude: 40.7232, longitude: -74.0094, weight: 1 },
    { latitude: 41.7342, longitude: -74.0152, weight: 1 },
    { latitude: 41.7484, longitude: -74.0012, weight: 1 },
    { latitude: 41.7929, longitude: -74.0073, weight: 1 },
    { latitude: 41.7292, longitude: -74.0013, weight: 1 },
    { latitude: 41.794, longitude: -74.0058, weight: 1 },
    { latitude: 41.7874, longitude: -74.0352, weight: 1 },
    { latitude: 41.7824, longitude: -74.0024, weight: 1 },
    { latitude: 41.7232, longitude: -74.0094, weight: 1 },
    { latitude: 41.0342, longitude: -75.0152, weight: 1 },
    { latitude: 41.0484, longitude: -75.0012, weight: 1 },
    { latitude: 41.0929, longitude: -75.0073, weight: 1 },
    { latitude: 41.0292, longitude: -74.0013, weight: 1 },
    { latitude: 41.094, longitude: -74.0068, weight: 1 },
    { latitude: 41.0874, longitude: -74.0052, weight: 1 },
    { latitude: 41.0824, longitude: -74.0024, weight: 1 },
    { latitude: 41.0232, longitude: -74.0014, weight: 1 }
  ];

  onPress = () => {
    console.log("Pressed.");
  };

  render() {
    // console.log(this.state.radius);
    // let { width } = Dimensions.get("window");
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={map => (this._map = map)}
        style={styles.map}
        initialRegion={this.state.initialPosition}
        showsUserLocation={true}
      >
        <Heatmap
          initialRegion={this.state.initialPosition}
          points={this.points}
          radius={40}
          gradient={{
            colors: ["black", "purple", "red", "yellow", "white"],
            startPoints: [0.01, 0.04, 0.1, 0.45, 0.5],
            colorMapSize: 200
          }}
        />
        {/* <View
          style={{
            position: "absolute",
            justifyContent: "center",
            // Notes: Dimensions must be pulled in from user data
            // top: -width / 2 + 100,
            // left: -width / 2 + 50,
            // right: -width / 2 + 50,
            // bottom: -width / 2 + 200,
            backgroundColor: "transparent",

            borderWidth: width / 4,
            borderRadius: width,
            borderColor: "red",
            opacity: 0.3
          }}
        /> */}
        <Marker
          coordinate={{ latitude: 40.7143, longitude: -74.0042 }}
          onPress={this.onPress}
        />
      </MapView>
    );
  }
}

export default Map;
