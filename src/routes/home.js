import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../pages/Home';

const HomeRoutes = createStackNavigator(
  {
    Home: { screen: Home }
  },
  { headerMode: 'none' }
);

export default createAppContainer(HomeRoutes);
