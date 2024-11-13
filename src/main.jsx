import React from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomeScreen from './homescreen/home_screen.jsx';
import 'flowbite'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen></HomeScreen>,
  },
],);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
