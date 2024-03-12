import {
	AddCircleOutline,
	BookmarksOutline,
	HeartOutline,
	HomeOutline,
	LibraryOutline,
	RemoveCircleOutline,
} from "react-ionicons";
import { SavedAlbums } from "../../data/savedAlbums";

const Sidebar = () => {
	const sidebarItems = [
		{ title: "Home", icon: <HomeOutline color={"#b3b3b3"} /> },
		{ title: "Library", icon: <LibraryOutline color={"#b3b3b3"} /> },
		{ title: "Liked Songs", icon: <HeartOutline color={"#b3b3b3"} /> },
	];
	return (
		<div className="md:h-screen h-fit md:w-[350px] w-full bg-[#121212] md:absolute block md:left-0 top-0 p-5 z-30">
			<div className="w-full flex flex-col gap-7 md:px-0 px-3">
				{sidebarItems.map((item) => {
					return (
						<div
							key={item.title}
							className="flex items-center gap-3 cursor-pointer"
						>
							{item.icon}
							<span className="font-medium text-[#b3b3b3] text-[14.5px]">{item.title}</span>
						</div>
					);
				})}
			</div>
			<hr className="border-[#b3b3b3] my-7 opacity-30" />
			<div className="w-full flex flex-col gap-7 md:px-0 px-3">
				<div className="w-full flex items-center justify-between">
					<div className="flex items-center gap-3">
						<BookmarksOutline color={"#b3b3b3"} />
						<span className="font-medium text-[#b3b3b3] text-[14px]">Saved Albums</span>
					</div>
					<AddCircleOutline
						width={"22px"}
						height={"22px"}
						cssClasses={"cursor-pointer"}
						color={"#b3b3b3"}
					/>
				</div>
				{SavedAlbums.map((album) => {
					return (
						<div
							key={album.id}
							className="w-full flex items-center justify-between"
						>
							<div className="flex items-center gap-3">
								<img
									src={album.cover}
									alt={album.title}
									className="rounded-md w-[50px]"
								/>
								<div className="flex flex-col justify-center items-start gap-1">
									<span className="font-medium text-[#b3b3b3] text-[15px]">
										{album.title}
									</span>
									<span className="font-medium text-[#b3b3b3] text-[13px]">
										{album.likes} Likes
									</span>
								</div>
							</div>
							<RemoveCircleOutline
								width={"22px"}
								height={"22px"}
								cssClasses={"cursor-pointer"}
								color={"#b3b3b3"}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Sidebar;
