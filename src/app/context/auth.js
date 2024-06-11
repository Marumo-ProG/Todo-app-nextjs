"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const local_user = localStorage.getItem("todo_user");
		if (local_user) {
			setUser(JSON.parse(local_user));
		}
	}, []);

	useEffect(() => {
		if (user && user.token) {
			localStorage.setItem("todo_user", JSON.stringify(user));
			console.log("user set in the local storage", user);
		}
	}, [user]);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

// Custom hook to use the AuthContext
export const useAuth = () => {
	return useContext(AuthContext);
};
