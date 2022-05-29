import {Link, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import CreateMaki from './Components/CreateMaki';
import Cart from './Components/Cart';
import CheckOut from './Components/CheckOut';
import TrackOrder from './Components/TrackOrder';
import LoginAndReg from './Components/LoginAndReg';

function App() {



  return (
    <div className="App">
      <Routes>

      {/* CREATE a Maki */}
      <Route path='/makis' element={<CreateMaki/>}  />

       {/* Shopping Cart */}

      <Route path='/makis/cart' element={<Cart/>}  />


       {/* Check Out */}

      <Route path='/checkout' element={<CheckOut/>}  />


       {/* Track Order */}

       <Route path='/track-order' element ={< TrackOrder/>} />


       {/* Login and Registration */}

       <Route path ='/login-reg' element={<LoginAndReg/>} />






      

      





      </Routes>

    
    </div>
  );
}

export default App;
