"use client";

// MUI
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import Image from "next/image";

// images
import Background from "../../../public/background1.jpg";

const LoginPage = () => {
	return (
		<Stack height={"100vh"} justifyContent={"center"} alignItems={"center"}>
			<Stack
				direction={"row"}
				sx={{
					width: { xs: "100%", sm: "60%" },
					height: "60%",
					backgroundColor: "red",
				}}
			>
				<Stack width={"100%"} height={"100%"}>
					<Image
						src={Background}
						objectFit={"cover"}
						quality={100}
						style={{ height: "100%", width: "100%" }}
					/>
				</Stack>
				<Stack
					width={"100%"}
					height={"100%"}
					sx={{ backgroundColor: "green" }}
				></Stack>
			</Stack>
		</Stack>
	);
};

export default LoginPage;
