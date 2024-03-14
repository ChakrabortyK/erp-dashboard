import React from 'react'
import "./css/Item.css"

const OrderItem = ({ rows, editOrderStatus }) => {
    return (
        <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th className="expand">Customer Name</th>
                        <th>Order Status</th>
                        <th>OrderDate</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, idx) => {
                        const status =
                            row.status.charAt(0).toUpperCase() + row.status.slice(1);

                        return (
                            <tr key={idx}>
                                <td>{row.orderId}</td>
                                <td className="expand text-center">{row.customerName}</td>
                                <td className='flex justify-around'>
                                    <span className={`label label-${row.status}`}>
                                        {status}
                                        <button onClick={() => editOrderStatus(row.orderId)} className='fa-solid m-2 fa-pen-to-square'></button>
                                    </span>
                                </td>
                                <td className="fit">
                                    <span className="actions">{row.orderDate}</span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default OrderItem