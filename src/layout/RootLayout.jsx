import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import SimpleHeader from "./SimpleHeader";

export default function RootLayout() {
	const location = useLocation();
	const simpleHeaderOn = [
		"/signin",
		"/signinlist",
		"/onboarding",
		"/signup",
		"/findid",
		"/findpw",
		"/successfindid",
		"/editprofiles",
		"/editprofile",
		"/profile",
		"/signinlist",
		"/suceessfindid",
		"/failedfindid",
	];
	useLocation;
	const pathSegments = location.pathname.split("/");
	const currentPath = pathSegments[1];

	return (
		<>
			{!simpleHeaderOn.includes("/" + currentPath) ? (
				<Header />
			) : (
				<SimpleHeader />
			)}
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
