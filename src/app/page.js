// MUI
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Image from "next/image";

// images
import BackgroundImage from "../../public/background1.jpg";

const LandingPage = () => {
	return (
		<Stack
			spacing={3}
			sx={{
				position: "relative",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				boxSizing: "border-box",
			}}
		>
			<Image
				src={BackgroundImage}
				alt="Background Image"
				layout="fill"
				objectFit="cover"
				quality={100}
				style={{ position: "absolute", zIndex: -1, opacity: 0.3 }}
			/>
			<Typography variant={"h3"} sx={{ textAlign: "center" }}>
				Welcome to Lenny's Todo Application
			</Typography>
			<Stack spacing={2} direction="row" justifyContent="center">
				<Button variant="contained" color="primary">
					Show my Todo's
				</Button>
				<Button variant="outlined" color="primary">
					See Community Todo's
				</Button>
			</Stack>
		</Stack>
	);
};

export default LandingPage;
