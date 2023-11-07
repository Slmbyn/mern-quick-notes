import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

export default function App() {
  const [user, setUser] = useState({})
  return (
    <main className="App">
      { user ? 
      <Routes>
        <Route path='/orders/new' element={ <NewOrderPage /> }/>
        <Route path='/orders' element={ <OrderHistoryPage /> }/>
      </Routes> 
      : 
      <AuthPage /> }
    </main>
  );
}