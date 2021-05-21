import * as React from 'react';
import { Button } from 'react-native-paper';

const Mybutton = (props) => (
  <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    {props.children}
  </Button>
);

export default Mybutton;