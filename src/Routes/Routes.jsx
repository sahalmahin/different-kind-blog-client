import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AddBlog from "../pages/AddBlog/AddBlog";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import FeaturedBlogs from "../pages/FeaturedBlogs/FeaturedBlogs";
import WishList from "../pages/WishList/WishList";
import BlogDetail from "../pages/Home/BlogDetail/BlogDetail";
import UpdateBlog from "../pages/Home/UpdateBlog/UpdateBlog";
import PrivateRoute from "./PrivateRoute";
import DetailPage from "../pages/Home/Blogs/DetailPage";
import UpdateDetail from "../pages/Home/Blogs/UpdateDetail";
import Error from "../Layout/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/detailPage/:id',
        element: <PrivateRoute><DetailPage></DetailPage></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
      },
      {
        path: '/updateDetail/:id',
        element: <PrivateRoute><UpdateDetail></UpdateDetail></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
      },
      {
        path: '/addBlog',
        element: <AddBlog></AddBlog>
      },
      {
        path: '/allBlogs',
        element: <PrivateRoute><AllBlogs></AllBlogs></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/addBlog')
      },
      {
        path: '/blogDetail/:id',
        element: <PrivateRoute><BlogDetail></BlogDetail></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/addBlog/${params.id}`)
      },
      {
        path: '/updateBlog/:id',
        element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/addBlog/${params.id}`)
      },
      {
        path: '/featuredBlogs',
        element: <FeaturedBlogs></FeaturedBlogs>
      },
      {
        path: '/wishList',
        element: <PrivateRoute><WishList></WishList></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
    ]
  },
]);

export default router;