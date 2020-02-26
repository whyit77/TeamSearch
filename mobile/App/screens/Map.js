// import React, { Component } from "react";
// import { StyleSheet, View } from "react-native";
// import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
// import { Marker } from "react-native-maps";

// import { EmbeddedWebView } from "../components/EmbeddedWebView";

// class Map extends React.Component {
//   render() {
//     const gradientHeight = 500;
//     const gradientBackground = "red";
//     const data = Array.from({ length: gradientHeight });

//     return <EmbeddedWebView url={"http://localhost:8000/"} />;
//   }
// }

// export default Map;

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";
// import { Overlay } from "react-native-elements";

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "blue"
  }
});

class Map extends React.Component {
  render() {
    const gradientHeight = 500;
    const gradientBackground = "red";
    const data = Array.from({ length: gradientHeight });

    return (
      // <Overlay
      //   isVisible={true}
      //   overlayBackgroundColor="red"
      //   fullScreen={true}
      //   overlayStyle={styles.overlay}
      // >
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
        style={styles.overlay}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: 34.1301,
          longitude: -117.8884,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421
        }}
      >
        {data.map((_, i) => (
          <View
            key={i}
            style={{
              position: "relative",
              backgroundColor: gradientBackground,
              height: 0.25,
              // bottom: gradientHeight - i,
              right: 0,
              left: 0,
              zIndex: 2,
              opacity: (1 / gradientHeight) * (i + 1)
            }}
          />
        ))}
        <Marker
          coordinate={{
            latitude: 34.1301,
            longitude: -117.8884
          }}
        />
      </MapView>
      // </Overlay>
    );
  }
}

export default Map;
