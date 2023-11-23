//Pages
import {Home} from "./pages/home/Home.tsx";
import {Users} from "./pages/users/Users.tsx";
import {Products} from "./pages/products/Products.tsx";
import {Login} from "./pages/login/Login.tsx";

//Components
import {Navbar} from "./Companents/Navbar/Navbar.tsx";
import {Footer} from "./Companents/Footer/Footer.tsx";
import {Menu} from "./Companents/Menu/Menu.tsx";

//React-Router
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
} from "react-router-dom";

//style
import "./styles/global.scss";

function App() {

    const Layout = () => {
        return (
            <div className="main">
                <Navbar/>
                <div className="container">
                    <div className="menu-container">
                        <Menu/>
                    </div>
                    <div className="content-container">
                        <Outlet/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

    const router = createBrowserRouter([
        {
            path:"/",
            element:<Layout/>,
            children:[
                {
                  path:"/",
                  element:<Home/>
                },
                {
                  path:"users",
                  element:<Users/>
                },
                {
                  path:"products",
                  element:<Products/>
                },
            ],
        },
        {
            path:"/login",
            element:<Login/>
        }
    ]);

    return (
        <RouterProvider router={router}/>
    )
}

export default App
