import React from 'react';

function ProductItem(props) {
    const addToCart = () => {
        props.setCart((prevState) => {
            // Check item is existed
            let id_exist = prevState.findIndex(item => item.id === props.id)
            // END
            let items = [...prevState]
            if (id_exist !== -1) {
                items[id_exist].count++
            } else {
                items.push({
                    id: props.id,
                    title: props.title,
                    price: props.price,
                    image: props.image,
                    count: 1
                })
            }
            return items
        })
    }
    return (
        <div className="item item-carousel" style={{width:props.width}}>
            <div className="products">
                <div className="product">
                    <div className="product-image">
                        <div className="image"> 
                            <a href="detail.html">
                                <img src={props.image} alt=""/>
                                {/* <img src={props.images[1]} alt="" className="hover-image"/> */}
                            </a> 
                        </div>
                    </div>
                    {/* <!-- /.product-image --> */}
                    
                    <div className="product-info text-left">
                        <h3 className="name"><a href="detail.html">{props.name}</a></h3>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price"> <span className="price"> ${props.price} </span> <span className="price-before-discount">$ {props.price_before_discount}</span> </div>
                        {/* <!-- /.product-price -->  */}
                        
                    </div>
                    {/* <!-- /.product-info --> */}
                    <div className="cart clearfix animate-effect">
                        <div className="action">
                        <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                                <button
                                    data-toggle="tooltip"
                                    className="btn btn-primary icon"
                                    type="button"
                                    title="Add Cart"
                                    onClick={addToCart}
                                >
                                    <i className="fa fa-shopping-cart"></i>
                                </button>
                                {/* <button className="btn btn-primary cart-btn" type="button">Add to cart</button> */}
                            </li>
                            <li className="lnk wishlist">
                                <a data-toggle="tooltip" className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i></a>
                            </li>
                        </ul>
                        </div>
                        {/* <!-- /.action -->  */}
                    </div>
                    {/* <!-- /.cart -->  */}
                </div>
                {/* <!-- /.product -->  */}
                
            </div>
            {/* <!-- /.products -->  */}
        </div>
    );
}

export default ProductItem;