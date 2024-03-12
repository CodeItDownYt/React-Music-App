import banner from "../../assets/images/banner2.png";
import RenderRows from "../../components/RenderRows";
import { firstRow, secondRow } from "../../data/songs";

const Home = () => {
	return (
		<div className="text-white md:pl-[370px] pl-5 px-5 py-5 flex flex-col w-full gap-5">
			<div className="w-full rounded-xl md:h-[calc(100vh-140px)] h-auto flex flex-col items-center gap-5 bg-[#121212] px-5 md:py-5 pb-20 pt-5">
				<div
					className="w-full relative bg-cover bg-center rounded-xl md:h-[200px] h-[100px]"
					style={{ backgroundImage: `url(${banner})` }}
				/>
				<div className="w-full flex flex-col gap-8">
					<RenderRows
						title="Top New Songs"
						data={firstRow}
					/>
					<RenderRows
						title="Recommended For You"
						data={secondRow}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
