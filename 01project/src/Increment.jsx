import { useState } from "react";

const Increment = () => {
	const [increment, setIncrement] = useState(1);
	const [counter, setCounter] = useState(0);
	function handleadd() {
		if (counter < 100) {
			setCounter(counter + Number(increment));
		}
	}
	function handleremove() {
		if (counter > 0) {
			setCounter(counter - Number(increment));
		}
	}
	return (
		<>
			<div className="flex-col bg-black text-white text-center p-5 m-2">
				<h2>Counter value: {counter}</h2>
				<input
					className="bg-gray-500 p-2 m-2"
					type="number"
					value={increment}
					onChange={(e) => {
						setIncrement(e.target.value);
					}}
				/>
				<button className="bg-gray-500 p-2 m-2 rounded-sm" onClick={handleadd}>
					Add Value
				</button>
				<button
					className="bg-gray-500 p-2 m-2 rounded-sm"
					onClick={handleremove}
				>
					Remove Value
				</button>
			</div>
		</>
	);
};

export default Increment;
