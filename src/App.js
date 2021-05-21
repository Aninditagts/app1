import * as React from 'react';
import {View,Text,StatusBar,ScrollView} from 'react-native'
import Header from './common/Header'
import Footer from './common/Footer'
import Home from './Home'
export default function Main() {
  return (
    <View>
    	<StatusBar/>
    	<Header />
    	<Home/>
    	<Footer/>
    </View>
  );
}