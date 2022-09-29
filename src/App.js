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

function App(props) {
    const [ cart, setCart ] = useState([])
    return (
        <div>
            <BrowserRouter>
                <Header cart={cart} setCart={setCart}/>
                <Routes>
                    <Route path='/' element={<Home cart={cart} setCart={setCart}/>}/>
                    {/* <Route path='/login' element={<Login/>}/>
                    <Route path='/category' element={<Category/>}/>
                    <Route path='/faq' element={<FAQ/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='*' element={<NotFound/>}/> */}
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
