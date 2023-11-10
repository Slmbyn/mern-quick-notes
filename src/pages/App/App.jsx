import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser())
  // const [user, setUser] = useState(null)

  return (
    <main className="App">
      { user ? 
      <>
        <NavBar user={ user } setUser={ setUser } />
        <Routes>
          <Route path='/orders/new' element={ <NewOrderPage /> }/>
          <Route path='/orders' element={ <OrderHistoryPage /> }/>
          {/* <Route path='/' element={ <App /> }/> */}
        </Routes> 
      </>  
      : 
      <AuthPage setUser={setUser} /> }
    </main>
  );
}