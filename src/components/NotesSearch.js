import React from 'react';
import './App.css';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import * as actions from "../store/actions";
import './App.css';


const mapStateToProps = state => ({ notes: state.notes });

const mapDispatchToProps = dispatch => {
  return {...bindActionCreators(actions, dispatch)};
};


function NotesSearch(props) {
    const onSearch = (ev) => {
        props.searchText(ev.target.value);
    }

  return (
    <div className="notesBody">
    <input className="notesSearchInput" type="search" placeholder="Search..." onChange={(ev) => {onSearch(ev)}}/>
      </div>
      
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesSearch);
