import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../pages/Home';
import LocationInfo from '../pages/LocationInfo';
import NextEvents from '../pages/NextEvents';

const HomeRoutes = createStackNavigator(
  {
    Home: { screen: Home },
    LocationInfo: { screen: LocationInfo },
    NextEvents: { screen: NextEvents }
  },
  { headerMode: 'none' }
);

export default createAppContainer(HomeRoutes);
