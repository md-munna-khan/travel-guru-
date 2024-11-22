import { createBrowserRouter } from "react-router-dom";

import Home from "../components/Home";
import MainLayout from "./Mainlayout";
import Booking from "../components/Booking";
;


const router = createBrowserRouter([
{
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[

        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:'/booking',
            element:<Booking></Booking>
        }
    ],
    

   
}
])

export default router;