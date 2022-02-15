import logo from './logo.svg';
import './App.css';
import {Homepage} from './Pages/HomePage/homepage'
import { About } from './Pages/About Us/About';
import Contact from './Pages/Contact/Contact';
import Service from './Pages/Service/Service';
import Custom from './Pages/Custom/Custom';
import Ecommerce from './Pages/Ecommerce/Ecommerce';
import LogoDesign from './Pages/Logo design/LogoDesign';
import MobileApp from './Pages/MobileApp/MobileApp';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignupModal from './Pages/Sign up/SignupModal';
import Signin from './Pages/Sign in/Signin';
import Signup from './Pages/Sign up/Signup';

function App() {
  return (
    <div >

      <Routes>
        <Route path="/" element={<Homepage/>}>
          
        </Route>
        <Route path="/about" element={<About/>}>
          
        </Route>
        <Route path="/contact" element={ <Contact/>}>
         
        </Route>
        <Route path="/services" element={<Service/>}>
          
        </Route>
        <Route path="/custom" element={ <Custom/>}>
         
        </Route>
        <Route path="/ecommerce" element={ <Ecommerce/>}>
         
        </Route>
        <Route path="/logo" element={<LogoDesign/>}>
          
        </Route>
        <Route path="/mobile" element={ <MobileApp/>}>
         
        </Route>

        <Route path="/signupModal" element={<SignupModal/>}>

        </Route>
        <Route path="/signin" element={<Signin/>}>

        </Route>
        <Route path="/signup" element={<Signup/>}>

        </Route>
      </Routes>
      

    </div>
  );
}

export default App;

