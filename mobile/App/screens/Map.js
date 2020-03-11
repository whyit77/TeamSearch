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
import { StyleSheet, View, Dimensions } from "react-native";
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
    let { width, height } = Dimensions.get("window");

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
        <View
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
        >
          {/* {data.map((_, i) => (
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
          ))} */}
          <Marker
            coordinate={{
              latitude: 34.1301,
              longitude: -117.8884
            }}
          />
        </View>
      </MapView>
      // </Overlay>
    );
  }
}

export default Map;
