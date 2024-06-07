import "./global.css";

// context
import { AuthProvider } from "./context/auth";

export const metadata = {
	title: "Lenny's todo | home",
	description: "Developed by Lenny Thobejane",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<AuthProvider>{children}</AuthProvider>
			</body>
		</html>
	);
}
