import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Users from './components/pages/Users';
import UserPosts from './components/pages/UserPosts';

function App() {
  const [userID, setUserID] = useState('');
 

  return (
    <div className="App box-border"  data-theme="dark">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users setUserID={setUserID} />} />
        <Route path='/userPosts' element={<UserPosts userID={userID}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
