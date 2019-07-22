import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Linking
} from "react-native";
import { weatherList } from "../../assets/backgroundImages";
import { Icon } from "react-native-elements";

export default class Place extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Place",
    headerStyle: {
      backgroundColor: "#278DC3"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      fontFamily: "Marker Felt",
      fontSize: 20
    }
  };

  render() {
    const { navigation } = this.props;
    const place = navigation.getParam("placeData");
    let name = place.name.toLowerCase();
    return (
      <ImageBackground
        style={styles.backGround}
        source={{ uri: weatherList[place.weather.icon] }}
        imageStyle={{ opacity: 0.5 }}
      >
        <View style={styles.info}>
        <Text style={styles.city}>{place.name}</Text>
        <Text style={styles.placeInfo}>{place.weather.summary}</Text>
        <Text style={styles.weather}>
          {Math.round(place.weather.temperature) + "\u2109"}
        </Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Linking.openURL(`https://www.google.com/maps/search/Hotels+${name}`)
            }
          >
            <Icon
              name="hotel"
              size={90}
              marginTop={40}
              marginRight="auto"
              marginBottom={0}
              marginLeft="auto"
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Linking.openURL(
                `https://www.google.com/maps/search/Gas+Stations+${name}`
              )
            }
          >
            <Icon
              name="local-gas-station"
              size={90}
              marginTop={40}
              marginRight="auto"
              marginBottom={0}
              marginLeft="auto"
              color="#D3342C"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Linking.openURL(
                `https://www.yelp.com/search?find_desc=Restaurants&find_loc=${
                  place.name
                }`
              )
            }
          >
            <Icon
              name="restaurant"
              size={90}
              marginTop={40}
              marginRight="auto"
              marginBottom={0}
              marginLeft="auto"
              color='#767574'  
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL("https://www.google.com/maps")}
          >
            <Icon
              name="directions"
              size={90}
              marginTop={40}
              marginRight="auto"
              marginBottom={0}
              marginLeft="auto"
              color="yellow"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  info: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backGround: {
    width: "100%",
    height: "100%"
  },
  city: {
    fontSize: 70,
    paddingTop: 30,
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
    height: "45%",
    backgroundColor: "#296B6E",
    backgroundColor: "#084581",
    borderRadius: 10
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
   
  }
});
