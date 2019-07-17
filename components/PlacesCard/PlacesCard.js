import React from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity} from "react-native";
import { weatherList } from '../../assets/backgroundImages';

export default function PlacesCard(props) {
  const { navigation } = props;
  const trip = navigation.getParam('trip', 'loading')

  return (
    <View style={styles.view}>
      {trip.places.map(place => {
        let weather = place.weather.summary
        return(
          <ImageBackground imageStyle={{ borderRadius: 20}} source={{uri: weatherList[weather]}} key={place.name} style={styles.image} >
            <TouchableOpacity>
              <Text style={styles.name}>{place.name}</Text>
              <Text style={styles.weather}>{place.weather.temperature + '\u2109'}</Text>
              <Text style={styles.summary}>{place.weather.summary}</Text>
            </TouchableOpacity>
          </ImageBackground>
          )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    color: 'black',
    fontSize: 35,
    fontFamily: 'Optima',
    fontWeight: 'bold',
    paddingTop: 100,
    paddingLeft: 20,
  },
  weather: {
    color: 'black',
    fontFamily: 'Optima',
    fontWeight: 'bold',
    position: 'absolute',
    right: 20,
    top: 20,
    fontSize: 35,
  },
  summary: {
    paddingLeft: 20,
    fontSize: 25,
  },
  image: {
    width: '98%',
    height: 200,
    marginTop: 10,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
  },
  view: {
   
  }
})