import React from 'react'
import {View,Text,Button,StyleSheet,TextInput} from 'react-native'

function  App()
{
	let [a,seta]=React.useState([])
	let [x,setx]=React.useState("")

	const add=e=>{
		seta([...a,{id:a.length+1,title:x}])
	}

	return <View style={styles.container}>
		<TextInput onChangeText={setx} style={styles.input} placeholder="new topic" />
		<Button onPress={add} title="add new "/>
		<View>
			{a.map(item=>
				<View style={styles.row} key={item.id}>
					<Text>{item.id}</Text>
					<Text>{item.title}</Text>
					<Button onPress={e=>seta(a.filter(item2=>item2.id!==item.id))} color="tomato" title="remove"  />
				</View>
			)}
		</View>
	</View>
}
export default App

const styles=StyleSheet.create({
	container:{flex:1,padding:50,height:"100%"},
	row:{flexDirection:"row",justifyContent:"space-between",alignSelf:"stretch",margin:10},
	input:{padding:10,borderColor:"black",backgroundColor:"#f1f1f1",alignSelf:"stretch",marginTop:10,marginBottom:10}
})