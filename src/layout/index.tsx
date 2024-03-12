import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Player from "../components/Player";

const Layout = () => {
	return (
		<div className="w-full h-full text-white relative">
			<Sidebar />
			<Navbar />
			<Outlet />
			<Player />
		</div>
	);
};

export default Layout;
