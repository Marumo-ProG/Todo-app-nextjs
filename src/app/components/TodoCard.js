// MUI
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

// Icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";

const TodoCard = ({ user, todo }) => {
	return (
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
				<IconButton size="small">
					<FavoriteIcon sx={{ color: "red", fontSize: 15 }} />
				</IconButton>
				<IconButton size="small">
					<CommentRoundedIcon sx={{ color: "black", fontSize: 15 }} />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default TodoCard;
