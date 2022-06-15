import { Navbar, Nav, Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import AccountMenu from "./AccountMenu";
import "./Header.css";
import MyDrawer from "./Drawer";

function Header() {
	return (
		<Navbar>
			<Nav>
				<MyDrawer />
			</Nav>
			<Navbar.Brand>
				<div className="appName">VideoTranslate</div>
			</Navbar.Brand>
			<Nav pullRight>
				<div className="accountMenu">
					<AccountMenu />
				</div>
			</Nav>
		</Navbar>
	);
}
export default Header;
