"use client";
import { useState, useEffect } from "react";

import { useForm, Controller } from "react-hook-form";

import axios from "axios";

// MUI
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";

// components
import Loader from "./Loader";

// Icons
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const CommentsModal = ({ open, handleClose, todoId }) => {
	const { control, handleSubmit, setValue } = useForm();
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [buttonLoad, setButtonLoad] = useState(false);

	useEffect(() => {
		fetchComments();
	}, []);

	const fetchComments = async () => {
		setIsLoading(true);
		try {
			const res = await axios.get(`/api/comments/?id=${todoId}`);
			setComments(res.data);
		} catch (err) {
			alert("Error fetching comments");
			console.log(err);
		}
		setIsLoading(false);
	};

	const handleAddComment = async (data) => {
		setButtonLoad(true);
		let newComment = {
			user: data.name,
			comment: data.comment,
			todo: todoId,
		};
		try {
			await axios.post("/api/comments", newComment);
			fetchComments();
			setValue("name", "");
			setValue("comment", "");
		} catch (err) {
			alert("Error adding a comment to the database");
			console.log(err);
		}
		setButtonLoad(false);
	};

	return (
		<Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
			<Stack padding={3}>
				<Stack direction="row" justifyContent="space-between">
					<Typography variant="h5">Comments</Typography>
					<IconButton onClick={handleClose}>
						<CloseRoundedIcon />
					</IconButton>
				</Stack>
				<Divider />
				<Stack spacing={2} marginTop={2}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							{comments.length === 0 && (
								<Typography variant="body1">
									No comments yet.
								</Typography>
							)}
							{comments.map((comment, index) => {
								return (
									<Stack key={index} spacing={1}>
										<Typography
											variant="body"
											sx={{
												fontStyle: "italic",
												fontWeight: 700,
											}}
										>
											{comment.user}
										</Typography>
										<Typography variant="body1">
											{comment.comment}
										</Typography>
									</Stack>
								);
							})}
						</>
					)}
				</Stack>
				<Stack marginTop={2} spacing={3}>
					<form onSubmit={handleSubmit(handleAddComment)}>
						<Stack spacing={2}>
							<Controller
								name="name"
								rules={{ required: "Name is required" }}
								control={control}
								defaultValue=""
								render={({ field, fieldState: { error } }) => (
									<TextField
										label="Name"
										fullWidth
										error={!!error}
										helperText={
											error ? error.message : null
										}
										{...field}
									/>
								)}
							/>
							<Controller
								name="comment"
								rules={{ required: "Comment is required" }}
								control={control}
								defaultValue=""
								render={({ field, fieldState: { error } }) => (
									<TextField
										label="Add a comment..."
										fullWidth
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
								type="submit"
								color="primary"
								fullWidth
								isLoading={buttonLoad}
							>
								Comment
							</Button>
						</Stack>
					</form>
				</Stack>
			</Stack>
		</Dialog>
	);
};

export default CommentsModal;
