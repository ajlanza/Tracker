import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const NewTracker = () => {
  return (
    <View style={styles.container}>      
      <Text style={styles.trackerLabel}>Name your new Tracker</Text>
      <TextInput 
        style={styles.trackerInput}
        placeholder="Tracker Name"
      />
    </View>
  );
}


const styles = StyleSheet.create({
    trackerLabel: {
      textAlign: 'center',
      margin: 0,
      fontSize: 40
    },
    container: {
      border: 2,
      color: 'black',
    }
  });

export default NewTracker;