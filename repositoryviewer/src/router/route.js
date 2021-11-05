import Home from "../pages/home";
import Profile from "../pages/profile";
import error_404 from "../pages/error_404";


export const publicRoutes = [
    {path: '/home', component: Home, exact: true },
    {path: '/profile', component: Profile, exact: true },
    {path: '/pagenotfound', component: error_404, exact: true },
]
