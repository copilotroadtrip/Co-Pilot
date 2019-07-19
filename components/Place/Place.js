import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Linking
} from "react-native";
import { weatherList } from "../../assets/backgroundImages";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBed,
  faGasPump,
  faUtensils,
  faDirections
} from "@fortawesome/free-solid-svg-icons";

export default function Place(props) {
  const { navigation } = props;
  const place = navigation.getParam("placeData");
  let name = place.name.toLowerCase();
  return (
    <ImageBackground
      style={styles.backGround}
      source={{ uri: weatherList[place.weather.icon] }}
      imageStyle={{ opacity: 0.5 }}
    >
      <Text style={styles.city}>{place.name}</Text>
      <Text style={styles.placeInfo}>{place.weather.summary}</Text>
      <Text style={styles.weather}>{place.weather.temperature + "\u2109"}</Text>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Linking.openURL(`https://www.yelp.com/c/${name}/hotels`)
          }
        >
          <FontAwesomeIcon size={90} style={styles.icon} icon={faBed} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Linking.openURL(
              `https://www.yelp.com/search?find_desc=Gas+Stations&find_loc=${
                place.name
              }%2C+CO`
            )
          }
        >
          <FontAwesomeIcon size={90} style={styles.icon} icon={faGasPump} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Linking.openURL(
              `https://www.yelp.com/search?find_desc=Restaurants&find_loc=${
                place.name
              }%2C%20CO`
            )
          }
        >
          <FontAwesomeIcon size={90} style={styles.icon} icon={faUtensils} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL("https://www.google.com/maps")}
        >
          <FontAwesomeIcon size={90} style={styles.icon} icon={faDirections} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backGround: {
    width: "100%",
    height: "100%"
  },
  city: {
    fontSize: 70,
    textAlign: "center",
    fontFamily: "Optima",
    fontWeight: "bold",
    color: "white",
    shadowColor: "#000",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: { width: -1, height: 1 }
  },
  weather: {
    color: "white",
    fontFamily: "Optima",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 70,
    shadowColor: "#000",
    position: "absolute",
    top: 150,
    left: 100,
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: { width: -1, height: 1 }
  },
  placeInfo: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontFamily: "Optima",
    fontWeight: "bold",
    shadowColor: "#000",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: { width: -1, height: 1 }
  },
  button: {
    margin: 5,
    width: "45%",
    height: "40%",
    backgroundColor: "#296B6E",
    backgroundColor: "#084581",
    borderRadius: 10
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginTop: 250
  },
  icon: {
    marginTop: 40,
    marginRight: "auto",
    marginBottom: 0,
    marginLeft: "auto",
    color: "white",
    color: "#30C2EC"
  }
});
