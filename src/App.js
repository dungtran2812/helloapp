
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Players from './components/Players';
import Detail from './components/Detail';
import Contact from './components/Contact';
import ToggleButton from './components/ToggleButton';
import About from './components/About';

function App() {
  return (
    <div className='app'>
      
      <Navigation/>
          <Routes>
            <Route path='/' element={<Players />}></Route>
            
            <Route path='/detail/:id' element={<Detail/>}></Route>
            
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/about' element={<About/>}></Route>
          </Routes> 
          
      <Footer/>
      
    </div>
  )
}



export default App;
