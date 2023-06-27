import React from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { useState } from "react";
import SideBar from "./SideBar";


const App = () => {
    const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {
        // alert(" i am clicked ");
        setAddItem((prevData) => {
            return [...prevData, note];
        });
    };

    const onDelete = (id) => {
        setAddItem((old) =>
            old.filter((currData, index) => {
                return index !== id;
            })
        );
    };

    return (
        <>
            <Header />
            <div className="main-div">
                <div className="side-div">
                     <SideBar/>
                </div>
                <div className="note-div">
                    <CreateNote passNote={addNote} />
                    <div className="notes">
                        {addItem.map((val, index) => {
                            return (
                                <Note
                                    key={index}
                                    id={index}
                                    title={val.title}
                                    content={val.content}
                                    deleteItem={onDelete}
                                />
                            );
                        })}
                    </div>

                </div>
            </div>
        </>
    );
};

export default App;