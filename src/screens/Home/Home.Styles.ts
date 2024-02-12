import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1E1E1E",
		padding: 25,
	},

	headerText: {
		fontSize: 18,
		textAlign: "left",
		marginTop: 30,
		lineHeight: 45,
		color: "#fff",
	},

	//* SearchBar styles 
	containerInput: {
		flexDirection: "row",
		backgroundColor: "#676860",
		height: 42,
		borderRadius: 16,
		padding: 10,
		marginTop: 16,
		marginBottom: 16,
		alignItems: "center",
		justifyContent: "space-between",
	},
	input: {
		color: "white",
	}

});

export default styles;