import React from 'react'
import { ItemCard } from '../components'
import { useSelector } from 'react-redux'

const Dashoard = () => {

    let orders = useSelector(state => state.orders.orders);
    let products = useSelector(state => state.products.products);
    const totalOrders = orders.length;
    const pendingOrders = orders.filter(order => order.status === 'Pending').length;
    const deliveredOrders = orders.filter(order => order.status === 'Delivered').length;
    const totalProducts = products.length;
    // productsPending=
    const productCategories = [...new Set(products.map(product => product.category))];
    // console.log("Product Categories:", productCategories.length);

    return (
        <div className="flex flex-col h-screen">
            <div className="h-1/2  rounded-5xl m-10 p-5 space-x-6">
                <div className="container">
                    <h2 className="text-lg text-center font-semibold">Order Summary</h2>
                </div>
                <div className="h-1/2 rounded-3xl flex m-1 p-5 justify-around">
                    <ItemCard title="Total Orders" value={totalOrders} />
                    <ItemCard title="Pending Orders" value={pendingOrders} />
                    <ItemCard title="Delivered orders" value={deliveredOrders} />
                </div>
            </div>
            <div className="h-1/2  rounded-3xl m-10 p-5 space-x-6">
                <div className="container">
                    <h2 className="text-lg text-center font-semibold">Products Summary</h2>
                </div>

                <div className="h-1/2 rounded-3xl flex m-10 p-5 justify-around">
                    <ItemCard title="Total Products" value={totalProducts} />
                    {/* <ItemCard title="Products Pending" /> */}
                    <ItemCard title="Product Categories" value={productCategories.length} />
                </div>
            </div>

        </div>
    )
}

export default Dashoard