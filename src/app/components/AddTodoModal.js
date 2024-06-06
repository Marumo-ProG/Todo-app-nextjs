"use client";

import { useState } from "react";

import axios from "axios";

// MUI
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";

// Icons
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const AddTodoModal = ({ open, handleClose, fetchTodos }) => {
	const [name, setName] = useState("");
	const [todo, setTodo] = useState("");

	const handleAddTodo = async () => {
		let newTodo = { user_name: name, todo };
		try {
			const res = await axios.post("/api/todos", newTodo);
			handleClose();
			fetchTodos();
		} catch (err) {
			alert("Error adding a todo to the database");
			console.log(err);
		}
	};
	return (
		<Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
			<Stack padding={3}>
				<Stack direction="row" justifyContent="space-between">
					<Typography variant="h5">Add Todo</Typography>
					<IconButton onClick={handleClose}>
						<CloseRoundedIcon />
					</IconButton>
				</Stack>
				<Divider />
				<Stack spacing={2} marginTop={2}>
					<TextField
						size="small"
						label="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						fullWidth
					/>
					<TextField
						size="small"
						label="Todo"
						value={todo}
						onChange={(e) => setTodo(e.target.value)}
						fullWidth
					/>
					<CardMedia
						component="img"
						height="194"
						image="https://source.unsplash.com/random"
						alt="Random Image"
					/>
				</Stack>
				<Stack marginTop={2} spacing={3}>
					<Button
						variant="contained"
						color="primary"
						fullWidth
						onClick={handleAddTodo}
					>
						Add
					</Button>
				</Stack>
			</Stack>
		</Dialog>
	);
};

export default AddTodoModal;
