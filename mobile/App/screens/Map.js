import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Alert,
  Console,
} from "react-native";
import MapView, {
  PROVIDER_GOOGLE,
  Heatmap,
  Marker,
  Polyline,
  AnimatedRegion,
  Callout,
  camera,
} from "react-native-maps";
import haversine from "haversine";
// import { EmbeddedWebView } from "../components/EmbeddedWebView";
// import { location } from "../screens/PinInformation";

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// These are the values that we are looking at pushing to the database
let currentLat = 0;
let currentLong = 0;
let currentLocation = 0;

// let pinLat = 0;
// let pinLong = 0;
// let pinLocation = 0;

navigator.geolocation.getCurrentPosition(
  (position) => {
    currentLocation =
      JSON.stringify(position.coords.latitude) +
      "," +
      JSON.stringify(position.coords.longitude);
    currentLat = position.coords.latitude;
    currentLong = position.coords.longitude;
  },
  (error) => Alert.alert(error.message),
  { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
);

// var coord = { latitude: 0.0, longitude: 0.0 };
// var pin = { pin: "", coordinate: coord };

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      username: "",
      teamId: "",
      teamName: "",
      latitude: LATITUDE,
      longitude: LONGITUDE,
      markers: [],
      rawPins: [],
      routeCoordinates: [],
      distanceTravelled: 0,
      prevLatLng: {},
      points: [],

      // Gathering Coordinates
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: 0,
        longitudeDelta: 0,
      }),

      // Initial Position in the state
      initialPosition: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: 0,
        longitudeDelta: 0,
        mapRegion: null,
        lastLat: null,
        lastLong: null,
      },
    };

    this.handlePress = this.handlePress.bind(this);
  }

  // points = [
  //   { latitude: 40.7828, longitude: -74.0065, weight: 1 },
  // { latitude: 41.7121, longitude: -74.0042, weight: 1 },
  // { latitude: 40.7102, longitude: -75.006, weight: 1 },
  // { latitude: 40.7123, longitude: -74.0052, weight: 1 },
  // { latitude: 40.7032, longitude: -74.0042, weight: 1 },
  // { latitude: 40.7198, longitude: -74.0024, weight: 1 },
  // { latitude: 41.7223, longitude: -74.0053, weight: 1 },
  // { latitude: 40.7181, longitude: -74.0042, weight: 1 },
  // { latitude: 40.7124, longitude: -74.0023, weight: 1 },
  // { latitude: 40.7648, longitude: -74.0012, weight: 1 },
  // { latitude: 41.7128, longitude: -74.0027, weight: 1 },
  // { latitude: 40.7223, longitude: -74.0153, weight: 1 },
  // { latitude: 40.7193, longitude: -74.0052, weight: 1 },
  // { latitude: 40.7241, longitude: -75.0013, weight: 1 },
  // { latitude: 41.7518, longitude: -74.0085, weight: 1 },
  // { latitude: 40.7599, longitude: -74.0093, weight: 1 },
  // { latitude: 41.7523, longitude: -74.0021, weight: 1 },
  // { latitude: 40.7342, longitude: -74.0152, weight: 1 },
  // { latitude: 40.7484, longitude: -75.0042, weight: 1 },
  // { latitude: 40.7929, longitude: -75.0023, weight: 1 },
  // { latitude: 40.7292, longitude: -74.0013, weight: 1 },
  // { latitude: 40.794, longitude: -74.0048, weight: 1 },
  // { latitude: 40.7874, longitude: -74.0052, weight: 1 },
  // { latitude: 40.7824, longitude: -74.0024, weight: 1 },
  // { latitude: 40.7232, longitude: -74.0094, weight: 1 },
  // { latitude: 41.7342, longitude: -74.0152, weight: 1 },
  // { latitude: 41.7484, longitude: -74.0012, weight: 1 },
  // { latitude: 41.7929, longitude: -74.0073, weight: 1 },
  // { latitude: 41.7292, longitude: -74.0013, weight: 1 },
  // { latitude: 41.794, longitude: -74.0058, weight: 1 },
  // { latitude: 41.7874, longitude: -74.0352, weight: 1 },
  // { latitude: 41.7824, longitude: -74.0024, weight: 1 },
  // { latitude: 41.7232, longitude: -74.0094, weight: 1 },
  // { latitude: 41.0342, longitude: -75.0152, weight: 1 },
  // { latitude: 41.0484, longitude: -75.0012, weight: 1 },
  // { latitude: 41.0929, longitude: -75.0073, weight: 1 },
  // { latitude: 41.0292, longitude: -74.0013, weight: 1 },
  // { latitude: 41.094, longitude: -74.0068, weight: 1 },
  // { latitude: 41.0874, longitude: -74.0052, weight: 1 },
  // { latitude: 41.0824, longitude: -74.0024, weight: 1 },
  // { latitude: 41.0232, longitude: -74.0014, weight: 1 },
  // ];

  storeCoords = (clat, clong) => {
    const userId = this.state.userId;
    const teamId = this.state.teamId;
    const lat = clat;
    const long = clong;
    const weight = 1;

    let requestBody = {
      query: `
          mutation createCoordinate($userId: String!, $teamId: String!, $latitude: Float!, $longitude: Float!, $weight: Int!) {
            createCoordinate(userId: $userId, teamId: $teamId, coordinateInput: { latitude: $latitude, longitude: $longitude, weight: $weight}) {
              _id
              latitude
              longitude
              creator {
                username
              }
            }
          }
        `,
      variables: {
        userId: userId,
        teamId: teamId,
        latitude: lat,
        longitude: long,
        weight: weight,
      },
    };

    // CHECK IP ADDRESS ///////////////////////////////////////////////////////////////////////////
    fetch("http://192.168.1.11:3000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const responseJson = await res.json();

        console.log(responseJson);

        if (res.ok) {
          console.log("Okay ADD HEATMAP");

          this.setState({
            points: [
              ...this.state.points,
              {
                latitude: responseJson.data.createCoordinate.latitude,
                longitude: responseJson.data.createCoordinate.longitude,
                weight: responseJson.data.createCoordinate.weight,
              },
            ],
          });

          return responseJson;
        }

        console.log("ERRRRROR");
        throw new Error(responseJson.error);
      })
      .catch((err) => {
        console.log(err);
      });

    // this.forceUpdate(); // update components
  };

  async fetchCurrentTeam() {
    console.log("fetchCurrentTeam");

    let requestBody = {
      query: `
        query {
          me {
            userId
            username
            teamId
          }
        }
      `, // me query pulls first person in database
    };

    // CHECK IP ADDRESS //////////////////////////////////////////////////////////////////////////////
    fetch("http://192.168.1.11:3000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const responseJson = await res.json();
        console.log(responseJson);

        if (res.ok) {
          // set current logged in user and selected team in state
          const userId = responseJson.data.me.userId;
          const username = responseJson.data.me.username;
          const teamId = responseJson.data.me.teamId;

          this.setState({
            userId: userId,
            username: username,
            teamId: teamId,
          });

          this.fetchTeamInfo();

          return responseJson;
        }

        throw new Error(responseJson.error);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // get team map info (PINS, COORDS)
  fetchTeamInfo() {
    console.log("PIN INFO");
    const teamId = this.state.teamId;

    let requestBody = {
      query: `
          query getTeam($teamId: String!) {
            getTeam(teamId: $teamId) {
              teamName
              pins {
                title
                latitude
                longitude
                description
                creator {
                  username
                }
              }
              coordinates {
                latitude
                longitude
                weight
              }
            }
          }`,
      variables: {
        teamId: teamId,
      },
    };

    // CHECK IP ADDRESS //////////////////////////////////////////////////////////////////////////////
    fetch("http://192.168.1.11:3000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const responseJson = await res.json();
        console.log(responseJson);

        if (res.ok) {
          const teamName = responseJson.data.getTeam.teamName;
          const pinArr = responseJson.data.getTeam.pins;
          const coordArr = responseJson.data.getTeam.coordinates;

          const pinList = [];
          for (let i = 0; i < pinArr.length; i++) {
            pinList.push(pinArr[i]);
          }

          const coordList = [];
          for (let i = 0; i < coordArr.length; i++) {
            coordList.push(coordArr[i]);
          }

          this.setState({
            teamName: teamName,
            rawPins: pinList,
            points: coordList,
          });

          this.fixRawPins(); // transform pin list so it fits with markers later

          return responseJson;
        }

        console.log("ERROR");
        throw new Error(responseJson.error);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // transform pin list so it fits with markers later
  fixRawPins() {
    const rawPins = this.state.rawPins;

    let newList = [];

    for (let i = 0; i < rawPins.length; i++) {
      var coord = {
        latitude: rawPins[i].latitude,
        longitude: rawPins[i].longitude,
      };
      var newMarker = {
        pin: rawPins[i].title,
        coordinate: coord,
        creator: rawPins[i].creator.username,
        description: rawPins[i].description,
        new: false, // mark if pin is NOT new (not editable)
      };
      newList.push(newMarker);
    }

    this.setState({ markers: newList });
  }

  async componentDidMount() {
    await this.fetchCurrentTeam(); // set teamId

    await this.getCurrentLocation();
    this.interval = setInterval(() => this.sendCurrentData(), 10000); // sends the current position automatically every 10 seconds

    const { coordinate } = await this.state;

    this.watchID = navigator.geolocation.watchPosition(
      (position) => {
        const { routeCoordinates, distanceTravelled } = this.state;
        const { latitude, longitude } = position.coords;
        // const weight = 1;
        console.log("lat: " + latitude);

        const newCoordinate = {
          latitude,
          longitude,
          // weight
        };

        console.log("Current Location: " + newCoordinate.latitude);

        if (Platform.OS === "android") {
          if (this.marker) {
            this.marker._component.animateMarkerToCoordinate(
              newCoordinate,
              500
            );
          }
        } else {
          coordinate.timing(newCoordinate).start();
          console.log("here");
          console.log(this.state.routeCoordinates);
        }

        this.setState({
          latitude,
          longitude,
          routeCoordinates: routeCoordinates.concat([newCoordinate]),
          distanceTravelled:
            distanceTravelled + this.calcDistance(newCoordinate),
          prevLatLng: newCoordinate,
        });
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 0,
      }
    );
  }

  // FUNCTION: Getting a user's current location for
  //////////// initial location
  async getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let region = {
          latitude: parseFloat(position.coords.latitude),
          longitude: parseFloat(position.coords.longitude),
          latitudeDelta: 5,
          longitudeDelta: 5,
        };
        this.setState({
          initialRegion: region,
        });
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1,
      }
    );
  }

  // FUNCTION: Setting initial location
  ////////////
  goToInitialLocation() {
    let initialRegion = Object.assign({}, this.state.initialRegion);
    initialRegion["latitudeDelta"] = 0.005;
    initialRegion["longitudeDelta"] = 0.005;
    this.mapView.animateToRegion(initialRegion, 10);
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  calcDistance = (newLatLng) => {
    const { prevLatLng } = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  };

  // set default values of new pin and add to list
  handlePress(e) {
    const coord = e.nativeEvent.coordinate;
    console.log(coord);

    this.setState({
      markers: [
        ...this.state.markers,
        {
          pin: "Tap to Edit",
          coordinate: coord,
          creator: this.state.userId,
          description: "",
          new: true, // new pin (editable)
        },
      ],
    });
  }

  sendCurrentData() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        currentLat = position.coords.latitude;
        currentLong = position.coords.longitude;
        currentLocation = currentLat + "," + currentLong;
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    console.log("force update????");

    this.storeCoords(currentLat, currentLong); // store current loc in db
    // this.forceUpdate(); // update components

    // //  TODO: Update Heatmap
    // Alert.alert(
    //   "Adding/Updating Pins and Heatmap\n" +
    //     "Lat:" +
    //     currentLat +
    //     "\n" +
    //     "Long:" +
    //     currentLong
    // );
  }

  render() {
    // const midX = (currentLat + this.points[0].latitude) / 2;
    // const deltaX = this.points[0].latitude - currentLat;

    // const midY = (currentLong + this.points[0].longitude) / 2;
    // const deltaY = this.points[0].longitude - currentLong;

    // const loc = this.props.navigation.getParam("location", location);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        currentLat = position.coords.latitude;
        currentLong = position.coords.longitude;
        currentLocation = currentLat + "," + currentLong;
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={(map) => (this._map = map)}
          style={styles.map}
          initialRegion={this.state.initialRegion}
          // initialRegion={{
          //   latitude: midX,
          //   longitude: midY,
          //   latitudeDelta: deltaX,
          //   longitudeDelta: deltaY,
          // }}
          showsUserLocation
          followsUserLocation
          loadingEnabled
          region={this.getMapRegion()}
          onLongPress={this.handlePress}
          showsMyLocationButton={true}
        >
          <Polyline coordinates={this.state.routeCoordinates} strokeWidth={0} />
          {/* <Marker.Animated
            ref={(marker) => {
              this.marker = marker;
            }}
            coordinate={this.state.coordinate}
            title="start"
          /> */}

          {/* <TouchableOpacity onPress={this.getCurrentPosition}>
            <Text style={{ height: 100, width: 400 }}>
              Initial Position: {currentLocation}
            </Text>
          </TouchableOpacity> */}

          <Heatmap
            initialRegion={this.state.initialPosition}
            points={this.state.points}
            // points={this.state.routeCoordinates}
            radius={40}
            gradient={{
              colors: ["black", "purple", "red", "yellow", "white"],
              startPoints: [0.01, 0.04, 0.1, 0.45, 0.5],
              colorMapSize: 200,
            }}
          />
          {this.state.markers.map((marker, i, navigation) => {
            // const { lat, long } = marker.coordinate;

            // console.log("MARKER creator:");
            // console.log(marker.creator);

            return (
              <Marker
                coordinate={marker.coordinate}
                key={i}
                title={marker.pin}
                onPress={this.onPress}
                {...marker}
                draggable
                onDragEnd={(e) => console.log(e.nativeEvent.coordinate)}
                // image={require("../cougar_walk.jpg")}
              >
                <Callout
                  onPress={() => {
                    this.props.navigation.navigate("PinInformation", {
                      lat: marker.coordinate.latitude,
                      long: marker.coordinate.longitude,
                      name: marker.pin,
                      desc: marker.description,
                      creator: marker.creator,
                      flag: marker.new,
                    });
                  }}
                >
                  <View>
                    <Text>{marker.pin}</Text>
                  </View>
                </Callout>
              </Marker>
            );
          })}
        </MapView>
        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={this.getCurrentLocation}
            style={[styles.bubble, styles.button]}
          >
            <Text style={styles.bottomBarContent}>
              {parseFloat(this.state.distanceTravelled).toFixed(2)} mi
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bubble: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: "stretch",
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent",
  },
});

export default Map;
