import React from 'react'
import {View,Text,Button,StyleSheet,TextInput} from 'react-native'

function  App()
{
	let [a,seta]=React.useState([])
	let [ob1,setob1]=React.useState({name:"",email:""})
	let [ob2,setob2]=React.useState({id:0,name:"",email:""})

	const add=e=>{
		seta([...a,{id:a.length+1,...ob1}])
		alert("added")
		setob1({name:"",email:""})
	}
	const del=id=>{
		seta(a.filter(x=>x.id!==id))
		alert("delete")
	}
	const edit=x=>setob2(x)

	const update=e=>{
		seta(a.map(x=>x.id===ob2.id?ob2:x))
		setob2({id:0,name:"",email:""})
		alert("update")
	}

	return <View style={styles.container}>
		<TextInput onChangeText={e=>setob1({...ob1,name:e})} style={styles.input} placeholder="name" />
		<TextInput onChangeText={e=>setob1({...ob1,email:e})} style={styles.input} placeholder="email" />
		<Button onPress={add} color="slateblue" title="add new student"/>

		{
			ob2.id>0
			&&
			<View>
				<TextInput value={ob2.name} onChangeText={e=>setob2({...ob2,name:e})} style={styles.input} placeholder="name" />
				<TextInput value={ob2.email} onChangeText={e=>setob2({...ob2,email:e})} style={styles.input} placeholder="email" />
				<Button color="#333" onPress={update} title="update"/>
			</View>
		}
		<View>
			{a.map(item=>
				<View style={styles.row} key={item.id}>
					<Text>{item.id}</Text>
					<Text>{item.name}</Text>
					<Text>{item.email}</Text>
					<Button onPress={e=>edit(item)} color="orange" title="edit"  />
					<Button onPress={e=>del(item.id)} color="tomato" title="delete"  />
				</View>
			)}
		</View>
	</View>
}
export default App

const styles=StyleSheet.create({
	container:{flex:1,padding:10,paddingTop:50,height:"100%"},
	row:{flexDirection:"row",justifyContent:"space-between",alignSelf:"stretch",margin:10},
	input:{padding:10,borderColor:"black",backgroundColor:"#f1f1f1",alignSelf:"stretch",marginTop:10,marginBottom:10}
})