import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
  List, ListItem, Container, Left, Thumbnail, Body
} from 'native-base';
import StyledHeader from '../../components/StyledHeader';
import SucessModal from '../../components/SuccessModal';
import Loader from '../../components/Loader';

export default class NextEvents extends Component {
  state = {
    events: [],
    showModal: false,
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    const { navigation } = this.props;
    const events = navigation.getParam('events');
    const eventsArray = Object.values(events);
    this.setState({ events: eventsArray, loading: false });
  }

  render() {
    const { events, showModal, loading } = this.state;

    return (
      <Container>
        <StyledHeader title="Eventos" />
        <List>
          {events.map(event => (
            <ListItem
              thumbnail
              onPress={() => {
                this.setState({ showModal: true });
              }}
            >
              <Left>
                <Thumbnail square source={{ uri: event.picture }} />
              </Left>
              <Body>
                <Text>{event.name}</Text>
                <Text>{event.description}</Text>
                <Text note>{event.date}</Text>
              </Body>
            </ListItem>
          ))}
        </List>

        {showModal === true && (
          <SucessModal title="Parabens" message="Ingresso comprado com sucesso" />
        )}

        {loading === true && <Loader />}
      </Container>
    );
  }
}
