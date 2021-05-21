import * as React from 'react';
import { View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';

const Mytouchableripple = () => (
  <TouchableRipple
    onPress={() => console.log('Pressed')}
    rippleColor="rgba(0, 0, 0, .32)"
  >
    {props.children}
  </TouchableRipple>
);

export default Mytouchableripple;