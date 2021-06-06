import React, { useEffect } from 'react';
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import MassageContainer from './containers/MassageContainer';
import CartContainer from './containers/CartContainer';
import Footer from './components/Footer';

export default function App () {
    
    useEffect(() => {
        setTimeout(()=>{
            alert('Chào mừng bạn đến với Cửa Hàng của Tiến');
        } , 2500);
    });

    return (
        <div>
        <Header/>
        <main id="mainContainer">
            <div className="container">

                <ProductsContainer/>
                <MassageContainer/>
                <CartContainer/>
            
            </div>
        </main>
        <Footer/>
    </div>
    );
};

