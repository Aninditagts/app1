import * as React from 'react';
import { Portal, Text } from 'react-native-paper';

const Myportal = () => (
  <Portal>
    <Text>This is rendered at a different place</Text>
  </Portal>
);

export default Myportal;