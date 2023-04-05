import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layout/Dashboard";
import Main from "../../Layout/Main";
import Contact from "../../WebPages/Contact/Contact/Contact";
import ManagerUser from "../../WebPages/Dashboard/ManageUsers/ManagerUser";
import UploadBlog from "../../WebPages/Dashboard/UploadBlog/UploadBlog";
import ErrorPage from "../../WebPages/Errorpage/ErrorPage";
import Home from "../../WebPages/Home/Home/Home";
import LoginPage from "../../WebPages/LoginPage/LoginPage";
import Programming from "../../WebPages/Programming/Programming";
import RegisterPage from "../../WebPages/RegisterPage/RegisterPage";
import Search from "../../WebPages/Search/Search";
import SinglePage from "../../WebPages/SinglePage/SinglePage";
import Technology from "../../WebPages/Technology/Technology";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/technology',
        element: <Technology></Technology>
      },
      {
        path: '/programming',
        element: <Programming></Programming>
      },
      {
        path: '/search',
        element: <Search></Search>
      },
      {
        path: '/blog/:blogId',
        element: <SinglePage></SinglePage>,
        // loader: ({params}) => fetch(`http://localhost:5000/mostviews/${params.blogId}`)
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/register',
        element: <RegisterPage></RegisterPage>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/dashboard/upload',
        element: <UploadBlog></UploadBlog>
      },
      {
        path: '/dashboard/manage',
        element: <ManagerUser></ManagerUser>
      },
      {
        path: '/dashboard/'
      }
    ]
  }
])

export default router;