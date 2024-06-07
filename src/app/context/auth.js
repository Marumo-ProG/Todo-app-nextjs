"use client";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({
		user: null,
		isAuthenticated: false,
	});

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
