import React, { useState } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './components/notfound/NotFound';
import Category from './components/category/Category';
import FAQ from './components/faq/FAQ';
import Contact from './components/contact/Contact';
import Login from './components/user/login/Login';
import UpdateProfile from './components/user/profile/UpdateProfile';
import ShoppingCart from './components/cart/ShoppingCart';
import Message from './components/message/Message';
import useToken from './auth/useToken';
import ScrollToTop from './ScrollToTop';

function App(props) {
    const { token, setToken, removeToken } = useToken()
    const [ cart, setCart ] = useState([])
    const [ showMessage, setShowMessage ] = useState("")
    const [ cartItem, setCartItem ] = useState(null)

    const totalPrice = () => cart.reduce((prev, total) => prev + (total.price * total.count), 0)

    const deleteCartItem = (id) => {
        setCart((prevState) => {
            let items = [...prevState]
            let index = items.findIndex(item => item.id === id)
            items.splice(index, 1)
            return items
        })
    }

    const updateProductQuatity = (type, product_id) => {
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
    }

    return (
        <div>
            {(showMessage !== "") && <Message message={showMessage} setShowMessage={setShowMessage} deleteCartItem={deleteCartItem} cartItem={cartItem} />}
            <BrowserRouter>
            <ScrollToTop/>
                <Header cart={cart} setCart={setCart} totalPrice={totalPrice()} deleteCartItem={deleteCartItem} token={token} removeToken={removeToken}/>
                <Routes>
                    <Route
                        path='/'
                        element={<Home setCart={setCart} title="Trang chủ" />}
                    />
                    <Route
                        path='/login'
                        element={ (token) ? (<Navigate replace to="/" />) : <Login title="Đăng nhập - Đăng kí" setToken={setToken} />}
                    />
                    <Route
                        path='/category'
                        element={<Category setCart={setCart} title="Sản phẩm" />}
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
                        path='/profile'
                        element={ (!token) ? (<Navigate replace to="/login" />) : <UpdateProfile title="Cập nhật tài khoản" /> }
                    />
                    <Route
                        path='/shopping-cart'
                        element={ (!token) ? (<Navigate replace to="/login" />) : <ShoppingCart deleteCartItem={deleteCartItem} totalPrice={totalPrice()} cart={cart} setCart={setCart} title="Giỏ hàng" updateProductQuatity={updateProductQuatity} />}
                    />
                    <Route
                        path='*'
                        element={<NotFound title="Không tìm thấy trang" />}
                    />
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
    
}

export default App;
