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
			sx={{
				position: "relative",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
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
		</Stack>
	);
};

export default LandingPage;
