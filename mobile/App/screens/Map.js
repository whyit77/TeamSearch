import React from "react";
import {
  Alert,
  Console,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, {
  PROVIDER_GOOGLE,
  Heatmap,
  Marker,
  Callout,
} from "react-native-maps";

import { name, location, descr } from "../screens/PinInformation";

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let currentLat = 0;
let currentLong = 0;

navigator.geolocation.getCurrentPosition(
  (position) => {
    const location =
      JSON.stringify(position.coords.latitude) +
      "," +
      JSON.stringify(position.coords.longitude);
    currentLat = position.coords.latitude;
    currentLong = position.coords.longitude;
  },
  (error) => Alert.alert(error.message),
  { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
);

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialPosition: {
        latitude: 40.7143,
        longitude: -74.0042,
        latitudeDelta: 0.09,
        longitudeDelta: 0.035,

        mapRegion: null,
        lastLat: null,
        lastLong: null,
      },
      latitude: 40.7143,
      longitude: -74.0042,
      markers: [],
      pinName: name,
      pinLocation: location,
      pinDescription: descr,
      currentLocation: null,
      currentLat: 0,
      currentLong: 0,
    };

    this.handlePress = this.handlePress.bind(this);
  }

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
    { latitude: 41.0232, longitude: -74.0014, weight: 1 },
  ];

  handlePress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          pin: `$$getRandomInt(50,300)`,
        },
      ],
    });
  }

  render() {
    tempticket = [];
    // var lTest = this.state.currentLat;
    // var lTest2 = this.state.currentLong;
    //console.log("LOCATION: " + this.state.location);

    // Current Location: 34.127371, -117.712627
    // latitude: 40.7828, -74.0065,

    const midX = (currentLat + this.points[0].latitude) / 2;
    const deltaX = this.points[0].latitude - currentLat;

    const midY = (currentLong + this.points[0].longitude) / 2;
    const deltaY = this.points[0].longitude - currentLong;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location =
          JSON.stringify(position.coords.latitude) +
          "," +
          JSON.stringify(position.coords.longitude);
        currentLat = position.coords.latitude;
        currentLong = position.coords.longitude;
        this.tempticket.push({
          latitude: 70,
          longitude: -120.707661,
          weight: 1,
        });
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={(map) => (this._map = map)}
        style={styles.map}
        showsUserLocation={true}
        onPress={this.handlePress}
        followUserLocation={true}
        initialRegion={{
          latitude: midX,
          longitude: midY,
          latitudeDelta: deltaX,
          longitudeDelta: deltaY,
        }}
      >
        <Heatmap
          initialRegion={this.state.initialPosition2}
          points={this.points}
          radius={40}
          gradient={{
            colors: ["black", "purple", "red", "yellow", "white"],
            startPoints: [0.01, 0.04, 0.1, 0.45, 0.5],
            colorMapSize: 200,
          }}
        />
        {this.state.markers.map((marker, i, navigation) => {
          return (
            <Marker
              coordinate={(this.state.latitude, this.state.longitude)}
              key={i}
              // title="Pin"
              // description="This is the missing item!"
              onPress={this.onPress}
              {...marker}
              draggable
              onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
              // image={require("../cougar_walk.jpg")}
            >
              <Callout
                onPress={() => {
                  this.props.navigation.navigate("PinInformation");
                }}
              >
                <View>
                  <Text> {this.state.latitude} </Text>
                  <Text>{this.state.pinLocation} </Text>
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    );
  }
}

export default Map;
