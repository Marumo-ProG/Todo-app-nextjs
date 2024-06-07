"use client";

import { useState, useEffect } from "react";

import axios from "axios";

// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// components
import TodoCard from "../components/TodoCard";
import AddTodoModal from "../components/AddTodoModal";

import Link from "next/link";

const CommuninityPage = () => {
	const [openAddTodoModal, setOpenAddTodoModal] = useState(false);
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetchTodos();
	}, []);

	const fetchTodos = async () => {
		try {
			const res = await axios.get("/api/todos");
			setTodos(res.data);
		} catch (err) {
			alert("Error fetching todos");
			console.log(err);
		}
	};
	return (
		<>
			<Stack height={"100vh"} spacing={3}>
				<Stack direction="row" justifyContent={"center"} padding={3}>
					<Typography variant={"h4"} sx={{ fontFamily: "cursive" }}>
						Lenny's Todo list
					</Typography>
					<Button
						variant={"text"}
						sx={{ position: "absolute", left: 24 }}
					>
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

					<Button
						variant={"outlined"}
						sx={{ position: "absolute", right: 24 }}
					>
						<Link
							href={"/login"}
							style={{
								textDecoration: "none",
								color: "inherit",
							}}
						>
							login
						</Link>
					</Button>
				</Stack>

				<Stack spacing={3} padding={3}>
					<Stack
						direction="row"
						spacing={3}
						justifyContent={"space-between"}
					>
						<Typography variant={"h4"}>
							Community's Todo's
						</Typography>
						<Button
							variant={"contained"}
							onClick={() => setOpenAddTodoModal(true)}
						>
							Add Todo
						</Button>
					</Stack>
					<Stack
						padding={4}
						flexWrap={"wrap"}
						direction={"row"}
						gap={3}
					>
						{todos.map((todo, index) => (
							<TodoCard
								key={index}
								user={todo.user_name}
								todo={todo.todo}
								comments={todo.comments}
								likes={todo.likes}
								id={todo.$id}
							/>
						))}
					</Stack>
				</Stack>
			</Stack>
			{/* make the modal to only render when it is supposed to */}

			{openAddTodoModal && (
				<AddTodoModal
					open={openAddTodoModal}
					handleClose={() => setOpenAddTodoModal(false)}
					fetchTodos={fetchTodos}
				/>
			)}
		</>
	);
};

export default CommuninityPage;
