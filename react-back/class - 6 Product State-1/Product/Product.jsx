import React, { Component } from 'react'

class Product extends Component {
    state = {
        product: {
            name: "realme 8 (Cyber Black, 128 GB)",
            image: "https://rukminim2.flixcart.com/image/224/224/kmmcrrk0/mobile/4/g/a/8-rmx3085-realme-original-imagfgpfdkyc29zc.jpeg?q=90",
            price: 15999,
            qty: 1
        },
        product_Details: {}

    }
    incrHandler = () => {
        this.setState({
            product: {
                ...this.state.product,
                qty: this.state.product.qty + 1
            }
        })
    }
    decrHandler = () => {
        this.setState({ product: { ...this.state.product, qty: this.state.product.qty - 1 } })
    }
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        {/*   <pre>{JSON.stringify(this.state)}</pre> */}
                        <div className="col-md-7">
                            <table className="table table-hover">
                                <thead className="bg-info">
                                    <tr>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Total Price</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.product.name}</td>
                                        <td><img src={this.state.product.image} height="100px" /></td>
                                        <td>{this.state.product.price}</td>
                                        <td>
                                            <i className="fa fa-minus-circle" onClick={this.decrHandler}></i>
                                            {this.state.product.qty}
                                            <i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                                        <td>{this.state.product.qty * this.state.product.price}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product
