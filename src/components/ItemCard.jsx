import React from 'react'

const ItemCard = ({ title, value }) => {
    return (
        <div className="bg-white h-64 shadow-xl rounded-2xl p-6 w-96">
            {/* <div className="flex items-center mb-4">
                
            </div> */}
            <div className="text-gray-700 flex items-center mb-4 bg-bgGray rounded-2xl p-4 h-32">
                <span className="text-xl mr-2"><i className="fas fa-chart-bar"></i></span>
                <h2 className="text-lg font-semibold">{title} : </h2>
                <p className="m-2 text-lg font-semibold">{value}</p>
            </div>
        </div>

    )
}

export default ItemCard