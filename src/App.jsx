import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import OrderContextProvider from "./context/OrderContext";
import "./i18next";

let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <OrderContextProvider>
        <RouterProvider router={x}></RouterProvider>
      </OrderContextProvider>
    </>
  );
}

export default App;
