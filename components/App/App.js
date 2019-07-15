import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Header from '../Header/Header'


export default class App extends Component {
  
  state = {
    origin: '',
    destination: '',
    error: '',
    trip: {}
  }

  componentDidUpdate = () => {
    console.log(this.state.destination)
  }

  makeTrip = async () => {
    try {
      const response = await fetch('api/v1/trips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({origin, destination})
      })
      const newTrip = await response.json();
      this.setState({trip: newTrip})
    }
    catch(error){
      this.setState({error: error.message})
    }
  }



  render() {
  
    return (
      <View style={styles.container}>
        <Header/>
        <TextInput style={styles.textInput} placeholder='Enter your start city' onChangeText={text => this.setState({origin: text})}/>
        <TextInput style={styles.textInput} placeholder='Enter your destination'onChangeText={text => this.setState({destination: text})}/>
        <Button onPress={() => this.makeTrip()} title='Make Trip'/>
        <Text>{this.state.error}</Text>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  textInput: {
    width: 250,
    height: 60,
    borderColor: 'black',
    color: 'white',
    backgroundColor: 'gray',
    margin: 10,
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
