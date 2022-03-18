import CheckoutPage from './Components/CheckoutPage/checkoutPage';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './Components/Signin';
import SignUp from './Components/Signup';
import { useEffect } from 'react';
import { auth } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import Checkout from './Components/CheckoutForm/Checkout';
import './App.css';

function App() {
  const [{ user }, dispatch] = useStateValue();

    useEffect(()=>{
      auth.onAuthStateChanged((authUser)=>{
        console.log(authUser);
        if(authUser){
          dispatch({
            type: actionTypes.SET_USER,
            user: authUser,
          })
        }
      })
    },[])

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path='/signup' element={<SignUp />}>
          </Route>
        <Route path='/signin' element={<SignIn />}>
          </Route>      
          <Route path='/checkout' element={<Checkout /> }>
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
