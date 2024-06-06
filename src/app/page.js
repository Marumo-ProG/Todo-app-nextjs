// MUI
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import Image from "next/image";
import Link from "next/link";

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
				<Link href="/login" passHref>
					<Button variant="contained" color="primary">
						See your Todo's
					</Button>
				</Link>

				<Tooltip title="See what your peers are doing today">
					<Link href="/community" passHref>
						<Button variant="outlined" color="primary">
							Community's Todo's
						</Button>
					</Link>
				</Tooltip>
			</Stack>
		</Stack>
	);
};

export default LandingPage;
