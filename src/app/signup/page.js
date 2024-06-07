"use client";

import { useState } from "react";

import axios from "axios";

// MUI
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import CardMedia from "@mui/material/CardMedia";

import Link from "next/link";

const SignupPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleUserSignup = async () => {
		if (password !== confirmPassword) {
			alert("Passwords do not match");
			return;
		}
		try {
			const response = await axios.post("/api/signup", {
				email,
				password,
			});
			console.log(response.data);
		} catch (error) {
			console.error("Error signing up user:", error);
		}
	};
	return (
		<Stack height={"100vh"} justifyContent={"center"} alignItems={"center"}>
			<Stack sx={{ position: "absolute", top: 0, left: 0, padding: 3 }}>
				<Button variant={"text"}>
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
			</Stack>
			<Stack
				direction={"row"}
				sx={{
					width: { xs: "100%", sm: "60%" },
					height: "60%",
				}}
			>
				<Stack
					width={"100%"}
					height={"100%"}
					justifyContent={"center"}
					alignItems={"center"}
					position={"relative"}
				>
					<div
						style={{
							position: "absolute",
							height: "100%",
							width: "100%",
						}}
					>
						<CardMedia
							component="img"
							height="100%"
							image="https://source.unsplash.com/random"
							alt="Random Image"
						/>
					</div>
					<Typography
						variant="h3"
						sx={{
							textAlign: "center",
							zIndex: 1,
							fontFamily: "cursive",
						}}
					>
						Lenny's todo List Application
					</Typography>
				</Stack>
				<Stack
					width={"100%"}
					height={"100%"}
					alignItems={"center"}
					justifyContent={"center"}
					spacing={3}
				>
					<Typography variant={"h4"}>Signup</Typography>
					<Divider variant="middle" />

					<TextField
						label="Email"
						variant="outlined"
						color="primary"
						size="small"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<TextField
						label="Password"
						variant="outlined"
						color="primary"
						size="small"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<TextField
						label="Confirm Password"
						variant="outlined"
						color="primary"
						size="small"
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
					<Button
						variant="contained"
						color="primary"
						onClick={handleUserSignup}
					>
						Signup
					</Button>

					<Stack justifySelf={"flex-end"} spacing={1}>
						<Typography variant={"body2"}>
							Already have an account?
						</Typography>
						<Button variant={"text"} color={"primary"} size="small">
							<Link
								href="/login"
								style={{
									textDecoration: "none",
									color: "inherit",
								}}
							>
								Login
							</Link>
						</Button>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default SignupPage;
