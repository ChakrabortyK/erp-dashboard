import "./App.css";
import { Outlet } from "react-router-dom";
import DashNav from "./components/DashNav";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { itemOrders } from "./data/orders";
import { itemProducts } from "./data/products";
import { setOrders } from "./redux/orders";
import { setProducts } from "./redux/products";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOrders(itemOrders));
    dispatch(setProducts(itemProducts));
  }, [dispatch]);

  return (
    <div className='min-h-screen flex bg-gray-200'>
      <div className='dashnav bg-gray-800 text-white'>
        <DashNav />
      </div>
      <div className='outlet justify-around items-center'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
