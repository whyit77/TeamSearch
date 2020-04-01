import React, { Component } from 'react';
import { Dimensions, StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Heatmap, Marker } from "react-native-maps";

import { Alert, Text, TouchableOpacity } from 'react-native';

import { area } from "../screens/DefineSearchArea";

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});
import { EmbeddedWebView } from "../components/EmbeddedWebView";



class Map extends React.Component {

  state = {

    initialPosition: {
      latitude: 40.7143,
      longitude: -74.0042,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035,

      mapRegion: null,
      lastLat: null,
      lastLong: null,



    },
    radius: area,

    currentLocation: null,
    currentLat: 0,
    currentLong: 0
  };

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      // Create the object to update this.state.mapRegion through the onRegionChange function
      let region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.00922 * 1.5,
        longitudeDelta: 0.00421 * 1.5
      }
      this.onRegionChange(region, region.latitude, region.longitude);
    });
  }

  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      // If there are no new values set use the the current ones
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  onMapPress(e) {
    console.log(e.nativeEvent.coordinate.longitude);
    let region = {
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
      latitudeDelta: 0.00922 * 1.5,
      longitudeDelta: 0.00421 * 1.5
    }
    this.onRegionChange(region, region.latitude, region.longitude);
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
    { latitude: 41.0232, longitude: -74.0014, weight: 1 }
  ];


  onPress = () => {
    console.log("Pressed.");
  };

  findCoordinates = () => {

    console.log("Finding Coordinates");
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position.coords.latitude) + "," + JSON.stringify(position.coords.longitude);

        this.setState({ location });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );




  };

  render() {
    // console.log(this.state.radius);
    // let { width } = Dimensions.get("window");

    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position.coords.latitude) + "," + JSON.stringify(position.coords.longitude);
        console.log("YEET");
        this.setState({ location, currentLat: position.coords.latitude, currentLong: position.coords.longitude });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    // var lTest = this.state.currentLat;
    // var lTest2 = this.state.currentLong;

    console.log("Current Lat: " + this.state.currentLat);
    console.log("Current Long: " + this.state.currentLong);
    //console.log("LOCATION: " + this.state.location);


    return (



      <MapView
        provider={PROVIDER_GOOGLE}
        ref={map => (this._map = map)}
        style={styles.map}
        showsUserLocation={true}
        followUserLocation={true}
        initialRegion={{
          latitude: this.state.currentLat,
          longitude: this.state.currentLong,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}

      >


        <Heatmap
          initialRegion={this.state.initialPosition2}
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

        <TouchableOpacity onPress={this.findCoordinates}>
          <Text style={styles.welcome}>Find My Coords?</Text>
          <Text>Location: {this.state.location}</Text>
        </TouchableOpacity>


        <Marker
          coordinate={{ latitude: 40.7143, longitude: -74.0042 }}
          onPress={this.onPress}
        />
      </MapView>

    );


    return <EmbeddedWebView url={"http://localhost:8000/"} />;
  }
}

export default Map;
