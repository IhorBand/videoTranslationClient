import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Videos from "./pages/Videos/Videos";
import { ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import "antd/dist/antd.css";
injectStyle();

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					<Header />
					<Routes>
						<Route path="/" element={<Videos />} />
					</Routes>
					<ToastContainer
						position="bottom-left"
						autoClose={1000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						draggable
						pauseOnHover
					/>
					<Footer />
				</div>
			</Router>
		</div>
	);
}

export default App;
