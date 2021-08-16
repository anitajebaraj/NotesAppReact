import React from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import * as actions from "../store/actions";
import "./App.css";


const mapStateToProps = state => ({ notes: state.notes,
search: state.search });

const mapDispatchToProps = dispatch => {
  return {...bindActionCreators(actions, dispatch)};
};


function NotesListPanel(props) {
    let notes = [];
    if (props.search.length > 0) {
        props.notes.forEach((obj) => {
            if (obj.title && obj.title.includes(props.search)) {
                notes.push(obj);
            } else if (obj.content && obj.content.includes(props.search)) {
                notes.push(obj);
            }
        })
    } else {
        notes = props.notes;
    }
  return (
      <div className="notesListTopDiv">
      <div className="notesListDivLeft">
      {notes.map((obj) => (
        <p
            onClick={(ev) => {
                props.clickNotes(ev, obj.id);
            }}
        >
            {obj.title && obj.title.length > 0 ? obj.title : "New Note"}
        </p>
    ))}
      </div>
      <div className="notesListDivRight">
        <button onClick={props.createNote} type="submit">Create</button>
      </div>
  </div>
      
  );    
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesListPanel);