import React from "react";
import "./Components/style.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import CreateNote from "./Components/CreateNote";

function App(){
  const [notes, setNotes] = React.useState([])

  function addNote(formData){
    setNotes(prevNotes => {
      return [...prevNotes, formData]
    })
  }
  function deleteNote(id){
    setNotes( prevNotes => {
        return  prevNotes.filter( (noteItem, index) => {
        return index !== id;
        })
    } )
  }

  return (
    <React.Fragment>
      <Header />
      <CreateNote onAdd={addNote} />
      <div className="note-container">
       {
        notes.map( (noteItem, index) => {
          return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
        } )
        } 
      </div>
      <Footer />
    </React.Fragment>
  )
}
export default App;