import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import Header from "../Header/Header";
import PlacesCard from '../PlacesCard/PlacesCard';


export default class Home extends Component {

  state = {
    origin: "",
    destination: "",
    error: "",
    trip: {
        places: [
            {
                name: "Denver, CO, USA",
                population: 716492,
                weather: {
                    time: 1563299867,
                    summary: "tornado",
                    icon: "partly-cloudy-day",
                    temperature: 86.57,
                    precipProbability: 0,
                    precipIntensity: 0,
                    windSpeed: 4.89,
                    windGust: 9.95,
                    windBearing: 35
                }
            },
            {
                name: "Ogden, UT, USA",
                population: 87325,
                weather: {
                    time: 1563325200,
                    summary: "Partly Cloudy",
                    icon: "partly-cloudy-day",
                    temperature: 94.63,
                    precipProbability: 0,
                    precipIntensity: 0,
                    windSpeed: 5.05,
                    windGust: 9.93,
                    windBearing: 250
                }
            }
        ],
        legs: [
            {
                distance: "514 mi",
                duration_in_hours: 7.820277777777778
            }
        ]
    }
  };


  makeTrip = async () => {
    this.props.navigation.navigate('PlacesCard', {
        trip: this.state.trip
    })
    try {
      const response = await fetch("/api/v1/trips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ origin: this.state.origin, destination: this.state.destination })
      });
      const newTrip = await response.json();
      this.setState({ trip: newTrip.data });
    } catch (error) {    
      this.setState({ error: error.message });
    }
  };

  renderPlaces = () => {
    const { places, legs } = this.state.trip;
    return places.map((place, index) => {
      if (legs[index]) {
        return (
          <View key={place.name}>
            <PlacesCard place={place} leg={legs[index]} />
          </View>
        );
      } else {
        return (
          <View key={place.name}>
            <PlacesCard place={place} leg="trip Complete" />
          </View>
        );
      }
    });
  };


static navigationOptions = {
    title: 'Co-Pilot',
    headerStyle: {
      backgroundColor: '#296B6E',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'Marker Felt',
      fontSize: 20,
      
    },
  };


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
        </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  textInput: {
    width: 250,
    height: 60,
    borderColor: "black",
    color: "black",
    backgroundColor: "white",
    margin: 10,
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
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
    padding: 10,
    fontFamily: 'Marker Felt',
    fontSize: 25,
  }
});


  