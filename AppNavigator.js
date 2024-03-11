// AppNavigator.js
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import WorkScreen from '../screens/WorkScreen';
import AdventureScreen from '../screens/AdventureScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Work: WorkScreen,
    Adventure: AdventureScreen,
    // ... add other screens here
  },
  {
    initialRouteName: 'Home', // Set the initial screen
  }
);

export default AppNavigator;
