import styled from 'styled-components/native';
import { Text } from 'native-base';

export const ModalContainer = styled.Modal.attrs({
  transparent: true,
  visible: true,
  animationType: 'slide'
})``;

export const CardContainer = styled.View`
  width: 85%;
  elevation: 15;
  margin-top: 25%;
  align-self: center;
  background: #fff;
`;

export const ModalHeader = styled.View`
  background: #27ae60;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
`;
export const ModalContent = styled.View`
  padding-vertical: 10px;
`;

export const Title = styled(Text)`
  text-align: center;
  font-weight: bold;
  justify-content: center;
  font-size: 20px;
`;

export const Message = styled(Text)`
  text-align: center;
  justify-content: center;
`;

export const CheckmarkImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export const ModalFooter = styled.View`
  padding: 7px;
  flex-direction: row;
  justify-content: center;
`;
