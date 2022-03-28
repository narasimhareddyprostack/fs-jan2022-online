import React, { useState } from 'react'

const Counter = () => {
    let [product, setProduct] = useState({
        prod_Name: "Apple iPhone 12",
        image: "https://m.media-amazon.com/images/I/71ZOtNdaZCL._SX679_.jpg",
        price: 49900,
        qty: 1
    });
    let incrHandler = () => {
        setProduct({ ...product, qty: product.qty + 1 })
    }
    let decrHandler = () => {
        setProduct({ ...product, qty: product.qty - 1 })
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <table className="table table-hover">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>Product Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>QTY</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.prod_Name}</td>
                                <td><img src={product.image} height="50px" /></td>
                                <td>{product.price}</td>
                                <td><i className="fa fa-minus-circle" onClick={decrHandler}></i>{product.qty}<i className="fa fa-plus-circle" onClick={incrHandler}></i></td>
                                <td>{product.qty * product.price}</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Counter
