import { View, Text, TextInput, FlatList } from "react-native"
import styles from "./Home.Styles"
import { MagnifyingGlass } from 'phosphor-react-native'
import { useEffect, useState } from "react"
import { Movie } from "../../@types/Movie";
import { api } from "../../services/api";
import CardMovies from "../../components/CardMovies/CardMovies";

interface MovieResponse extends Movie {
	title: string;
	overview: string;
}

export const Home = () => {
	const [discoveryMovies, setDiscoveryMovies] = useState<MovieResponse[]>([])

	useEffect(() => {
		loadMoreData();
	}, [])

	//* Load more data
	const loadMoreData = async () => {
		const response = await api.get('/movie/popular')
		console.log('respose-log: ', response)
		if (response?.status === 200) {
			setDiscoveryMovies(response.data.results)
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>
				What movie do you want to watch?
			</Text>

		{/* SearchBar  */}
			<View style={styles.containerInput}>
				<TextInput
					style={styles.input} 
					placeholderTextColor={"#fff"}
					placeholder="Type the movie name" 
				/>
				<MagnifyingGlass color="#fff" size={25} weight="light" />
			</View>

			<View>
				<FlatList 
					data={discoveryMovies}
					numColumns={3}
					renderItem={(item) => <CardMovies data={item.item} />}
				/>
			</View>
		</View>
	)
}