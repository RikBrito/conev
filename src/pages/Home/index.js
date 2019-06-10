/* eslint-disable react/no-array-index-key */
import React from 'react';
import { View } from 'react-native';
import { Location, Permissions, MapView } from 'expo';
import {
  Header, Input, Icon, Item, Fab
} from 'native-base';
import * as firebase from 'firebase';
import { StyledMapView } from './styles';

export default class Home extends React.Component {
  state = {
    currentLocation: null,
    locationsArray: []
  };

  async componentDidMount() {
    const currentLocation = await this.getUserLocation();
    this.getLocationsFromFirebase();

    this.setState({
      currentLocation
    });
  }

  getLocationsFromFirebase = async () => {
    const db = firebase.database();
    const snapshot = await db.ref('/location').once('value');
    const locationsArray = Object.values(snapshot.val());
    this.setState({ locationsArray });
  };

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
    const { currentLocation, locationsArray } = this.state;
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Header searchBar transparent>
          <Item style={{ elevation: 10 }}>
            <Icon name="search" style={{ color: '#FF6347' }} />
            <Input placeholder="Procure um Restaurante" />
            <Icon name="beer" style={{ color: '#FF6347' }} />
          </Item>
        </Header>
        <StyledMapView showsUserLocation region={currentLocation}>
          {locationsArray.length > 0
            && locationsArray.map((location, index) => (
              <MapView.Marker
                key={index}
                onPress={() => navigation.navigate('LocationInfo', { location })}
                coordinate={{ latitude: location.latitude, longitude: location.longitude }}
              >
                <Icon name="pin" style={{ color: '#FF6347', fontSize: 33 }} />
              </MapView.Marker>
            ))}
        </StyledMapView>
        <Fab transparent style={{ backgroundColor: '#fff' }} position="bottomRight">
          <Icon name="compass" style={{ fontSize: 30, color: '#FF6347' }} />
        </Fab>
      </View>
    );
  }
}
