import React from 'react';
import { Spinner, Text } from 'native-base';
import { Modal, Container, BackgroundOpacity } from './styles';

export default function Loader() {
  return (
    <Modal>
      <BackgroundOpacity>
        <Container>
          <Spinner color="#8a3501" />
          <Text style={{ color: '#aaa' }}>Carregando...</Text>
        </Container>
      </BackgroundOpacity>
    </Modal>
  );
}
