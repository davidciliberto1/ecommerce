import CheckoutCard from './Components/CheckoutCard/checkoutCard';
import CheckoutPage from './Components/CheckoutPage/checkoutPage';
import Navbar from './Components/Navbar/Navbar';
import Product from './Components/Product/Product';
import Products from './Components/Products/Products';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/checkout-page' element={<CheckoutPage />}>
          </Route>
          <Route path='/' element={<Products />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
