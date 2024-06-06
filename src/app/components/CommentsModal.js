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

const CommentsModal = ({ open, handleClose, comments }) => {
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
					<TextField label="Add a comment" fullWidth />
					<Button variant="contained" color="primary" fullWidth>
						Comment
					</Button>
				</Stack>
			</Stack>
		</Dialog>
	);
};

export default CommentsModal;
