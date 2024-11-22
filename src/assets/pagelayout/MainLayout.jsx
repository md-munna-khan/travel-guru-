import Navbar from "../components/Navbar";

import bg from '../../assets/bg.png'
import { Outlet } from "react-router-dom";
const MainLayout = () => {

    return (
        <div className="bg-black bg-blend-overlay bg-opacity-40 w-11/12 mx-auto  " style=
        {{backgroundImage:`url(${bg})`,
        
        height: "800px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        
        }}>
    
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;