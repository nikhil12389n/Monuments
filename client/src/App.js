import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import Homescreen from './screens/Homescreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/LoginScreen';
import { BrowserRouter , Route,Routes,Router, Link, Switch } from 'react-router-dom'
import CartScreen from './screens/CartScreen';
import Adminscreen from './screens/Adminscreen';
import Userlist from './screens/Userlist';
import Monumentlist from './screens/Monumentlist';
import Addnewmonument from './screens/Addnewmonument';
import Editmonument from './screens/Editmonument';

function App() {
  
  return (
    
    <div className="App">
      <NavBar />
      {/* <Homescreen/>
      <cartScreen/> */}
      <BrowserRouter>
      
      <Routes>
      <Route path='/admin/addnewmonumentlist' element={<Addnewmonument/>}/>
        <Route path='/admin/monumentlist' element={<Monumentlist/>}/>
        <Route path='/admin/editmonument/:monumentid' element={<Editmonument/>}/>
        <Route path='/'  element={<Homescreen/>}/>
        <Route path='/admin/userlist' element={<Userlist/>}/>
        <Route path='/cart'  element={<CartScreen/>}/>
        <Route path='/register' element={<Registerscreen/>}/>
        <Route path='/login' element={<Loginscreen/>}/>
        <Route path='/admin' element={<Adminscreen/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
