import Home from "./pages/home/Home";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import {Orders} from "./pages/orders/Orders.tsx";
import {Notes} from "./pages/notes/Notes.tsx";
import {Messages} from "./pages/messages/Messages.tsx";
import {Elements} from "./pages/elements/Elements.tsx";
import {Forms} from "./pages/forms/Forms.tsx";
import {Calendar} from "./pages/calendar/Calendar.tsx";
import {Settings} from "./pages/settings/Settings.tsx";
import {Backup} from "./pages/backup/Backup.tsx";
import {Graphics} from "./pages/graphics/Graphics.tsx";
import {Log} from "./pages/log/Log.tsx";


const queryClient = new QueryClient();

function App() {
    const Layout = () => {
        return (
            <div className="main">
                <Navbar/>
                <div className="container">
                    <div className="menuContainer">
                        <Menu/>
                    </div>
                    <div className="contentContainer">
                        <QueryClientProvider client={queryClient}>
                            <Outlet/>
                        </QueryClientProvider>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Home/>,
                },
                {
                    path: "/users",
                    element: <Users/>,
                },
                {
                    path: "/products",
                    element: <Products/>,
                },
                {
                    path: "/orders",
                    element: <Orders/>,
                },
                {
                    path: "/message",
                    element: <Messages/>,
                },
                {
                    path: "/elements",
                    element: <Elements/>,
                },
                {
                    path: "/notes",
                    element: <Notes/>,
                },
                {
                    path: "/forms",
                    element: <Forms/>,
                },
                {
                    path: "/calendar",
                    element: <Calendar/>,
                },
                {
                    path: "/settings",
                    element: <Settings/>,
                },
                {
                    path: "/backup",
                    element: <Backup/>,
                },
                {
                    path: "/graphics",
                    element: <Graphics/>,
                },
                {
                    path: "/log",
                    element: <Log/>,
                },
                {
                    path: "/users/:id",
                    element: <User/>,
                },
                {
                    path: "/products/:id",
                    element: <Product/>,
                },
            ],
        },
        {
            path: "/login",
            element: <Login/>,
        },
    ]);

    return <RouterProvider router={router}/>;
}

export default App;
