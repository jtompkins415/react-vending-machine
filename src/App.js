import logo from './logo.svg';
import { BrowserRouter} from 'react-router-dom';
import './App.css';

import VendingMachine from './VendingMachine';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <VendingMachine />
      </BrowserRouter>
    </div>
  );
}

export default App;
