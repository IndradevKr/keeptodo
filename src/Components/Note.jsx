import React from "react";
import "./style.css";

function Note(props){
    function handleDelete(){
        props.onDelete(props.id)
    }
    return(

            <div className="note-box">
                <div className="note__title">{props.title}</div>
                <div className="note__content">{props.content}</div>

                <div className="delete-box">
                    <button className="delete__button" onClick={handleDelete}>Delete</button>
                </div>
            </div>

    )
}
export default Note;