
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';

import Footer from './components/Footer';
import Players from './components/Players';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Navigation/>
      <Players/>
      <Footer/>
    </div>
  )
}



export default App;
