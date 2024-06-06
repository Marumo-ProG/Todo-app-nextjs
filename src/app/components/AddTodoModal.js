"use client";

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

const AddTodoModal = ({ open, handleClose }) => {
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
					<TextField label="Todo" fullWidth />
					<CardMedia
						component="img"
						height="194"
						image="https://source.unsplash.com/random"
						alt="Random Image"
					/>
				</Stack>
				<Stack marginTop={2} spacing={3}>
					<Button variant="contained" color="primary" fullWidth>
						Add
					</Button>
				</Stack>
			</Stack>
		</Dialog>
	);
};

export default AddTodoModal;
