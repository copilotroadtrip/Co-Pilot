import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PlacesCard(props) {
  const { navigation } = props;
  const trip = navigation.getParam('trip', 'loading')
  return (
    <View>
      {trip.places.map(place => {
        return(<Text key={place.name}>{place.name}</Text>)
      })}
    </View>
  );
}
