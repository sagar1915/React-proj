import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
import User from "./components/User/User.jsx";

const approuter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				loader:  githubInfoLoader ,
				path: "/github",
				element: <Github />,
			},
			{
				path: '/user/:userid',
				element:<User/>
			}
		],
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={approuter} />
);
