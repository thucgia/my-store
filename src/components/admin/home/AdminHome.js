import React from 'react';
import TopNavigation from '../../sidebar/TopNavigation';

function AdminHome(props) {
    return (
        <div className="body-content outer-top-vs" id="top-banner-and-menu">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3 sidebar">
                        <TopNavigation/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder">
                        <div className="table">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th className="cart-romove item">Title</th>
                                        <th className="cart-description item">Price</th>
                                        <th className="cart-product-name item">Category</th>
                                        <th className="cart-qty item">Description</th>
                                        <th className="cart-sub-total item">Image</th>
                                        <th className="cart-total last-item">Action</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    <tr>
                                        <td>123</td>
                                        <td>123</td>
                                        <td>123</td>
                                        <td>123</td>
                                        <td>123</td>
                                        <td className="romove-item">
                                            <button className='btn btn-success'><i className="fa fa-trash-o"></i></button>
                                            <button className='btn btn-danger'><i className="fa fa-pencil"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>123</td>
                                        <td>123</td>
                                        <td>123</td>
                                        <td>123</td>
                                        <td>123</td>
                                        <td className="romove-item">
                                            <button className='btn btn-success'><i className="fa fa-trash-o"></i></button>
                                            <button className='btn btn-danger'><i className="fa fa-pencil"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminHome;