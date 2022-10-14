import React, { useState } from 'react';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Home from './components/screen/home/Home';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import NotFound from './components/screen/notfound/NotFound';
import Category from './components/screen/category/Category';
import FAQ from './components/screen/faq/FAQ';
import Contact from './components/screen/contact/Contact';
import Login from './components/screen/user/login/Login';
import UpdateProfile from './components/screen/user/profile/UpdateProfile';
import ShoppingCart from './components/screen/cart/ShoppingCart';
import Message from './components/utils/message/Message';
import useToken from './auth/useToken';
import ScrollToTop from './components/utils/ScrollToTop';
import ProductDetail from './components/screen/product-detail/ProductDetail';

function App(props) {
    const { token, setToken, removeToken } = useToken()
    const [ cart, setCart ] = useState([])
    const [ showMessage, setShowMessage ] = useState("")
    const [ cartItem, setCartItem ] = useState(null)

    const totalPrice = () => cart.reduce((prev, total) => prev + (total.price * total.count), 0)

    const addToCart = (product) => {
        setCart((prevState) => {
            // Check item is existed
            let product_id = prevState.findIndex(item => item.id === product.id)
            // END
            let items = [...prevState]
            if (product_id !== -1) {
                items[product_id].count++
            } else {
                items.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    count: 1
                })
            }
            return items
        })
    }

    const deleteCartItem = (id) => {
        setCart((prevState) => {
            let items = [...prevState]
            let index = items.findIndex(item => item.id === id)
            items.splice(index, 1)
            return items
        })
    }

    const updateProductQuatity = (arrow, type, product_id) => {
        if (arrow) {
            setCart(prevState => {
                let items = [...prevState]
                let index = prevState.findIndex(item => item.id === product_id)
                if (type === "plus") items[index].count++
                else if (type === "minus") {
                    if (items[index].count === 1) {
                        setShowMessage("Remove CartItem?")
                        setCartItem(product_id)
                    } else {
                        items[index].count--
                    }
                }
                return items
            })
        } else {
            let value = type
            setCart(prevState => {
                let items = [...prevState]
                let index = prevState.findIndex(item => item.id === product_id)
                if (isNaN(value)) {
                    setShowMessage("Remove CartItem?")
                    setCartItem(product_id)
                } else {
                    items[index].count = value
                }
                return items
            })
        }
    }

    return (
        <div>
            {(showMessage !== "") && <Message message={showMessage} setShowMessage={setShowMessage} deleteCartItem={deleteCartItem} cartItem={cartItem} />}
            <BrowserRouter>
                <ScrollToTop/>
                <Routes>
                    <Route element={<Header cart={cart} setCart={setCart} totalPrice={totalPrice()} deleteCartItem={deleteCartItem} token={token} removeToken={removeToken}/>}>
                        <Route
                            path='/'
                            element={<Home setCart={setCart} title="Trang chủ" addToCart={addToCart} />}
                        />
                        <Route
                            path='/login'
                            element={ (token) ? (<Navigate replace to="/" />) : <Login title="Đăng nhập - Đăng kí" setToken={setToken} />}
                        />
                        <Route
                            path='/category'
                            element={<Category setCart={setCart} title="Sản phẩm" addToCart={addToCart} />}
                        />
                        <Route
                            path='/faq'
                            element={<FAQ title="Mẹo và các câu hỏi thường gặp" /> }
                        />
                        <Route
                            path='/contact'
                            element={<Contact title="Liên hệ" />}
                        />
                        <Route
                            path='/profile'//unit test: login + cart (add, update, delete) + getdata
                            element={ (!token) ? (<Navigate replace to="/login" />) : <UpdateProfile title="Cập nhật tài khoản" /> }
                        />
                        <Route
                            path='/shopping-cart'
                            element={ (!token) ? (<Navigate replace to="/login" />) : <ShoppingCart deleteCartItem={deleteCartItem} totalPrice={totalPrice()} cart={cart} setCart={setCart} title="Giỏ hàng" updateProductQuatity={updateProductQuatity} />}
                        />
                        <Route
                            path='/product/:productId'
                            element={ (!token) ? (<Navigate replace to="/login" />) : <ProductDetail setCart={setCart} addToCart={addToCart}/> }
                        />
                        <Route
                            path='*'
                            element={<NotFound title="Không tìm thấy trang" />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
    
}

export default App;
