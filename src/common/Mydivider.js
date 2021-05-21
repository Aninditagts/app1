import * as React from 'react';
import { View } from 'react-native';
import { Divider, Text } from 'react-native-paper';

const Mydivider = (props) => (
  <View>
    {props.children}
    <Divider />
  </View>
);

export default Mydivider;