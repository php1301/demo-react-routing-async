import Home from "./pages/Home";
import ListMovies from "./pages/ListMovies";
import About from "./pages/About";
import DetailMovie from "../src/pages/DetailMovie";
import PageNotFound from "./pages/page-not-found";
import DemoHoc from "./DemoHOC/DemoHoc";
import Admin from "./Admin/Admin";
import Dashboard from "./Admin/Dashboard";
import ThemNguoiDung from "./Admin/ThemNguoiDung";
const routesHome = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/about",
        exact: true,
        component: About
    },
    {
        path: "/list-movie",
        exact: true,
        component: ListMovies
    },
    {
        path: "/detail-movie/:id",
        exact: false,
        component: DetailMovie
    },
    {
        path: "/demo-hoc",
        exact: false,
        component: DemoHoc
    }
    // {
    //     path: "",
    //     exact: false,
    //     component: PageNotFound
    // }

]
const routesAdmin = [
    // {
    //     path: "/admin",
    //     exact: true,
    //     component: Admin
    // },
    {
        path: "/admin/dashboard",
        exact: false,
        component: Dashboard
    },
    {
        path: "/admin/them-nguoi-dung",
        exact: false,
        component: ThemNguoiDung
    }
    
]
export { routesHome, routesAdmin };