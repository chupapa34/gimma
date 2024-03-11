// App.js
import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import MainMenu from './MyComponent'; // Ensure the file path is correct

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <MainMenu />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282c34',
  },
});

export default App;
