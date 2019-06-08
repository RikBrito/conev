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
            uri:
              'https://st2.depositphotos.com/8301258/11963/v/950/depositphotos_119634124-stock-illustration-restaurant-logo-cutlery-design.jpg'
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
            <BookingButton>
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
