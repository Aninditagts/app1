import React from 'react'
import {View,StyleSheet} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Ecommerce from './ecommerce/App'
function  App()
{
	return <View style={styles.container}>
			 <StatusBar style="dark" />
				<Ecommerce/>
	</View>
}
export default App

const styles=StyleSheet.create({
	container:{padding:1,paddingTop:50,height:"100%"},
})