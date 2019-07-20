import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { weatherList } from "../../assets/backgroundImages";
import Place from "../Place/Place";



export default function PlacesCard(props) {
  const { navigation } = props;
  const trip = navigation.getParam("trip", "loading");

  hoursToNextPlace = hours => {
    var sign = hours < 0 ? "-" : "";
    var hour = Math.floor(Math.abs(hours));
    var min = Math.floor((Math.abs(hours) * 60) % 60);
    return (
      sign + (hour < 10 ? "0" : "") + hour + ":" + (min < 10 ? "0" : "") + min
    );
  };

  

  return (
    <ScrollView style={styles.view}>
      {trip.places.map((place, index) => {
        let weather = place.weather.icon;
        if (trip.legs[index]) {
          return (
            <View key={place.id}>
              <ImageBackground
                imageStyle={{ borderRadius: 20, opacity: 0.7 }}
                source={{ uri: weatherList[weather] }}
                key={place.name}
                style={styles.image}
              >
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate("Place", {
                      placeData: place
                    })
                  }
                >
                  <Text style={styles.name}>{place.name}</Text>
                  <Text style={styles.weather}>
                    {place.weather.temperature + "\u2109"}
                  </Text>
                  <Text style={styles.summary}>{place.weather.summary}</Text>
                </TouchableOpacity>
              </ImageBackground>
              <View style={styles.legs}>
                <Text style={styles.arrow}>{"\u2193"}</Text>
                <Text style={styles.distance}>{trip.legs[index].distance}</Text>
                <Text style={styles.hours}>
                  {hoursToNextPlace(trip.legs[index].duration_in_hours) + "hrs"}
                </Text>
              </View>
            </View>
          );
        } else {
          return (
            <View key={Math.random()} style={{ marginBottom: 30 }}>
              <ImageBackground
                imageStyle={{ borderRadius: 20, opacity: 0.75 }}
                source={{ uri: weatherList[weather] }}
                key={place.name}
                style={styles.image}
              >
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate("Place", {
                      place: place
                    })
                  }
                >
                  <Text style={styles.name}>{place.name}</Text>
                  <Text style={styles.weather}>
                    {place.weather.temperature + "\u2109"}
                  </Text>
                  <Text style={styles.summary}>{place.weather.summary}</Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          );
        }
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  name: {
    color: "white",
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    fontSize: 35,
    fontFamily: "Optima",
    fontWeight: "bold",
    paddingTop: 100,
    paddingLeft: 20,
    opacity: 5
  },
  weather: {
    color: "white",
    fontFamily: "Optima",
    fontWeight: "bold",
    position: "absolute",
    right: 20,
    top: 20,
    fontSize: 35,
    //
    shadowColor: "#000",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: { width: -1, height: 1 }
  },
  summary: {
    color: "white",
    paddingLeft: 20,
    fontSize: 25,
    shadowColor: "#000",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: { width: -1, height: 1 }
  },
  image: {
    width: "98%",
    height: 200,
    marginTop: 10,
    marginRight: "auto",
    marginBottom: 0,
    marginLeft: "auto",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  legs: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around"
  },
  arrow: {
    fontSize: 30
  },
  distance: {
    fontSize: 30
  },
  hours: {
    fontSize: 30
  },
  view: {
    backgroundColor: "#F5FCFF"
  }
});


