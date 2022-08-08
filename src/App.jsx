import './scss/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './router/Home';
import About from './router/About';

function App() {
  return (
    <BrowserRouter className='App'>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
