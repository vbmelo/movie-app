import axios from "axios";

export const api = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	params: {
		api_key: "b22561522d5212f8bcabd706d9505918",
		language: "en-US",
		include_adult: false,
	}
});