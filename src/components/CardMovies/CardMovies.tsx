import { FC } from "react";
import { Text, Image, Pressable, TouchableOpacity } from "react-native";
import styles from "./CardMovies.Styles";
import { Movie } from "../../@types/Movie";


export interface CardMoviesProps {
	data: Movie;
	onPress?: () => void;
}

const CardMovies:FC<CardMoviesProps> = (props) => {
	const { data, onPress, ...rest } = props;

	return (
		<Pressable 
			style={styles.cardContainer}
			onPress={onPress}
			{...rest}
		>
			<TouchableOpacity>
				<Image 
					style={styles.cardImage} 
					source={{ 
						uri: `https://image.tmdb.org/t/p/w500${data.poster_path}` 
					}} 
				/>
			</TouchableOpacity>
		</Pressable>
	)
}

export default CardMovies;