"use client";

// Auth
import { useAuth } from "../context/auth";

// react-hook-form
import { useForm, Controller } from "react-hook-form";

import { useState, useEffect } from "react";

import axios from "axios";

import { useRouter } from "next/navigation";

// MUI
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import CardMedia from "@mui/material/CardMedia";
import Snackbar from "@mui/material/Snackbar";

import Link from "next/link";

const SignupPage = () => {
	const router = useRouter();
	const { setUser } = useAuth();
	const { control, handleSubmit, getValues } = useForm();

	const [openAlertMessage, setOpenAlertMessage] = useState(false);
	const [message, setMessage] = useState("");

	useEffect(() => {
		if (message) {
			setOpenAlertMessage(true);
		}
	}, [message]);

	const handleUserSignup = async (data) => {
		if (password !== confirmPassword) {
			alert("Passwords do not match");
			return;
		}
		try {
			const result = await axios.post("/api/signup", {
				email: data.email,
				password: data.password,
			});
			setUser({
				user: data.email,
				token: result.data.token,
			});
			router.push("/community");
		} catch (error) {
			console.error("Error signing up user:", error);
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
						<Typography variant={"h4"}>Signup</Typography>
						<Divider variant="middle" />
						<form onSubmit={handleSubmit(handleUserSignup)}>
							<Stack spacing={2}>
								<Controller
									name="email"
									rules={{
										required: "Email is required",
										pattern: {
											value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
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
									rules={{
										required: "Passwrord is required",
										pattern: {
											value: /^[a-zA-Z0-9]{8,}$/,
											message: "Weak password",
										},
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

								<Controller
									name="confirm_password"
									rules={{
										required: "Passwrord is required",
									}}
									validate={(value) => {
										if (value !== getValues("password")) {
											return "Passwords do not match";
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
											label="Confirm Password"
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
									Signup
								</Button>
							</Stack>
						</form>

						<Stack justifySelf={"flex-end"} spacing={1}>
							<Typography variant={"body2"}>
								Already have an account?
							</Typography>
							<Button
								variant={"text"}
								color={"primary"}
								size="small"
							>
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
			<Snackbar
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
				open={openAlertMessage}
				onClose={handleClose}
				message={message}
			/>
		</>
	);
};

export default SignupPage;
