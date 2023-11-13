import { useState } from 'react';

export default function NewNoteForm ({ addNote }) {
    const [newNote, setNewNote] = useState([''])
    console.log(`Value of newNote from form page: ${newNote}`)

    function handleAddNote(evt) {
        evt.preventDefault();
        addNote(newNote);
        setNewNote('');
    }
    return (
        <>
            <div>New Note Form</div>
            <form onSubmit={handleAddNote}>
                <input 
                    value={newNote}
                    onChange={(evt) => setNewNote(evt.target.value)}
                    placeholder='New Note'
                    required
                    pattern='.{1,}'
                />
                <button type='submit'>Add Note</button>
            </form>
        </>
    )
}