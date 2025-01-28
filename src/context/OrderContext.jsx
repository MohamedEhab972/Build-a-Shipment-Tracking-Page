import axios from "axios";
import { t } from "i18next";
import { createContext, useState } from "react";
import toast from "react-hot-toast";

export let OrderContext = createContext();

export default function OrderContextProvider(props) {
  const [order, setOrder] = useState(null);
  const [Error, setError] = useState(false);
  const [OrderNumber, setOrderNumber] = useState(false);
  const [Spinner, setSpinner] = useState(false);
  async function getOrder(code) {
    try {
      setSpinner(true);
      setOrderNumber(code);

      const response = await axios.get(
        `https://tracking.bosta.co/shipments/track/${code}`
      );

      setOrder(response.data);
      setError(false);
      toast.success(t("Order Found"), { duration: 3000 });
    } catch (error) {
      setOrder(null);
      setError(true);
      toast.error(
        t(error?.response?.data?.error || "An unexpected error occurred"),
        { duration: 3000 }
      );
    } finally {
      setSpinner(false);
    }
  }
  return (
    <OrderContext.Provider
      value={{ getOrder, order, setOrder, Error, OrderNumber, Spinner }}
    >
      {props.children}
    </OrderContext.Provider>
  );
}
