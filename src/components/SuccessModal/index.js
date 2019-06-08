import React, { Component } from 'react';
import { Button, Text } from 'native-base';
import PropTypes from 'prop-types';

import checkmarkIcon from '../../../assets/checkmark.png';
import {
  ModalContainer,
  CardContainer,
  ModalHeader,
  ModalContent,
  CheckmarkImage,
  Title,
  Message,
  ModalFooter
} from './styles';

export default class SucessModal extends Component {
  state = {};

  render() {
    const {
      title, message, onConfirm, onClose
    } = this.props;

    return (
      <ModalContainer onRequestClose={onClose}>
        <CardContainer>
          <ModalHeader>
            <CheckmarkImage source={checkmarkIcon} />
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

            <Button transparent small onPress={onClose}>
              <Text dark>Fechar</Text>
            </Button>
          </ModalFooter>
        </CardContainer>
      </ModalContainer>
    );
  }
}

SucessModal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func.isRequired
};

SucessModal.defaultProps = {
  onConfirm: null
};
