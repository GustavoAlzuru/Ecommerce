import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Public from './Routes/Public';

function App() {
  return (
    <div className="App">
      <Router>
          <Public/>
      </Router>
    </div>
  );
}

export default App;
