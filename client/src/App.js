import {Link, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import CreateMaki from './Components/CreateMaki';
import Cart from './Components/Cart';
import CheckOut from './Components/CheckOut';
import TrackOrder from './Components/TrackOrder';

function App() {



  return (
    <div className="App">
      <Routes>

      {/* CREATE a Maki */}
      <Route path='/makis' element={<CreateMaki/>}  />

       {/* Shopping Cart */}

      <Route path='/makis/cart' element={<Cart/>}  />


       {/* Check Out And Creation */}

      <Route path='/checkout' element={<CheckOut/>}  />


       {/* Track Order */}

       <Route path='/track-order' element ={< TrackOrder/>} />

       {/* Track Order */}


       






      

      





      </Routes>

    
    </div>
  );
}

export default App;
