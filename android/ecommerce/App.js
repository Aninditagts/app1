import React from 'react'
import data from './data'
import { View, Text, Button, StyleSheet, TextInput, Image, ScrollView } from 'react-native'
import { Asset, AppLoading } from 'expo';
function App() {
	let [menu, setmenu] = React.useState(data.header)
	let [a, seta] = React.useState(data.products)
	let [b, setb] = React.useState(data.tags)
	return <View>
		<View style={styles.header}>
			{menu.map(x => <Text key={x} style={styles.link}>{x}</Text>)}
		</View>
		<View style={styles.filters}>
			{b.map(x => <Button key={x.t} style={styles.link} title={x.t + " - " + x.c} />)}
		</View>
		<View style={styles.filters}>
			<TextInput style={styles.search} placeholder="search" />
		</View>
		<ScrollView >
			<View style={styles.products}>
				{a.map(x => <Item x={x} key={x.id} />)}
			</View>
		</ScrollView>


	</View>
}
export default App

const styles = StyleSheet.create({
	header: { flexDirection: 'row', padding: 10, backgroundColor: "#333" },
	link: { padding: 4, color: "white" },
	row: { flexDirection: "row", justifyContent: "space-between", alignSelf: "stretch", margin: 10 },
	filters: { flexDirection: 'row' },
	input: { padding: 10, borderColor: "black", backgroundColor: "#f1f1f1", alignSelf: "stretch", marginTop: 10, marginBottom: 10 },
	search: { width: 380, padding: 5, borderBottomWidth: 2, borderBottomColor: "black", backgroundColor: "#f1f1f1", alignSelf: "stretch", margin: 10 },
	products: {width:510, flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'flex-end', backgroundColor: 'orange', height:1,overflow:"scroll" ,alignSelf:"center"},
	item: { width: "10%", backgroundColor: "white", padding: 5, margin: 5},
	img: { width: 100, height: 100, resizeMode: 'cover', }
})


function Item(props) {
	let data = props.x

	return <View style={styles.item}>
		<Image style={styles.img} source={require('../../assets/a (1).jpg')} />
		<Text>{data.title}</Text>
		<Text>{data.description}</Text>
		<Text>{data.old}</Text>
		<Text>{data.new}</Text>
		<Text>{data.rating}</Text>
		<Text>{data.discount}</Text>
		<Text>{data.tags}</Text>
		<Button title="add to cart" />
	</View>
}