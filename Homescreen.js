// Updated HomeScreen.js
import React from 'react';
import { View } from 'react-native';
import Button from '../components/Button';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="Work" onPress={() => navigation.navigate('Work')} />
      <Button title="Adventure" onPress={() => navigation.navigate('Adventure')} />
      {/* Add buttons for other features */}
    </View>
  );
};

export default HomeScreen;
