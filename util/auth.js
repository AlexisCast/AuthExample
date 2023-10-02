import { REACT_APP_API_KEY } from "@env";

import axios from "axios";
const API_KEY = REACT_APP_API_KEY;

export async function createUser(email, password) {
	const response = await axios.post(
		"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
			API_KEY,
		{
			email: email,
			password: password,
			returnSecureToken: true,
		}
	);
}
