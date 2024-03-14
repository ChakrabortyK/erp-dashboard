import React, { useState } from 'react'
import { updateOrder } from '../redux/orders';
import { useDispatch } from 'react-redux';

const OrderStatusModal = ({ closeModal, orderData }) => {

    const dispatch = useDispatch();
    // const { status, orderId } = orderData;
    const [order, setOrder] = useState(orderData);
    const [errors, setErrors] = useState("");

    // console.log(orderData.orderId)
    const handleChange = (e) => {
        const newStatus = e.target.value;
        setOrder(prevOrder => ({
            ...prevOrder,
            status: newStatus
        }));
    };


    const validateForm = () => {
        if (orderData.status !== order.status) {
            setErrors("");
            return true;
        } else {
            setErrors("Same Status Selected");
            return false;
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        dispatch(updateOrder(order))
        closeModal();
    };


    return (
        <div
            className="modal-container"
            onClick={(e) => {
                if (e.target.className === "modal-container") closeModal();
            }}
        >
            <div className="modal">
                <div className="form-group">
                    Original Status: {orderData.status}
                </div>
                <form>

                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select
                            name="status"
                            onChange={handleChange}
                            value={order.status}
                        >
                            <option value="Pending">Pending</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Processing">Processing</option>
                        </select>
                    </div>
                    {errors && <div className="error">{`Error: ${errors}`}</div>}

                    <button type="submit" className="btn" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default OrderStatusModal