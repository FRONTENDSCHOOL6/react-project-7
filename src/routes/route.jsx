import { lazy } from 'react';
import {
  Route,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom';
const RootLayout = lazy(() => import('./../layout/RootLayout'));
const Home = lazy(() => import('./../pages/Home'));
const SignIn = lazy(() => import('./../pages/SignIn'));
const SignUp = lazy(() => import('./../pages/SignUp'));
const Detail = lazy(() => import('./../pages/Detail'));
const Favorite = lazy(() => import('./../pages/Favorite'));
const Live = lazy(() => import('./../pages/Live'));
const Membership = lazy(() => import('./../pages/Membership'));
const OnBoarding = lazy(() => import('./../pages/OnBoarding'));
const Profile = lazy(() => import('./../pages/Profile'));
const Program = lazy(() => import('./../pages/Program'));
const Movie = lazy(() => import('./../pages/Movie'));

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/detail" element={<Detail />} />
    <Route path="/favorite" element={<Favorite />} />
    <Route path="/live" element={<Live />} />
    <Route path="/membership" element={<Membership />} />
    <Route path="/onboarding" element={<OnBoarding />} />
    <Route path="/profile" element={<Profile />} /> 
    <Route path="/program" element={<Program />} /> 
    <Route path="/movie" element={<Movie />} /> 
  </Route>
  )
);


export default router;