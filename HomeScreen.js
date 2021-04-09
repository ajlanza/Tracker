import React, {useEffect, useState } from 'react';
import Tracker from './Tracker';
import { ActivityIndicator, View, Text, Image, Button, TextInput } from 'react-native';
// import Data from './Data';
import ApiService from './api-service';

const HomeScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    ApiService.getTrackers()
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

    return (
      <View style={{padding: 10}}> 
      <Button
        title="Set up a new tracker"
        onPress={() =>
          navigation.navigate('NewTracker', { name: 'NewTracker' })
        }
      />
      {isLoading ? <ActivityIndicator size='large' /> : (
        data.map(tracker => {
          return <Tracker 
          key={tracker.name}
          name={tracker.name} 
          count={tracker.counter}
          image={tracker.image ? tracker.image : ''}/>
        })
      )}

      </View>
    );
  };

  export default HomeScreen;