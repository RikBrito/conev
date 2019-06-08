import React, { Component } from 'react';
import { Button, Text } from 'native-base';
import PropTypes from 'prop-types';
import alertIcon from '../../../assets/alert.png';
import {
  ModalContainer,
  CardContainer,
  ModalHeader,
  ModalContent,
  AlertImage,
  Title,
  Message,
  ModalFooter
} from './styles';

export default class AlertModal extends Component {
  state = {};

  render() {
    const {
      title, message, onConfirm, onClose
    } = this.props;

    return (
      <ModalContainer>
        <CardContainer>
          <ModalHeader>
            <AlertImage source={alertIcon} />
          </ModalHeader>
          <ModalContent>
            <Title>{title}</Title>
            <Message>{message}</Message>
          </ModalContent>
          <ModalFooter>
            {onConfirm && (
              <Button dark small onPress={onConfirm}>
                <Text>Confirmar</Text>
              </Button>
            )}

            <Button transparent dark small onPress={onClose}>
              <Text>Fechar</Text>
            </Button>
          </ModalFooter>
        </CardContainer>
      </ModalContainer>
    );
  }
}

AlertModal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func.isRequired
};

AlertModal.defaultProps = {
  onConfirm: null
};
