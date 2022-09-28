import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/user/login/Login';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/notfound/NotFound';
import Category from './components/category/Category';
import FAQ from './components/faq/FAQ';
import Contact from './components/contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Header/>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/login' element={<Login/>}/>
				<Route path='/category' element={<Category/>}/>
				<Route path='/faq' element={<FAQ/>}/>
				<Route path='/contact' element={<Contact/>}/>
				<Route path='*' element={<NotFound/>}/>
			</Routes>
		</BrowserRouter>
		<Footer/>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
