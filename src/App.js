
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Main } from './components/Main';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Navigation/>
      <Main/>
      <Footer/>
    </div>
  )
}



export default App;
