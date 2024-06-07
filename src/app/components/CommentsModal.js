"use client";
import { useState, useEffect } from "react";

import axios from "axios";

// MUI
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";

// Icons
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const CommentsModal = ({ open, handleClose, todoId }) => {
	const [comment, setComment] = useState("");
	const [name, setName] = useState("");
	const [comments, setComments] = useState([]);

	useEffect(() => {
		fetchComments();
	}, []);

	const fetchComments = async () => {
		try {
			const res = await axios.get(`/api/comments/?id=${todoId}`);
			setComments(res.data);
		} catch (err) {
			alert("Error fetching comments");
			console.log(err);
		}
	};

	const handleAddComment = async () => {
		let newComment = { user: name, comment, todo: todoId };
		try {
			const res = await axios.post("/api/comments", newComment);
			clearFields();
			fetchComments();
		} catch (err) {
			alert("Error adding a comment to the database");
			console.log(err);
		}
	};

	const clearFields = () => {
		setName("");
		setComment("");
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
				</Stack>
				<Stack marginTop={2} spacing={3}>
					<TextField
						label="Name"
						fullWidth
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<TextField
						label="Add a comment"
						fullWidth
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
					<Button
						variant="contained"
						color="primary"
						fullWidth
						onClick={handleAddComment}
					>
						Comment
					</Button>
				</Stack>
			</Stack>
		</Dialog>
	);
};

export default CommentsModal;
