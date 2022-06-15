import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Navbar, Nav, Dropdown } from "rsuite";
import MenuIcon from "@mui/icons-material/Menu";

export default function MyDrawer() {
	const [isOpened, setIsOpened] = React.useState(false);

	const toggleDrawer =
		(open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === "keydown" &&
				((event as React.KeyboardEvent).key === "Tab" ||
					(event as React.KeyboardEvent).key === "Shift")
			) {
				return;
			}

			setIsOpened(open);
		};

	const list = () => (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}>
			<List>
				{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{["All mail", "Trash", "Spam"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<div>
			<Nav.Item icon={<MenuIcon />} onClick={toggleDrawer(true)} />
			<Drawer open={isOpened} onClose={toggleDrawer(false)}>
				{list()}
			</Drawer>
		</div>
	);
}
