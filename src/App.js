import React, { useState } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/notfound/NotFound';
import Category from './components/category/Category';
import FAQ from './components/faq/FAQ';
import Contact from './components/contact/Contact';
import Login from './components/user/login/Login';
import UpdateProfile from './components/user/profile/UpdateProfile';
import ShoppingCart from './components/cart/ShoppingCart';
import Message from './components/message/Message';

function App(props) {
    const [ cart, setCart ] = useState([])
    const [ showMessage, setShowMessage ] = useState("")
    const [ delCartItem, setDelCartItem ] = useState(null)

    const totalPrice = () => cart.reduce((prev, total) => prev + (total.price * total.count), 0)

    const deleteCartItem = (id) => {
        setCart((prevState) => {
            let items = [...prevState]
            let index = items.findIndex(item => item.id === id)
            items.splice(index, 1)
            return items
        })
    }

    return (
        <div>
            {(showMessage !== "") && <Message message={showMessage} setShowMessage={setShowMessage} deleteCartItem={deleteCartItem} delCartItem={delCartItem} />}
            <BrowserRouter>
                <Header cart={cart} setCart={setCart} totalPrice={totalPrice()} deleteCartItem={deleteCartItem}/>
                <Routes>
                    <Route path='/' element={<Home cart={cart} setCart={setCart} title="Trang chủ" />}/>
                    <Route path='/login' element={<Login title="Đăng nhập - Đăng kí"/>}/>
                    <Route path='/category' element={<Category cart={cart} setCart={setCart} title="Sản phẩm" />}/>
                    <Route path='/faq' element={<FAQ title="Mẹo và các câu hỏi thường gặp"/>}/>
                    <Route path='/contact' element={<Contact title="Liên hệ"/>}/>
                    <Route path='/profile' element={<UpdateProfile title="Cập nhật tài khoản"/>}/>
                    <Route path='/shopping-cart' element={<ShoppingCart cart={cart} setCart={setCart} setShowMessage={setShowMessage} setDelCartItem={setDelCartItem} title="Giỏ hàng"/>}/>
                    <Route path='*' element={<NotFound title="Không tìm thấy trang"/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
    
}

export default App;
