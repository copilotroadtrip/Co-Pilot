import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Header () {
    return (
        <View style={styles.header}>
            <Text style={styles.text} adjustsFontSizeToFit>Co-Pilot</Text>
        </View>
    )

    
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#59C8EF',
      width: 420,
      height: 100,
      paddingTop: 50,
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    }
})