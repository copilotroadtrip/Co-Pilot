import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PlacesCard(props) {
  return (
    <View>
      <Text>{props.place.name}</Text>
      <Text>{props.place.weather.weather}</Text>
    </View>
  );
}
