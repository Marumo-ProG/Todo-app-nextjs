// mui
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
	return (
		<Stack
			width={"100%"}
			height={"100%"}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<CircularProgress />
		</Stack>
	);
};

export default Loader;
