import React from "react";

function CreateNote(props){

    const [formData, setFormData] = React.useState({
        title: '',
        content: ''
    })

    function handleChange(event){
        const {name, value} = event.target
        setFormData( prevFormData => {
            return {
            ...prevFormData,
            [name]: value
        }
    })
    }
    
    function handleSubmit(event){
        props.onAdd(formData)
        setFormData( prevFormData => {
            return {
                title: '',
                content: ''
            }
        } )
        event.preventDefault();
    }

    return(
        <div className="form-container">
            <div className="create-note-form">
                <form className="form">
                    <label htmlFor="note-title">Title</label> <br />
                    <input type="text" id="note-title" placeholder="Enter title"
                    name="title" value={formData.title} onChange={handleChange}
                    autoComplete="off" /> <br />
                    

                    <label htmlFor="note-content">Content</label><br />
                    <textarea name="content" id="note-content" cols="70" rows="5" placeholder="Enter content here.."
                        value={formData.content} onChange={handleChange} autoComplete="off"
                    /> <br/>
                    

                    <div className="button-container">
                    <button id="add-button" onClick={handleSubmit}>Add Note</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default CreateNote;