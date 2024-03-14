import React, { useState } from "react";

import "./css/Modal.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../redux/products";

export const ProductModal = ({ closeModal, defaultValue }) => {

    const dispatch = useDispatch();
    let products = useSelector(state => state.products.products);


    const [formState, setFormState] = useState(defaultValue ||
    {
        productId: "",
        price: "",
        category: "",
    });


    const [errors, setErrors] = useState("");

    const generateProductId = () => {
        // Generate a random alphanumeric string
        const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
        const length = 6; // Adjust the length of the generated ID as needed
        let productId = "";
        for (let i = 0; i < length; i++) {
            productId += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return productId;
    };

    const isProductIdExists = (productId, products) => {
        return products.some(product => product.productId === productId);
    };

    const getUniqueProductId = (products) => {
        let productId = generateProductId();
        while (isProductIdExists(productId, products)) {
            productId = generateProductId();
        }
        return productId;
    };

    const newProductId = getUniqueProductId(products);



    const validateForm = () => {
        if (formState.name && formState.price && formState.category) {
            setErrors("");
            return true;
        } else {
            let errorFields = [];
            for (const [key, value] of Object.entries(formState)) {
                if (key !== "productId" && !value) {
                    errorFields.push(key);
                }
            }
            setErrors(errorFields.join(", "));
            return false;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        if (formState.productId !== "") {
            dispatch(updateProduct(formState));
        } else {
            dispatch(addProduct({ ...formState, productId: newProductId }));
        }
        setFormState({
            productId: "",
            price: "",
            category: "",
        })
        closeModal();
    };

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value)
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    // console.log(defaultValue.productId)
    // console.log(formState)

    return (
        <div
            className="modal-container"
            onClick={(e) => {
                if (e.target.className === "modal-container") closeModal();
            }}
        >
            <div className="modal">
                <div className="form-group rounded-full text-center bg-gray-400">{formState.productId}</div>
                <form>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input name="price" onChange={handleChange} value={formState.price} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Product Name</label>
                        <textarea
                            name="name"
                            onChange={handleChange}
                            value={formState.name}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Category</label>
                        <select
                            name="category"
                            onChange={handleChange}
                            value={formState.category}
                        >
                            {formState.category === "" && (
                                <option value="">Select Category</option>
                            )}
                            <option value="Sports & Outdoors">Sports & Outdoors</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Home & Garden">Home & Garden</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Electronics">Electronics</option>
                        </select>
                    </div>
                    {errors && <div className="error">{`Please include: ${errors}`}</div>}
                    <button type="submit" className="btn" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};