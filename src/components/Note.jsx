import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import { useState } from "react";

const Note = (props) =>{

  
    const deleteNote = () => {
        props.deleteItem(props.id);
    };
    
    return(
        <>
            <div className="note" style={{height:"auto"}}>
                 <h1> {props.title} </h1>
                 <p> {props.content} </p>
                 <IconButton 
                 className="btn"
                 onClick={deleteNote}>
                    <DeleteOutlineIcon className="deleteIcon" />
                 </IconButton>
            </div>

        </>
    );
};

export default Note;