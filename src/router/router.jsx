import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddNewService from "../pages/add_new_service/AddNewService";
import CartDetailes from "../pages/cart_detailes/CartDetailes";
import CheckOut from "../pages/check_out/CheckOut";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import ManageAllOrders from "../pages/manage_all_orders/ManageAllOrders";
import ServiceDetailes from "../pages/service_detailes/ServiceDetailes";
import SignUp from "../pages/sign_up/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/service-detailes",
        element: <ServiceDetailes></ServiceDetailes>,
      },
      {
        path: "/check-out",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "/add-new-service",
        element: <AddNewService></AddNewService>,
      },
    ],
  },
  {
    path: "/cart-detailes",
    element: <CartDetailes></CartDetailes>,
  },
  {
    path: "/manage-all-orders",
    element: <ManageAllOrders></ManageAllOrders>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
]);

export default router;
