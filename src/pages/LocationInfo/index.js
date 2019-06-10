import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container, Button, Text, View, Card, CardItem, Body
} from 'native-base';
import StyledHeader from '../../components/StyledHeader/index';
import {
  Name, Address, Information, BookingButton, ButtonView, EventButton
} from './styles';

export default class LocationInfo extends Component {
  state = {};

  render() {
    const { navigation } = this.props;
    const local = navigation.getParam('location');
    return (
      <Container>
        <StyledHeader title="Informação" />
        <Image
          style={{ height: 180, resizeMode: 'contain' }}
          source={{
            uri: local.photo
          }}
        />

        <Card style={{ width: '90%', alignSelf: 'center', elevation: 10 }}>
          <CardItem header>
            <Information>
              <Name>{local.name}</Name>
            </Information>
          </CardItem>
          <CardItem>
            <Body>
              <Address>{local.address}</Address>
            </Body>
          </CardItem>
          <CardItem footer style={{ marginTop: 'auto' }}>
            <BookingButton
              onPress={() => {
                navigation.navigate('BookingMenu');
              }}
            >
              <Text>Reserva</Text>
            </BookingButton>
            <EventButton
              onPress={() => {
                navigation.navigate('NextEvents', { events: local.events });
              }}
            >
              <Text>Eventos proximos</Text>
            </EventButton>
          </CardItem>
        </Card>
      </Container>
    );
  }
}
