import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import SimpleHeader from "./SimpleHeader";

export default function RootLayout() {
	const location = useLocation();
	const simpleHeaderOn = [
		"/signin",
		"/onboarding",
		"/signup",
		"/findid",
		"/findpw",
		"/editprofiles",
		"/editprofile",
		"/profile",
	];
	useLocation;

	return (
		<>
			{!simpleHeaderOn.includes(location.pathname) ? (
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
