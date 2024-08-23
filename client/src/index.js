import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Home from './../src/views/Home/Home'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import SignUp from './../src/views/Signup/Signup'
import Login from './../src/views/Login/Login'
import Teacher from "./views/Teacher/Teacher"

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/login",
    element: <Login/>
  },

  {
    path: "/teacher",
    element: <Teacher/>
  },



  // {
  //   path: "/edit/:id",
  //   element: <Edit/>
  // },
  // {
  //   path: "/about",
  //   element: <AboutUs/>
  // },
  {
    path: "*",
    element: <h1>404 Page not found</h1>
  }
])
root.render(<RouterProvider router={router}/>);