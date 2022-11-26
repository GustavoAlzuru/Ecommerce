import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Public from './Routes/Public';
import AuthProvider from './Context/AuthContext';
import CartProvider from "./Context/CartContext";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <CartProvider>
            <Public/>
          </CartProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
