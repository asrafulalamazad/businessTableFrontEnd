import React, {Fragment, useEffect, useState} from 'react';
import {GetProductList} from "../APIRequest/APIRequest";
import {useSelector} from "react-redux";

const ProductList = () => {
    let [searchKeyword, setSearchKeyword]=useState(0);
    let [perPage, SetperPage]=useState(5);

    useEffect(() => {
        GetProductList(9,perPage,searchKeyword);
    }, []);

    let AllProduct= useSelector((state)=>(state.product.AllProduct))
    let Total= useSelector((state)=>(state.product.Total))


    return (

        <Fragment>
            <div className="container my-5">
                <div className='rpw'>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="h4">Product List</p>

                                        </div>
                                        <div className="col-2">

                                        </div>
                                        <div className="col-4">
                                            <div className="input-group mb-3">

                                            </div>

                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <div className="table-responsive data-table">
                                                <table className="table">
                                                    <thead>
                                                    <tr>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bold">Product</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bold">Price</th>
                                                        <th className=" text-center text-uppercase text-secondary text-xxs font-weight-bold">Stock</th>
                                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bold">Code</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        AllProduct.map((item, index)=>

                                                        <tr>
                                                            <td>
                                                                <div className="d-flex px-2 py-1">
                                                                    <div className="">
                                                                        <img src={item.image} className="avatar me-3"/>
                                                                    </div>
                                                                    <div className="">
                                                                        <h6 className="mb-0 text-xs "> {item.title}</h6>
                                                                        <p className="text-xs text-secondary mb-0  ">{item.category} </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className="text-xs font-weight-bold mb-0">{item.brand}</p>
                                                                <p className="text-xs text-secondary mb-0">{item.price}</p>
                                                            </td>
                                                            <td>
                                                                <p className="badge bg-gradient-success">{item.stock} </p>
                                                            </td>
                                                            <td>
                                                                <span className="text-secondary, text-xs, font-weight-bold"/>
                                                            </td>

                                                        </tr>
                                                        )
                                                    }
                                                    </tbody>

                                                </table>

                                            </div>
                                        </div>
                                        <div className="col-12 mt-5">
                                            <nav aria-label="Page navigation example">

                                            </nav>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>


    );
};

export default ProductList;