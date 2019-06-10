import React, { Component } from 'react';
import {
  Container, Form, Picker, Card, CardItem, Button, Text
} from 'native-base';
import StyledHeader from '../../components/StyledHeader';
import SucessModal from '../../components/SuccessModal';

export default class BookingMenu extends Component {
  state = {
    showModal: false,
    selected: null
  };

  onValueChange(value: string) {
    this.state = {
      selected: 'key1'
    };
    this.setState({
      selected: value
    });
  }

  render() {
    const { showModal, selected } = this.state;
    return (
      <Container>
        <StyledHeader title="Reserva" />
        <Card style={{ height: '50%' }}>
          <Form>
            <Picker
              note
              mode="dropdown"
              style={{ width: '100%' }}
              selectedValue={selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Mesa 1" value="key0" />
              <Picker.Item label="Mesa 2" value="key1" />
              <Picker.Item label="Mesa 3" value="key2" />
              <Picker.Item label="Mesa 4" value="key3" />
            </Picker>
          </Form>

          <Form>
            <Picker
              note
              mode="dropdown"
              style={{ width: '100%' }}
              selectedValue={selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Cartão de credito" value="key0" />
              <Picker.Item label="Cartão de debito" value="key1" />
              <Picker.Item label="Dinheiro" value="key2" />
            </Picker>
          </Form>

          <Button
            style={{ marginTop: 'auto', color: '#ff6347;' }}
            onPress={() => {
              this.setState({ showModal: true });
            }}
          >
            <Text>Confirmar entrada</Text>
          </Button>
        </Card>
        {showModal === true && (
          <SucessModal
            title="Parabens"
            message="Reserva efetuada com sucesso"
            onClose={() => {
              this.setState({ showModal: false });
            }}
          />
        )}
      </Container>
    );
  }
}
