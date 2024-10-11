
import { createBrowserRouter } from "react-router-dom";
import Home from "../Screens/Home.tsx";
import Detail from "../Screens/Detail.tsx";
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/planet/:id",
        element: <Detail/>,
      },
    
     
    
  ]);
 