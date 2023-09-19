import { lazy } from "react";
import {
	Route,
	createHashRouter,
	createRoutesFromElements,
} from "react-router-dom";
const RootLayout = lazy(() => import("./../layout/RootLayout"));
const Home = lazy(() => import("./../pages/Home"));
const SignInList = lazy(() => import("./../pages/SignInList"));
const SignIn = lazy(() => import("./../pages/SignIn"));
const SignUp = lazy(() => import("./../pages/SignUp"));
const FindId = lazy(() => import("../pages/FindId"));
const SuccessFindId = lazy(() => import("../pages/SuccessFindId"));
const FailedFindId = lazy(() => import("../pages/FailedFindId"));
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
const EditProfiles = lazy(() => import("../pages/EditProfiles"));
const EditProfile = lazy(() => import("../pages/EditProfile"));


const router = createHashRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="/signinlist" element={<SignInList />} />
			<Route path="/signin" element={<SignIn />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/findid" element={<FindId />} />
			<Route path="/successfindid" element={<SuccessFindId />} />
			<Route path="/failedfindid" element={<FailedFindId />} />
			<Route path="/findpw" element={<FindPassword />} />
			<Route path="/contents/:id" element={<Contents />} />
			<Route path="/favorite" element={<Favorite />} />
			<Route path="/live" element={<Live />} />
			<Route path="/search" element={<Search />} />
			<Route path="/membership" element={<Membership />} />
			<Route path="/onboarding" element={<OnBoarding />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/editprofiles" element={<EditProfiles />} />
			<Route path="/editprofile" element={<EditProfile />} />
			<Route path="/program" element={<Program />} />
			<Route path="/movie" element={<Movie />} />
		</Route>
	)
);

export default router;
