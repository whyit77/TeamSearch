import React from "react";
import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Heatmap, Marker } from "react-native-maps";

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});
import { EmbeddedWebView } from "../components/EmbeddedWebView";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let currentLat = 0;
let currentLong = 0;
let currentLocation = null;

navigator.geolocation.getCurrentPosition(
  position => {
    currentLocation = JSON.stringify(position.coords.latitude) + "," + JSON.stringify(position.coords.longitude);
    currentLat = position.coords.latitude;
    currentLong = position.coords.longitude;

  },
  error => Alert.alert(error.message),
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
        longitudeDelta: 0.035
      },
      latitude: 40.7143,
      longitude: -74.0042,
      markers: [],

      currentLat: 0,
      currentLong: 0

    };

    this.handlePress = this.handlePress.bind(this);
  }


  handlePress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          pin: `$$getRandomInt(50,300)`
        }
      ]
    });
  }

  render() {

    let points = [
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
    ];

    const midX = (currentLat + points[0].latitude) / 2;
    const deltaX = ((points[0].latitude) - currentLat);

    const midY = (currentLong + points[0].longitude) / 2;
    const deltaY = (points[0].longitude - currentLong);

    points.push({ latitude: currentLat, longitude: currentLong, weight: 1 });


    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={map => (this._map = map)}
        style={styles.map}
        showsUserLocation={true}
        followUserLocation={true}
        initialRegion={{
          latitude: midX,
          longitude: midY,
          latitudeDelta: deltaX,
          longitudeDelta: deltaY
        }}
      >

        <Heatmap
          initialRegion={this.state.initialPosition}
          points={points}
          radius={40}
          gradient={{
            colors: ["black", "purple", "red", "yellow", "white"],
            startPoints: [0.01, 0.04, 0.1, 0.45, 0.5],
            colorMapSize: 200
          }}
        />
        {this.state.markers.map((marker, i) => {

          return (
            <Marker
              coordinate={this.state.x}
              key={i}
              title="Pin"
              description="This is the missing item!"
              {...marker}
              draggable
              onDragEnd={e => this.setState({ x: e.nativeEvent.coordinate })}
            />
          );
        })}


      </MapView>
    );

  }
}

export default Map;