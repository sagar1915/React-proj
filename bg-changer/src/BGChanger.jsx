import { useState } from "react";
const BGChanger = () => {
	const [bgcolor, setBgcolor] = useState("");

	
	return (
		<div
			className="w-full h-screen flex justify-center items-center"
			style={{ backgroundColor: bgcolor }}
		>
			<div className="bg-[#e0d7d7] fixed p-3 m-3 rounded-xl flex flex-col flex-wrap">
				<button
					className=" p-2 m-2 bg-[#2ecc72] rounded-lg text-white"
					onClick={() => setBgcolor("#2ecc72")}
				>
					Green
				</button>
				<button
					className="p-2 m-2 bg-[#E71C23] rounded-lg text-white"
					onClick={() => setBgcolor("#E71C23")}
				>
					Red
				</button>
				<button
					className="p-2 m-2 bg-[#3C40C6] rounded-lg text-white"
					onClick={() => setBgcolor("#3C40C6")}
				>
					Blue
				</button>
				<button
					className="p-2 m-2 bg-[#EEC213] rounded-lg text-white"
					onClick={() => setBgcolor("#EEC213")}
				>
					Yellow
				</button>
				<button
					className="p-2 m-2 bg-[#7B8788] rounded-lg text-white"
					onClick={() => setBgcolor("#7B8788")}
				>
					Gray
				</button>
				<button
					className="p-2 m-2 bg-[#000000] rounded-lg text-white"
					onClick={() => setBgcolor("#000000")}
				>
					Black
				</button>
				<button
					className="p-2 m-2 bg-[#ffffff] rounded-lg text-black"
					onClick={() => setBgcolor("#ffffff")}
				>
					White
				</button>
				<button
					className="p-2 m-2 bg-[#ea4be4] rounded-lg text-white"
					onClick={() => setBgcolor("#ea4be4")}
				>
					Pink
				</button>
				<button
					className="p-2 m-2 bg-[#a719fa] rounded-lg text-white"
					onClick={() => setBgcolor("#a719fa")}
				>
					Purple
				</button>
				<button
					className="p-2 m-2 bg-[#f55c2d] rounded-lg text-white"
					onClick={() => setBgcolor("#f55c2d")}
				>
					Orange
				</button>
			</div>
		</div>
	);
};

export default BGChanger;
