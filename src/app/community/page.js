// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Link from "next/link";

const CommuninityPage = () => {
	return (
		<Stack height={"100vh"} spacing={3}>
			<Stack direction="row" justifyContent={"center"} padding={3}>
				<Typography variant={"h4"} sx={{ fontFamily: "cursive" }}>
					Lenny's Todo list
				</Typography>
				<Button
					variant={"text"}
					sx={{ position: "absolute", left: 24 }}
				>
					<Link
						href={"/"}
						style={{
							textDecoration: "none",
							color: "inherit",
						}}
					>
						Back
					</Link>
				</Button>

				<Button
					variant={"outlined"}
					sx={{ position: "absolute", right: 24 }}
				>
					<Link
						href={"/login"}
						style={{
							textDecoration: "none",
							color: "inherit",
						}}
					>
						login
					</Link>
				</Button>
			</Stack>
		</Stack>
	);
};

export default CommuninityPage;
