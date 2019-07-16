import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import Header from "../Header/Header";


export default class Home extends Component {

    static navigationOptions = {
        title: 'Co-Pilot',
        headerStyle: {
          backgroundColor: '#296B6E',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };

  state = {
    origin: "",
    destination: "",
    error: "",
    trip: {
      places: [
        {
          name: "Denver",
          population: 300000,
          weather: { weather: "sunny", temp: 40, precip: 60 }
        },
        {
          name: "Vail",
          population: 30000,
          weather: { weather: "sunny", temp: 30, precip: 0 }
        }
      ],
      legs: [
        {
          distance: 200,
          time: 130
        }
      ]
    }
  };

  componentDidUpdate = () => {
    console.log(this.state.destination);
  };

  makeTrip = async () => {
    this.props.navigation.navigate('PlacesCard')
    try {
      const response = await fetch("api/v1/trips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ origin, destination })
      });
      const newTrip = await response.json();
      this.setState({ trip: newTrip });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

//   renderPlaces = () => {
//     const { places, legs } = this.state.trip;
//     return places.map((place, index) => {
//       if (legs[index]) {
//         return (
//           <View key={place.name + place.weather.weather}>
//             <PlacesCard place={place} leg={legs[index]} />
//             <Text>{`${legs[index].distance} miles`}</Text>
//             <Text>{`${legs[index].distance} miles`}</Text>
//           </View>
//         );
//       } else {
//         return (
//           <View key={place.name + place.weather.weather}>
//             <PlacesCard place={place} leg="trip Complete" />
//           </View>
//         );
//       }
//     });
//   };

  render() {
    return (
         <ImageBackground style={styles.backGround} source={require('../../assets/roadtrip1.jpeg')}>
            <TextInput
          style={styles.textInput}
          placeholder="Enter your start city"
          onChangeText={text => this.setState({ origin: text })}
            />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your destination"
          onChangeText={text => this.setState({ destination: text })}
        />
        <TouchableOpacity onPress={() => this.makeTrip()} style={styles.button}>
            <Text style={styles.buttonText}>Make Trip</Text>
        </TouchableOpacity>
        <Text>{this.state.error}</Text>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: 250,
    height: 60,
    borderColor: "black",
    color: "white",
    backgroundColor: "white",
    margin: 10,
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  backGround: {
      height: '100%',
      width: '100%',
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      resizeMode: 'stretch',
      position: 'absolute',
  },
  button: {
      width: 250,
      height: 60,
      backgroundColor: '#296B6E',
      marginTop: 10,
      borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    padding: 20,
  }
});


  