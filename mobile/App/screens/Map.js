import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    // opacity: 0.5,
    backgroundColor: "red"
  },
  gradient: {
    flex: 1,
    backgroundColor: "blue"
  }
});

class Map extends React.Component {
  state = {
    loading: false,
    location: null,
    showMap: false
  };

  render() {
    const { location, loading } = this.state;

    return (
      <View style={styles.overlay}>
        <MapView
          customMapStyle={[
            {
              featureType: "road.local",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#ff8080"
                },
                {
                  visibility: "on"
                },
                {
                  weight: 5
                }
              ]
            },
            {
              featureType: "landscape.natural.landcover",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#3d84ff"
                },
                {
                  saturation: -50
                },
                {
                  lightness: 25
                },
                {
                  visibility: "on"
                }
              ]
            }
          ]}
          style={styles.gradient}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={{
            latitude: 34.1301,
            longitude: -117.8884,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421
          }}
        >
          <Marker
            coordinate={{
              latitude: 34.1301,
              longitude: -117.8884
            }}
          />
        </MapView>
      </View>
    );
  }
}

export default Map;
