import React from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity} from "react-native";
import { weatherList } from '../../assets/backgroundImages';


export default function PlacesCard(props) {
  const { navigation } = props;
  const trip = navigation.getParam('trip', 'loading')

  hoursToNextPlace = hours => {
    var sign = hours < 0 ? "-" : "";
    var hour = Math.floor(Math.abs(hours));
    var min = Math.floor((Math.abs(hours) * 60) % 60);
    return sign + (hour < 10 ? "0" : "") + hour + ":" + (min < 10 ? "0" : "") + min;
   }

  return (
    <View style={styles.view}>
      {trip.places.map((place, index) => {
        let weather = place.weather.summary
        
        if(trip.legs[index]) {
          return(
            <View>
            <ImageBackground imageStyle={{ borderRadius: 20}} source={{uri: weatherList[weather]}} key={place.name} style={styles.image} >
              <TouchableOpacity>
                <Text style={styles.name}>{place.name}</Text>
                <Text style={styles.weather}>{place.weather.temperature + '\u2109'}</Text>
                <Text style={styles.summary}>{place.weather.summary}</Text>
              </TouchableOpacity>
            </ImageBackground>
            <View style={styles.legs}>
              <Text style={styles.arrow}>{'\u2193'}</Text>
                <Text style={styles.distance}>{trip.legs[index].distance}</Text>
                <Text style={styles.hours}>{hoursToNextPlace(trip.legs[index].duration_in_hours) + 'hrs'}</Text>
            </View>
            </View>
            )
        } else {
          return(
            <View>
            <ImageBackground imageStyle={{ borderRadius: 20}} source={{uri: weatherList[weather]}} key={place.name} style={styles.image} >
              <TouchableOpacity>
                <Text style={styles.name}>{place.name}</Text>
                <Text style={styles.weather}>{place.weather.temperature + '\u2109'}</Text>
                <Text style={styles.summary}>{place.weather.summary}</Text>
              </TouchableOpacity>
            </ImageBackground>
            </View>
            )
        }
        
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
  legs: {
   flexDirection: 'row',
   width: '100%',
   justifyContent: 'space-around',
  },
  arrow: {
    fontSize: 30,
  },
  distance: {
    fontSize: 30,
  },
  hours: {
    fontSize: 30,
  
  }
})