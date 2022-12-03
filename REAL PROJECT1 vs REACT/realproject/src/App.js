import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './MyComponent/AppRoutes';

function App() {
  return (
    <div className='container bg-light'>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </div>
  );
}
export default App;
