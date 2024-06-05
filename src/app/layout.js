export const metadata = {
	title: "Lenny's todo | home",
	description: "Developed by Lenny Thobejane",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
