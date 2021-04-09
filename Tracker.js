import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableHighlight } from 'react-native';

const Tracker = (props) =>{
    const [count, setCount] = useState(props.count);

    return (
      <View>  
        {props.image     
          ? <Image
              source={require(`./assets/${props.image}`)}
              style={styles.image}
            />
          : <Text style={styles.trackerName}>{props.name}</Text>
        }
        <View style={styles.tracker}>
        
        {/* Plus Button */}
        <TouchableHighlight 
          onPress={() => { setCount(count + 1); }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableHighlight>

        {/* Current Count */}
        <Text style={styles.count}>{count < 10 ? `  ${count}` : count}</Text>

        {/* Minus Button */}
        <TouchableHighlight 
          onPress={() => { setCount(count - 1); }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableHighlight>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    image: {
      width: 60, 
      height: 60, 
      display: "flex", 
      alignSelf: "center",
    },
    button: {
      width: 60,
      height: 60,
      display: "flex", 
      alignSelf: "center",
      backgroundColor: '#2196F3',
      opacity: 1
    },
    buttonText: {
      textAlign: 'center',
      margin: 0,
      color: 'white',
      fontSize: 40
    },
    trackerName: {
      textAlign: 'center',
      margin: 0,
      fontSize: 40
    },
    count: {
      alignSelf: "center",
      padding: 20,
      fontSize: 40,
    },
    tracker: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    }
  });

export default Tracker;