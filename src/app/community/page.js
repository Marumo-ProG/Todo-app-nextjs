"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// context
import { useAuth } from "../context/auth";

import axios from "axios";

// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// components
import TodoCard from "../components/TodoCard";
import AddTodoModal from "../components/AddTodoModal";
import Loader from "../components/Loader";

import Link from "next/link";

const CommuninityPage = () => {
	const router = useRouter();
	const { user, setUser } = useAuth();
	const [openAddTodoModal, setOpenAddTodoModal] = useState(false);
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchTodos();
	}, []);

	const fetchTodos = async () => {
		setIsLoading(true);
		try {
			const res = await axios.get("/api/todos");
			setTodos(res.data);
		} catch (err) {
			alert("Error fetching todos");
			console.log(err);
		}
		setIsLoading(false);
	};

	const handleLogout = () => {
		localStorage.removeItem("todo_user");
		setUser(null);
		router.push("/");
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
					{user ? (
						<Button
							variant={"outlined"}
							sx={{ position: "absolute", right: 24 }}
							onClick={handleLogout}
						>
							logout
						</Button>
					) : (
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
					)}
				</Stack>

				<Stack spacing={3} padding={3}>
					<Stack
						direction="row"
						spacing={3}
						justifyContent={"space-between"}
					>
						{user ? (
							<Typography variant={"h4"}>My Todo's</Typography>
						) : (
							<Typography variant={"h4"}>
								Community's Todo's
							</Typography>
						)}

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
						{isLoading ? (
							<Loader />
						) : (
							todos.map((todo, index) => (
								<TodoCard
									key={index}
									user={todo.user_name}
									todo={todo.todo}
									comments={todo.comments}
									likes={todo.likes}
									id={todo.$id}
								/>
							))
						)}
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
