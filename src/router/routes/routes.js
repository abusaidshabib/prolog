import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Contact from "../../WebPages/Contact/Contact/Contact";
import Home from "../../WebPages/Home/Home/Home";
import Programming from "../../WebPages/Programming/Programming";
import Technology from "../../WebPages/Technology/Technology";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
      }
    ]
  }
])

export default router;