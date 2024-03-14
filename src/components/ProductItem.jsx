import React from 'react'
import "./css/Item.css"
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/products';


const ProductItem = ({ rows, editRow }) => {
    let dispatch = useDispatch()

    return (
        <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Product ID</th>
                        <th className="expand">Category</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, idx) => {
                        const category =
                            row.category.charAt(0).toUpperCase() + row.category.slice(1);

                        return (
                            <tr key={idx}>
                                <td>{row.name}</td>
                                <td className="fit">
                                    <span className="actions">{row.productId}</span>
                                </td>
                                <td className='flex justify-around'>
                                    <span className={`label label-category`}>
                                        {category}
                                    </span>
                                </td>
                                <td className="expand">{row.stockQuantity}</td>
                                <td className="fit">
                                    <span className="actions">{row.price}</span>
                                </td>

                                <td>
                                    <button onClick={() => editRow(row.productId)} className='fa-solid m-2 fa-pen-to-square'></button>
                                    <button onClick={() => dispatch(deleteProduct(row.productId))} className="fa-solid fa-ban"></button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ProductItem