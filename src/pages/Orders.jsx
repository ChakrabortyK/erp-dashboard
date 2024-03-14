import React, { useState } from 'react'
import { OrderItem, OrderStatusModal } from '../components'
import { useSelector } from 'react-redux';

const Orders = () => {


    const [modalOpen, setModalOpen] = useState(false);
    const [rowToEdit, setRowToEdit] = useState([])
    let orders = useSelector(state => state.orders.orders);

    const handleEditRow = (idx) => {
        setRowToEdit(orders.filter(o => o.orderId === idx));
        setModalOpen(true);
    };

    // console.log(orders)

    return <div className="grid justify-center items-center">
        <h1 className="text-3xl text-center font-semibold text-black-600 mt-8 mb-4">Page Heading</h1>
        <OrderItem rows={orders} editOrderStatus={handleEditRow} />
        {modalOpen && <OrderStatusModal closeModal={() => {
            setModalOpen(false)
        }} orderData={rowToEdit[0]} />}
    </div>
}

export default Orders