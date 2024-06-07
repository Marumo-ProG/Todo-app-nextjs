"use client";

import { useState } from "react";

// MUI
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

// components
import CommentsModal from "./CommentsModal";

// Icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";

const TodoCard = ({ user, todo, comments, likes, id }) => {
	const [openCommentsModal, setOpenCommentsModal] = useState(false);
	return (
		<>
			<Card sx={{ width: { xs: "100%", md: "400px" } }}>
				<CardHeader title={user} subheader="Today" />
				<CardMedia
					component="img"
					height="194"
					image="https://source.unsplash.com/random"
					alt="Random Image"
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						{todo}
					</Typography>
				</CardContent>
				<CardActions>
					<Stack direction="row" spacing={1} alignItems={"center"}>
						<IconButton size="small">
							<FavoriteIcon sx={{ color: "red", fontSize: 15 }} />
						</IconButton>
						<Typography variant="body2" color="text.secondary">
							{likes}
						</Typography>
					</Stack>
					<IconButton
						size="small"
						onClick={() => setOpenCommentsModal(true)}
					>
						<CommentRoundedIcon
							sx={{ color: "black", fontSize: 15 }}
						/>
					</IconButton>
				</CardActions>
			</Card>
			{openCommentsModal && (
				<CommentsModal
					open={openCommentsModal}
					handleClose={() => setOpenCommentsModal(!openCommentsModal)}
					comments={comments}
					todoId={id}
				/>
			)}
		</>
	);
};

export default TodoCard;
