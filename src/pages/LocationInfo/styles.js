import styled from 'styled-components';
import { Button } from 'native-base';

export const Name = styled.Text`
  font-size: 18;
  font-weight: bold;
  padding: 10px;
  justify-content: center;
`;
export const Address = styled.Text`
  font-size: 15;
  padding: 30px 20px;
`;

export const Information = styled.View`
  flex-direction: row;
`;

export const BookingButton = styled(Button)`
  background-color: #ff6347;
  margin-right: 10px;
`;

export const EventButton = styled(Button)`
  background-color: #ff6347;
`;
