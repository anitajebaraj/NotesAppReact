import './App.css';
import Header from "./header";
import NotesBody from "./notesBody";
import NotesSearch from "./NotesSearch";

function App() {
  
  return (
    <div className="App">
      <div className="App-header">
        <Header></Header>
        <NotesSearch></NotesSearch>
        <NotesBody></NotesBody>
      </div>
    </div>
  );
}

export default App;
