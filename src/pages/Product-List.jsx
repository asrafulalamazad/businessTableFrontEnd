import React, {Fragment, useEffect, useState} from 'react';
import {GetProductList} from "../APIRequest/APIRequest";
import {useSelector} from "react-redux";
import ReactPaginate from "react-paginate";


const ProductList = () => {
    let [searchKeyword, setSearchKeyword]=useState(0);
    let [perPage, SetperPage]=useState(5);

    useEffect(() => {
        GetProductList(1,perPage,searchKeyword);
    }, []);

    let AllProduct= useSelector((state)=>(state.product.AllProduct))
    let Total= useSelector((state)=>(state.product.Total))


    function handlePageClick(event) {
        let pageNo= event.selected;
        alert('you are going to page no '+pageNo+1)
         GetProductList(pageNo+1,perPage,searchKeyword);

    }
    const perPageonChange = (e)=>{
        SetperPage(parseInt(e.target.value))
        GetProductList(1,e.target.value,searchKeyword);

    }

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
                                            <select onChange={perPageonChange} className="form-control mx-2 form-control-sm">
                                                <option value="5"> 5 Per Page</option>
                                                <option value="10"> 10 Per Page</option>
                                                <option value="20"> 20 Per Page</option>
                                                <option value="30"> 30 Per Page</option>
                                                <option value="50"> 50 Per Page</option>
                                                <option value="100"> 100 Per Page</option>
                                                <option value="1000"> 1000 Per Page</option>
                                                <option value="2000"> 2000 Per Page</option>
                                                <option value="5000"> 5000 Per Page</option>
                                            </select>

                                        </div>
                                        <div className="col-4">
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control form-control-sm  form-select-sm" placeholder="Search..."/>
                                                    <button className="btn btn-outline-primary btn-sm mb-0">Search</button>
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
                                                                <span className="text-secondary text-uppercase text-xs font-weight-bold">code</span>
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
                                                <ReactPaginate
                                                    nextLabel=">>"
                                                    previousLabel="<<"
                                                    pageClassName="page-item"
                                                    pageLinkClassName="page-link"
                                                    previousClassName="page-item"
                                                    previousLinkClassName="page-link"
                                                    nextClassName="page-item"
                                                    nextLinkClassName="page-link"
                                                    breakLabel="..."
                                                    breakClassName="page-item"
                                                    breakLinkClassName="page-link"
                                                    pageCount={Total/perPage}
                                                    marginPagesDisplayed={2}
                                                    pageRangeDisplayed={5}
                                                    onPageChange={handlePageClick}
                                                    containerClassName="pagination"
                                                    activeClassName="active"
                                                    // renderOnZeroPageCount={null}
                                                />
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