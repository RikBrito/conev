import styled from 'styled-components/native';
import { Card } from 'native-base';

export const Modal = styled.Modal.attrs({
  transparent: true,
  visible: true,
  animationType: 'fade'
})``;

export const BackgroundOpacity = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
`;

export const Container = styled(Card)`
  top: 40%;
  width: 160px;
  height: 60px;
  position: absolute;
  align-self: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
