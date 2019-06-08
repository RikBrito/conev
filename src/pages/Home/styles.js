import styled from 'styled-components/native';
import { MapView } from 'expo';

export const StyledMapView = styled(MapView)`
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
`;
