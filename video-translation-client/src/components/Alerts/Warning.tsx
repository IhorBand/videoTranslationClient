import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function Warning(message: string) {
	return (
		<Stack sx={{ width: "100%" }} spacing={2}>
			<Alert severity="warning">
				<AlertTitle>Warning</AlertTitle>
				{message}
			</Alert>
		</Stack>
	);
}
