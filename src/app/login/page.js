"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// react-hook-form
import { useForm, Controller } from "react-hook-form";

// context
import { useAuth } from "../context/auth";

// MUI
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Snackbar from "@mui/material/Snackbar";

import Link from "next/link";

const LoginPage = () => {
	const router = useRouter();
	const { setUser, user } = useAuth();
	const { control, handleSubmit } = useForm();
	const [openAlertMessage, setOpenAlertMessage] = useState(false);
	const [message, setMessage] = useState("");

	useEffect(() => {
		if (user) {
			router.push("/community");
		}
	}, []);

	useEffect(() => {
		if (message) {
			setOpenAlertMessage(true);
		}
	}, [message]);

	const handleLogin = async (data) => {
		try {
			const result = await axios.post("/api/login", {
				email: data.email,
				password: data.password,
			});
			setUser({
				user: data.email,
				token: result.data.token,
			});
			setMessage("Login successful");
			router.push("/community");
		} catch (error) {
			setMessage("Invalid email or password");
		}
	};

	const handleClose = () => {
		setOpenAlertMessage(false);

		setMessage("");
	};

	return (
		<>
			<Stack
				height={"100vh"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Stack
					sx={{ position: "absolute", top: 0, left: 0, padding: 3 }}
				>
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
						<Typography variant={"h4"}>Login</Typography>
						<Divider variant="middle" />
						<form onSubmit={handleSubmit(handleLogin)}>
							<Stack spacing={2}>
								<Controller
									name="email"
									rules={{
										required: "Email is required",
										pattern: {
											value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
											message: "Invalid email address",
										},
									}}
									control={control}
									defaultValue=""
									render={({
										field,
										fieldState: { error },
									}) => (
										<TextField
											label="Email"
											variant="outlined"
											color="primary"
											size="small"
											error={!!error}
											helperText={
												error ? error.message : null
											}
											{...field}
										/>
									)}
								/>
								<Controller
									name="password"
									rules={{ required: "Password is required" }}
									validate={(value) => {
										if (value.length < 8) {
											return "Password must be at least 6 characters";
										}
										return true;
									}}
									control={control}
									defaultValue=""
									render={({
										field,
										fieldState: { error },
									}) => (
										<TextField
											label="Password"
											variant="outlined"
											type="password"
											color="primary"
											size="small"
											error={!!error}
											helperText={
												error ? error.message : null
											}
											{...field}
										/>
									)}
								/>

								<Button
									variant="contained"
									color="primary"
									type="submit"
								>
									Login
								</Button>
							</Stack>
						</form>

						<Stack justifySelf={"flex-end"} spacing={1}>
							<Typography variant={"body2"}>
								Don't have an account?
							</Typography>
							<Button
								variant={"text"}
								color={"primary"}
								size="small"
							>
								<Link
									href={"/signup"}
									style={{
										textDecoration: "none",
										color: "inherit",
									}}
								>
									Signup
								</Link>
							</Button>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
			<Snackbar
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
				open={openAlertMessage}
				onClose={handleClose}
				message={message}
			/>
		</>
	);
};

export default LoginPage;
