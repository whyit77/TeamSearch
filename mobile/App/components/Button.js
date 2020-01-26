// App/components / Button.js

//KYLE
// import React from "react";
// import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//     button: {
//         backgroundColor: "rgba(255, 255, 255, 0.3)",
//         borderRadius: 10,
//         paddingVertical: 15,
//         alignItems: "center",
//         justifyContent: "center",
//         width: "46%",
//         marginTop: 20
//     },
//     text: {
//         color: "#fff",
//         fontSize: 20,
//         textAlign: "center"
//     },
//     buttonContainer: {
//         flexDirection: "row",
//         flexWrap: "wrap",
//         marginTop: 20,
//         justifyContent: "space-between"
//     }
// });

// export const Button = ({ text, onPress = () => { } }) => (
//     <TouchableOpacity onPress={onPress} style={styles.button}>
//         <Text style={styles.text}>{text}</Text>
//     </TouchableOpacity>
// );

// export const ButtonContainer = ({ children }) => (
//     <View style={styles.buttonContainer}>{children}</View>
// );

// OTHER
// import React from "react";
// import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: "rgba(255, 255, 255, 0.3)",
//     borderRadius: 10,
//     paddingVertical: 15,
//     alignItems: "center",
//     justifyContent: "center",
//     width: "46%",
//     marginTop: 20
//   },
//   text: {
//     color: "#fff",
//     fontSize: 20,
//     textAlign: "center"
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     marginTop: 20,
//     justifyContent: "space-between"
//   }
// });

// // define default behaivor of button (if no onPress method passed in)
// export const Button = ({ text, onPress = () => {} }) => (
//   <TouchableOpacity onPress={onPress} style={styles.button}>
//     <Text style={styles.text}>{text}</Text>
//   </TouchableOpacity>
// );

// export const ButtonContainer = ({ children }) => (
//   <View style={styles.buttonContainer}>{children}</View>
// );

import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#D22322",
    paddingVertical: 10,
    paddingHorizontal: 45,
    alignItems: "center",
    marginHorizontal: 20
  },
  buttonLoading: {
    backgroundColor: "#E58E8D"
  },
  text: {
    fontWeight: "500",
    fontSize: 18,
    color: "#fff"
  }
});

export const Button = ({ text, onPress, loading = false, style = {} }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.button, loading && styles.buttonLoading, style]}
    disabled={loading}
  >
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);
