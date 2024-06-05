// MUI

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const LandingPage = () => {
	return (
		<Stack height={"100vh"} justifyContent={"center"} alignItems={"center"}>
			<Typography variant={"h3"} sx={{ textAlign: "center" }}>
				Welcome to Lenny's Todo Application
			</Typography>
		</Stack>
	);
};

export default LandingPage;
