import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
     <div>
        <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        
    </div>

<Footer></Footer>

     </div>
    );
};

export default Root;