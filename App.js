
import React from 'react';
import { StyleSheet, Text, View, ClippingRectangle, Button } from 'react-native';
import { button } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>It works friend!</Text>
      <Button title='appropriate button part 2' icon={{ name: 'code' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
