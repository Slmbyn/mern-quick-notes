import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import MyNotesPage from '../MyNotesPage/MyNotesPage';
import NewNoteForm from '../NewNoteForm/NewNoteForm';

export default function App() {
  const [user, setUser] = useState(getUser())
  const [notes, setNotes] = useState([''])
  console.log(`Value of notes from app.jsx: ${notes}`)
  function addNote (note) {
    setNotes([...notes, note])
  }
  return (
    <main className="App">
      { user ? 
      <>
        <NavBar user={ user } setUser={ setUser } />
        <Routes>
          <Route path='/notes/new' element={ <NewNoteForm addNote={addNote} /> }/>
          <Route path='/notes' element={ <MyNotesPage notes={notes} /> }/>
          {/* <Route path='/' element={ <App /> }/> */}
        </Routes> 
      </>  
      : 
      <AuthPage setUser={setUser} /> }
    </main>
  );
}