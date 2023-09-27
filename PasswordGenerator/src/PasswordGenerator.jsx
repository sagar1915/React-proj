import { useState, useCallback, useEffect, useRef } from "react";

const PasswordGenerator = () => {
	const [length, setLength] = useState(8);
	const [numallow, setNumallow] = useState(false);
	const [charallow, setCharallow] = useState(false);
	const [password, setPassword] = useState("");

	const passwd = useRef(null);

	const passswordgenerator = useCallback(() => {
		let pass = "";
		let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

		if (numallow) str += "1234567890";
		if (charallow) str += "!@#$%^&*";

		for (let i = 1; i <= length; i++) {
               let char = Math.floor(Math.random() * str.length + 1);
               console.log(char);
			pass += str.charAt(char);
		}
		setPassword(pass);
	}, [length, numallow, charallow, setPassword]);

	const copypassword = useCallback(() => {
		passwd.current?.select();
		window.navigator.clipboard.writeText(password);
	}, [password]);

	useEffect(() => {
		passswordgenerator();
	}, [length, numallow, charallow, passswordgenerator]);

	return (
		<div className="text-white">
			<div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-400 bg-gray-500">
				<h1 className="text-4xl text-center m-3">PasswordGenerator</h1>

				<div className="flex shadow rounded-lg overflow-hidden mb-4">
					<input
						type="text"
						value={password}
						className="outline-none w-full py-1 px-3"
						placeholder="password"
						readOnly
						ref={passwd}
					/>
					<button
						className="bg-blue-700 text-white px-3 py-0.5 shrink-0 outline-none "
						onClick={copypassword}
					>
						Copy
					</button>
				</div>
				<div className="flex text-sm gap-x-2">
					<div className="flex items-center gap-x-1">
						<input
							type="range"
							min={8}
							max={50}
							value={length}
							className="cursor-pointer"
							onChange={(e) => {
								setLength(e.target.value);
							}}
						/>
						<label htmlFor=""> length :{length}</label>
					</div>
					<div className="flex items-center gap-x-1">
						<input
							type="checkbox"
							defaultChecked={numallow}
							id="numberInput"
							onChange={() => setNumallow((prev) => !prev)}
						/>
						<label htmlFor="numberInput">Numbers</label>
					</div>
					<div className="flex items-center gap-x-1">
						<input
							type="checkbox"
							defaultChecked={charallow}
							id="charInput"
							onChange={() => setCharallow((prev) => !prev)}
						/>
						<label htmlFor="charInput">Characters</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PasswordGenerator;
