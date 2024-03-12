import { BookOutline, BugOutline, NotificationsOutline, SearchOutline } from "react-ionicons";

const Navbar = () => {
	return (
		<div className="bg-[#121212] w-full h-12 px-5 py7 relatve top-0 pl-[350px] md:flex hidden items-center justify-between z-20">
			<div className="flex items-center gap-3 w-[350px] h-12 px-3">
				<SearchOutline color={"#b3b3b3"} />
				<input
					type="text"
					placeholder="Search"
					className="outline-none bg-[#121212] w-full placeholder:text-[#b3b3b3]"
				/>
			</div>
			<div className="flex items-center gap-3">
				<div className="rounded-full w-[34px] h-[34px] bg-gray-700 grid place-items-center cursor-pointer hover:bg-green-900">
					<NotificationsOutline color={"#b3b3b3"} />
				</div>
				<div className="rounded-full w-[34px] h-[34px] bg-gray-700 grid place-items-center cursor-pointer hover:bg-green-900">
					<BookOutline color={"#b3b3b3"} />
				</div>
				<div className="rounded-full w-[34px] h-[34px] bg-gray-700 grid place-items-center cursor-pointer hover:bg-green-900">
					<BugOutline color={"#b3b3b3"} />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
