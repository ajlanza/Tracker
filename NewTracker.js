import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, Switch, TouchableHighlight} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ApiService from './api-service';

const NewTracker = () => {
  const [counter, setCounter] = useState(true);
  const [timer, setTimer] = useState(false);
  const [occuredAt, setOccuredAt] = useState(false);
  const [trackerName, onChangeTrackerName] = useState('Tracker name');
  
  return (
    <View style={styles.container}>
      <View style={styles.selector}>      
        <Text style={styles.trackerLabel}>Tracker name</Text>
        <TextInput 
          style={styles.trackerInput}
          value={trackerName}
          onChangeText={onChangeTrackerName}
        />
      </View>
      <View style={styles.selector}>
        <Text style={styles.trackerLabel}>Just a counter</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={counter ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setCounter}
          value={counter}
        />
      </View>
      <View style={styles.selector}>
        <Text style={styles.trackerLabel}>Track how long it takes?</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={timer ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setTimer}
          value={timer}
        />
      </View>
      <View style={styles.selector}>
        <Text style={styles.trackerLabel}>Track when it occurs?</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={occuredAt ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setOccuredAt}
          value={occuredAt}
        />
      </View>
      <TouchableHighlight
        style={styles.button}
        onPress={ () => ApiService.saveNewTracker(trackerName, counter, timer, occuredAt) }
        accessibilityLabel="Save new tracker."
      >
      <Text style={styles.buttonText}>Save Tracker</Text>
      </TouchableHighlight>
    </View>
  );
}


const styles = StyleSheet.create({
    trackerLabel: {
      fontSize: 40,
    },
    container: {
      border: 2,
      color: 'black',
    },
    selector: {
      display: 'flex',
      marginLeft: 10, 
      marginRight: 10,
      fontSize: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginRight: 20,
    },
    button: {
      height: 60,
      display: "flex", 
      margin: 10,
      justifyContent: 'center',
      backgroundColor: '#2196F3',
      opacity: 1,
      borderRadius: 30,      
    },
    buttonText: {
      paddingRight: 10,
      paddingLeft: 10,
      color: 'white',
      fontSize: 40,
      alignSelf: 'center',
      justifyContent: 'center',
    },

  });

export default NewTracker;