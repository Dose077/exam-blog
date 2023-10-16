import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/Home/HomePage.jsx';
import Layout from './Components/Layout/front/index';
import RegisterPage from './pages/Register/RegisterPage';
import BlogsPage from './pages/Blogs/BlogsPage';
import BlogPage from './pages/Blog/BlogPage';
import AboutPage from './pages/About/AboutPage.jsx';
import LoginPage from './pages/Login/LoginPage';
import MyBlogsPage from './pages/MyBlogs/MyBlogsPage';
import AccountPage from './pages/Account/AccountPage';
import AuthContextProvider from './context/AuthContext';
import NotFoundPage from './pages/NotFound/NotFoundPage';

const router = createBrowserRouter([
  {
     
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/blogs',
        element: < BlogsPage />
      },
      {
        path: '/blog:blogId',
        element: <BlogPage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/register',
        element: <RegisterPage/>
      },
      {
        path: '/login',
        element: <LoginPage/>
      },
      {
        path: '/my-blogs',
        element: <MyBlogsPage/>
      }, {
        path: '/account',
        element: <AccountPage/>
      },
      { 
        path:'*',
        element:<NotFoundPage/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>,
)
