import CheckoutPage from './Components/CheckoutPage/checkoutPage';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './Components/Signin';
import SignUp from './Components/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path='/signup' element={<SignUp />}>
          </Route>
        <Route path='/signin' element={<SignIn />}>
          </Route>
         
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
