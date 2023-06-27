import React from "react";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";


const CreateNote = (props) =>{

    const[expand, setExpand] = useState(false);

    const [check, setCheck] = useState(true);
    const [note, setNote] = useState({
        title:'',
        content:'',
    });

    const InputEvent = (e) => {
        // const  value = e.target.value;
        // const  name = e.target.name;

        // Object Destructoring
        const { name, value} = e.target;


        setNote((prevData) => {
            setCheck(false);
            return {
                ...prevData,
                [name]:value,
            };
        });
    };
    
    const addEvent = () => {
        if(check){
            setCheck(true);
            return;
        }
        
        props.passNote(note);
        setNote({
            title:'',
            content:'',
        });
        setCheck(true);
    };
    
    const expandIt = () => {
        setExpand(true);
        document.getElementById("formm").style= "box-shadow:5px 5px 25px -5px rgb(0,0,0,0.3);";
        document.querySelector("textarea").style= "box-shadow:none;";
    };
    
    const expandOut = () => {
        setExpand(false);
        document.getElementById("formm").style= "box-shadow:none;";
        document.querySelector("textarea").style= "box-shadow:5px 5px 25px -5px rgb(0,0,0,0.3);";
    };
    

    return(
        <>
           <div className="main_note" onDoubleClick={expandOut}>
               <form id="formm">
               {expand ?
                    <input type="text" 
                    name="title"
                    onChange={InputEvent}
                    value={note.title}
                    placeholder="Title" autoComplete="off"/>
                    : null}

                    <textarea 
                    name="content"
                    rows="" 
                    column="" 
                    placeholder="Take a note..."
                    value={note.content}
                    onChange={InputEvent}
                    onClick={expandIt}
                    ></textarea>

                    {expand ?
                    <IconButton id="btn1" onClick={addEvent}>
                           <AddIcon className="plus_sign" 
                           />
                    </IconButton>
                    :null}
               </form>
           </div>

        </>
    );
};

export default CreateNote;