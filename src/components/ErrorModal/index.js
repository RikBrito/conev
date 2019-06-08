import React, { Component } from 'react';
import { Button, Text } from 'native-base';
import PropTypes from 'prop-types';
import errorIcon from '../../../assets/error.png';
import {
  ModalContainer,
  CardContainer,
  ModalHeader,
  ModalContent,
  ErrorImage,
  Title,
  Message,
  ModalFooter
} from './styles';

export default class ErrorModal extends Component {
  state = {};

  render() {
    const {
      title, message, onConfirm, onClose
    } = this.props;

    return (
      <ModalContainer>
        <CardContainer>
          <ModalHeader>
            <ErrorImage source={errorIcon} />
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

ErrorModal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func.isRequired
};

ErrorModal.defaultProps = {
  onConfirm: null
};
