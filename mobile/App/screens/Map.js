import React, { Component } from "react";
import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";
import { Overlay } from "react-native-elements";

const styles = StyleSheet.create({
  map: {
    flex: 1,
    opacity: 0.5
  },
  overlay: {
    flex: 1
    // opacity: 0.5,
    // backgroundColor: "blue"
  }
});

class Map extends React.Component {
  render() {
    return (
      <Overlay
        isVisible={true}
        overlayBackgroundColor="red"
        fullScreen={true}
        overlayStyle={styles.overlay}
      >
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
          style={styles.map}
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
      </Overlay>
    );
  }
}

export default Map;
