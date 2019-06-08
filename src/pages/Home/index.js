import React from 'react';
import { Location, Permissions } from 'expo';
import { StyledMapView } from './styles';

export default class Home extends React.Component {
  state = {
    currentLocation: null
  };

  async componentDidMount() {
    const currentLocation = await this.getUserLocation();
    console.log(currentLocation);
    this.setState({
      currentLocation
    });
  }

  getUserLocation = async () => {
    const {
      coords: { latitude, longitude }
    } = await this.getLocationAsync();

    return {
      latitude,
      longitude,
      latitudeDelta: 0.0143,
      longitudeDelta: 0.0134
    };
  };

  getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') return null;

    return Location.getCurrentPositionAsync({});
  };

  render() {
    const { currentLocation } = this.state;
    return <StyledMapView showsUserLocation region={currentLocation} />;
  }
}
