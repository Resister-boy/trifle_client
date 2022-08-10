import './scss/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './router/Home';
import About from './router/About';
import NotFound from './router/NotFound';

function App() {
  return (
    <BrowserRouter className='App'>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="*" element= { <NotFound /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
