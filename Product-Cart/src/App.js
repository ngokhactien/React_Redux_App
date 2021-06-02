import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import Massage from './components/Massage';
import Cart from './components/Cart';
import Footer from './components/Footer';

export default function App () {
  return (
      <div>
      <Header/>
      <main id="mainContainer">
          <div className="container">

              <ProductsContainer/>
              <Massage/>
              <Cart/>
          
          </div>
      </main>
      <Footer/>
  </div>
  );
};

