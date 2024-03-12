/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
	title: string;
	data: any[];
}
const RenderRows = ({ title, data }: Props) => {
	return (
		<div className="w-full flex flex-col md:gap-4 gap-6 px-2">
			<div className="w-full flex items-center justify-between">
				<span className="font-semibold text-[20px]">{title}</span>
				<a
					href="#"
					className="text-[#1ed760] text-[13.5px] font-medium"
				>
					See More
				</a>
			</div>
			<div className="w-full flex items-center justify-between gap-8 overflow-x-auto md:pb-0 pb-5">
				{data.map((song: any) => {
					return (
						<div
							key={song.title}
							className="flex items-center flex-col gap-[6px] cursor-pointer w-[500px]"
						>
							<div
								className="bg-center bg-cover rounded-xl w-[145px] h-[145px]"
								style={{ backgroundImage: `url(${song.cover})` }}
							></div>
							<div className="flex flex-col gap-1 self-start md:ml-[22px] ml-2">
								<span className="font-semibold text-[#b3b3b3]">{song.title}</span>
								<span className="text-[#b3b3b3] text-[13.5px]">{song.singer}</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default RenderRows;
