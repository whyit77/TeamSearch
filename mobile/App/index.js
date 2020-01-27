import React, { useState }from 'react';
import { createAppContainer, createStackNavigator } from "react-navigation-stack";
import { AppLoading } from 'expo';
import Navigator from './routes/drawer';

export default function App() {
  return (
      <Navigator />
  );
}

