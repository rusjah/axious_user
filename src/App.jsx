import './App.css';
import { Route, Routes } from 'react-router-dom';

import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Users from './components/pages/Users';
import User from './components/pages/User';

function App() {
  return (
    <div className="App box-border"  data-theme="dark">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/user' element={<User />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
