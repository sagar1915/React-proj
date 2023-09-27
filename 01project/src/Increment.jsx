import { useState } from "react";

const Increment = () => {
	let [increment, setIncrement] = useState(1);
	let [counter, setCounter] = useState(0);
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
			<h2>counter value: {counter}</h2>
			<input
				type="number"
				value={increment}
				onChange={(e) => {
					setIncrement(e.target.value);
				}}
			/>
			<button onClick={handleadd}>Add value</button>
			<button onClick={handleremove}>remove value</button>
		</>
	);
};

export default Increment;
