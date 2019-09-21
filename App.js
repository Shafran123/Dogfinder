import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen'

const navigator = createStackNavigator(
  {
    Home: SearchScreen,
    ResultsShow : ResultsShowScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
