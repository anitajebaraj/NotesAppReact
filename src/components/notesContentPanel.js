import React from 'react';
import './App.css';

function NotesContentPanel(props) {
  const title =props.contentToDisplay && props.contentToDisplay.title && props.contentToDisplay.title.length > 0 ? props.contentToDisplay.title : "Enter title here";
    return (
        <div className="notesContentTopDiv">
        <div className="notesContentLeftDiv">
            {props.titleIsFocused ? (
                <div className="notesContentDiv">
                <input
                    type="text"
                    style={{ marginTop: "30px"}}
                    onChange={(ev) => {
                        props.changeTitle(ev);
                    }}
                    placeholder="Enter title here"
                    onBlur={props.onTitleBlur}
                    value={props.contentToDisplay.title}
                ></input>
                </div>
            ) : (
				
               		<div className="notesContentTitle" onClick={props.onTitleClick}>
                       {props.contentToDisplay && <p>{title}</p>}
                	</div>
            )}
            </div>
            <div className="notesListDivRight">
            <button onClick={() => props.deleteNote()} type="submit">Delete</button>
            </div>

            {props.contentIsFocused ? (
                <div className="notesContentDiv">
                <textarea
                style={{ width: "300px", height: "100px" }}
                    type="text"
                    placeholder="Enter notes here"
                    onChange={(ev) => {
                        props.changeContent(ev);
                    }}
                    onBlur={props.onContentBlur}
                    value={props.contentToDisplay.content}
                ></textarea>
                </div>
            ) : (
                <div className="notesContentDisplay" onClick={props.onContentClick}>
                {props.contentToDisplay && <p>{props.contentToDisplay.content && props.contentToDisplay.content.length > 0 ? props.contentToDisplay.content : "Enter content"}</p>}
                </div>
                )}
        </div>
    );
}

export default NotesContentPanel;
