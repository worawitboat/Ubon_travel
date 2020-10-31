import React from "react";
// import { Navigate } from 'react-router-dom';
import Main from "./views/main";
import Contact from "./views/contact";
import Store from "./views/store";


const routes = [

  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/store",
    element: <Store />,
  },
];

export default routes;
