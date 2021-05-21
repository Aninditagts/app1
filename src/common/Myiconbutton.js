import * as React from 'react';
import { IconButton, Colors } from 'react-native-paper';

const Myiconbutton = () => (
  <IconButton
    icon="camera"
    color={Colors.red500}
    size={20}
    onPress={() => console.log('Pressed')}
  />
);

export default Myiconbutton;