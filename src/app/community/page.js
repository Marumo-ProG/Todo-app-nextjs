// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// components
import TodoCard from "../components/TodoCard";
import CommentsModal from "../components/CommentsModal";

import Link from "next/link";

const CommuninityPage = () => {
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
						<Button variant={"contained"}>Add Todo</Button>
					</Stack>
					<Stack
						padding={4}
						flexWrap={"wrap"}
						direction={"row"}
						gap={3}
					>
						<TodoCard
							user={"Alex"}
							todo={"Playing PUBG with the killerKing"}
						/>
						<TodoCard
							user={"Cammy"}
							todo={"Re design the garage for the PJ party"}
						/>
						<TodoCard
							user={"Sandy"}
							todo={"Baby clothes with daddy"}
						/>
						<TodoCard
							user={"Annonymous"}
							todo={"Buy morning after pill"}
						/>
						<TodoCard user={"Lenny"} todo={"PR review with Emad"} />
					</Stack>
				</Stack>
			</Stack>
		</>
	);
};

export default CommuninityPage;
