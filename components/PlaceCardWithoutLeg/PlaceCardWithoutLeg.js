import React from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet
} from "react-native";
import { weatherIcons } from "../../assets/weatherIcons";

export default function PlacesCardWithLeg(props) {
  let { place, color, weather } = props;
  return (
    <View key={Math.random()} style={{ marginBottom: 30 }}>
      <ImageBackground
        imageStyle={{ borderRadius: 10, opacity: 0.7 }}
        key={place.name}
        style={styles.image}
        backgroundColor={color}
      >
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("Place", {
              placeData: place
            })
          }
          style={styles.cardContent}
        >
          <Text style={styles.name}>{place.name}</Text>
          <Image
            source={{ uri: weatherIcons[weather] }}
            style={styles.summary}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    color: "white",
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    fontSize: 37,
    fontFamily: "Optima",
    fontWeight: "bold",
    opacity: 5
  },
  cardContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10
  },
  summary: {
    height: 55,
    width: 55
  },
  image: {
    width: "99.5%",
    height: 100,
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
    fontSize: 40
  },
  distance: {
    fontSize: 40
  },
  hours: {
    fontSize: 40
  },
  view: {
    alignItems: "center"
  },
  legend: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 60,
    backgroundColor: "#278DC3"
  },
  legendText: {
    paddingRight: 25,
    fontSize: 20,
    paddingTop: 2,
    color: "white"
  },
  backGround: {
    height: "100%",
    width: "100%"
  }
});
