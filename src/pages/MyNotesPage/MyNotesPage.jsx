// import { checkToken } from "../../utilities/users-service"
// export default function MyNotesPage(){
//     async function handleCheckToken(){
//         const expDate = await checkToken();
//         console.log(expDate)
//     }
//     return(
//     <>
//         <h1>My Notes</h1>
//         <p>no notes</p>
//         {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
//     </>
//     )
// }

import NoteItems from "../NoteItems/NoteItems";
import NewNoteForm from "../NewNoteForm/NewNoteForm";

export default function MyNotesPage({ notes }){
    const noteList = <NoteItems />
    const noteForm = <NewNoteForm />
    return(
    <>
        <h1>My Notes</h1>
        {notes ?
            <>
            {noteForm}
            {noteList}
            </>
            :
            <>
            {noteForm}
            <h3>No Notes Yet...</h3>
            </>
        }
    </>
    )
}
// export default function MyNotesPage(){
//     const notes = <NoteItems />
//     return(
//     <>
//         <h1>My Notes</h1>
//         { notes ?
//             <>
//                 {NewNoteForm}
//                 {notes}
//             </>
//             :
//             <>
//                 {NewNoteForm}
//                 <p>no notes</p>
//             </>
            
//         }
//     </>
//     )
// }
