import React from 'react';
import NotesListPanel from './notesListPanel';
import NotesContentPanel from './notesContentPanel';
import './App.css';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import * as actions from "../store/actions";


const mapStateToProps = state => ({ notes: state.notes });

const mapDispatchToProps = dispatch => {
  return {...bindActionCreators(actions, dispatch)};
};


function NotesBody(props) {
  const [contentToDisplay, setContentToDisplay] = React.useState("");
const [titleIsFocused, setTitleIsFocused] = React.useState(false);
const [contentIsFocused, setContentIsFocused] = React.useState(false);

  const clickNotes = (ev, value) => {
     let noteObj = props.notes.find((obj) => obj.id === value);
      setContentToDisplay(noteObj);
  };

  const onTitleClick = () => {
      setTitleIsFocused(true);
      setContentIsFocused(false);
};

const onTitleBlur = () => {
  setTitleIsFocused(false);
};

const deleteNote = () => {
  props.deleteNote(contentToDisplay.id);
  setContentToDisplay(undefined);
}

const createNote = () => {
  props.createNewNote();
  setContentToDisplay(props.notes[props.notes.length]);
}

const changeTitle = (ev) => {
  let listOfNotesState = [...props.notes];
  let selectedContent = contentToDisplay.id;
  let contentToUpdate = listOfNotesState.find((obj) => obj.id === selectedContent);
  if (contentToUpdate) {
    contentToUpdate.title = ev.target.value;
    setContentToDisplay(contentToUpdate);
  }
  props.updateNotes(listOfNotesState);
};

const onContentClick = () => {
  setTitleIsFocused(false);
  setContentIsFocused(true);
};

const onContentBlur = () => {
  setContentIsFocused(false);
};

const changeContent= (ev) => {
  let listOfNotesState = [...props.notes];
  let selectedContent = contentToDisplay.id;
  let contentToUpdate = listOfNotesState.find((obj) => obj.id === selectedContent);
  if (contentToUpdate) {
  contentToUpdate.content = ev.target.value;
  setContentToDisplay(contentToUpdate);
  }
  props.updateNotes(listOfNotesState);
};


  return (
    <div className="notesBody">
      <div className="notes">
      <NotesListPanel clickNotes={clickNotes} createNote={createNote}></NotesListPanel>
      </div>
      <div className="notesContent">
      <NotesContentPanel  
        contentToDisplay={contentToDisplay}
        onTitleClick={onTitleClick}
        titleIsFocused={titleIsFocused}
        onTitleBlur={onTitleBlur}
        changeTitle={changeTitle}
        onContentClick={onContentClick}
        contentIsFocused={contentIsFocused}
        onContentBlur={onContentBlur}
        changeContent={changeContent}
        deleteNote={deleteNote}>
      </NotesContentPanel>
      </div>
      </div>
      
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesBody);
