import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeRoute from './home';

const Routes = createStackNavigator(
  {
    Home: { screen: HomeRoute }
  },
  { headerMode: 'none' }
);

export default createAppContainer(Routes);
