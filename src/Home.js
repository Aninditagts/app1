import * as React from 'react';
import {View,Text,StatusBar,ScrollView} from 'react-native'
import Mycard from './common/Mycard'
export default function Main() {
  return (
    <View>
    	<ScrollView>
    		<Mycard />
    		<Mycard />
    		<Mycard />
    		<Mycard />
    		<Mycard />
    		<Text>home</Text>
    	</ScrollView>
    </View>
  );
}