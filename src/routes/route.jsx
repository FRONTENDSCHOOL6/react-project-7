import { lazy } from "react";
import {
	Route,
	createHashRouter,
	createRoutesFromElements,
} from "react-router-dom";
const RootLayout = lazy(() => import("./../layout/RootLayout"));
const Home = lazy(() => import("./../pages/Home"));
const SignIn = lazy(() => import("./../pages/SignIn"));
const SignInList = lazy(() => import("./../pages/SignInList"));
const SignUp = lazy(() => import("./../pages/SignUp"));
// const FindId = lazy(() => import("../pages/FindId"));
import FindId from "./../pages/FindId";
import SuccessFindId from "./../pages/SuccessFindId";
import FailedFindId from "./../pages/FailedFindId";
// const SuccessFindId = lazy(() => import("../pages/SuccessFindId"));
// const FailedFindId = lazy(() => import("../pages/FailedFindId"));
const FindPassword = lazy(() => import("../pages/FindPassword"));
const Contents = lazy(() => import("../pages/Contents"));
const Favorite = lazy(() => import("./../pages/Favorite"));
const Live = lazy(() => import("./../pages/Live"));
const Membership = lazy(() => import("./../pages/Membership"));
const OnBoarding = lazy(() => import("./../pages/OnBoarding"));
const Profile = lazy(() => import("./../pages/Profile"));
const Program = lazy(() => import("./../pages/Program"));
const Movie = lazy(() => import("./../pages/Movie"));
//const Search = lazy(() => import("./../pages/Search"))
import Search from "./../pages/Search";
import { Navigate } from "react-router-dom";
import ProtectRoute from "./ProtectRoute";
const EditProfiles = lazy(() => import("../pages/EditProfiles"));
const EditProfile = lazy(() => import("../pages/EditProfile"));

const router = createHashRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route
				index
				element={
					<ProtectRoute>
						<Home />
					</ProtectRoute>
				}
			/>
			<Route path="/signin" element={<SignIn />} />
			<Route path="/signinlist" element={<SignInList />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/findid" element={<FindId />} />
			<Route path="/successfindid" element={<SuccessFindId />} />
			<Route path="/failedfindid" element={<FailedFindId />} />
			<Route path="/findpw" element={<FindPassword />} />
			<Route
				path="/contents/:id"
				element={
					<ProtectRoute>
						<Contents />
					</ProtectRoute>
				}
			/>
			<Route
				path="/favorite"
				element={
					<ProtectRoute>
						<Favorite />
					</ProtectRoute>
				}
			/>
			<Route
				path="/live"
				element={
					<ProtectRoute>
						<Live />
					</ProtectRoute>
				}
			/>
			<Route
				path="/search"
				element={
					<ProtectRoute>
						<Search />
					</ProtectRoute>
				}
			/>
			<Route
				path="/membership"
				element={
					<ProtectRoute>
						<Membership />
					</ProtectRoute>
				}
			/>
			<Route path="/onboarding" element={<OnBoarding />} />
			<Route path="/profile/:id" element={<Profile />} />
			<Route
				path="/editprofiles/:id"
				element={
					<ProtectRoute>
						<EditProfiles />
					</ProtectRoute>
				}
			/>
			<Route
				path="/editprofile/:id/:id"
				element={
					<ProtectRoute>
						<EditProfile />
					</ProtectRoute>
				}
			/>
			<Route
				path="/program"
				element={
					<ProtectRoute>
						<Program />
					</ProtectRoute>
				}
			/>
			<Route
				path="/movie"
				element={
					<ProtectRoute>
						<Movie />
					</ProtectRoute>
				}
			/>
		</Route>
	)
);

export default router;
