import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./page/Home/Home";
import Products from "./page/Products/Products";
import Product from "./page/Product/Product";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./App.scss";

const Layout = () => {
  return (
    <div className="app">
      <NavBar/>
        <Outlet/>
      <Footer/>
    </div>
  );
}

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/products/:id",
          element: <Products/>
        },
        {
          path: "/product/:id",
          element: <Product/>
        },
      ]
    }
  ]);

function App() {
    return (
        <div>

        <RouterProvider router={router} />
        </div>
    );
}

export default App;