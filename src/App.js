import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Main } from './pages/Main';
import { Career } from './pages/Career';
import { Flex } from './pages/Flex';
import { SelfD } from './pages/Seld-d';
import { Tests } from './pages/Tests';
import ScrollButton from './components/ScrollBtn';

function App() {
  return (
    <>
      <Navbar/>
      <ScrollButton/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/career' element={<Career/>} />
        <Route path='/flex' element={<Flex/>} />
        <Route path='/self-d' element={<SelfD/>} />
        <Route path='/tests' element={<Tests/>} />
      </Routes> 
      <Footer/>
    </>
  );
}

export default App;
