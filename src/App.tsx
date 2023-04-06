import { BrowserRouter } from 'react-router-dom';
import './App.css';
import IndexRoute from './Routes/IndexRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
        <IndexRoute/>
      </BrowserRouter>
    </div>
  );
}

export default App;
