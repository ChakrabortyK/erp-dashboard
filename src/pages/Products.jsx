import React, { useState } from 'react'
import { ProductItem } from '../components'
import { ProductModal } from '../components';
import { useSelector } from 'react-redux';


const Products = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [rowToEdit, setRowToEdit] = useState([])
    let products = useSelector(state => state.products.products);

    const handleEditRow = (idx) => {
        setRowToEdit(products.filter(p => p.productId === idx));
        setModalOpen(true);
    };

    return (<>
        <div className="grid justify-center items-center">
            <h1 className="text-3xl text-center font-semibold text-black-600 mt-8 mb-4">Page Heading</h1>
            <ProductItem rows={products} editRow={handleEditRow} />
            <button className='m-auto btn w-1/2' onClick={() => setModalOpen(true)}>
                Add Product
            </button>
        </div>
        {modalOpen && <ProductModal closeModal={() => {
            setModalOpen(false)
            setRowToEdit([]);//so that modal doesn't open with last open value
        }} defaultValue={rowToEdit.length === 0 ? "" : rowToEdit[0]} />}

    </>

    )
}

export default Products