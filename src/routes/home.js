import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../pages/Home';
import LocationInfo from '../pages/LocationInfo';

const HomeRoutes = createStackNavigator(
  {
    Home: { screen: Home },
    LocationInfo: { screen: LocationInfo }
  },
  { headerMode: 'none' }
);

export default createAppContainer(HomeRoutes);
