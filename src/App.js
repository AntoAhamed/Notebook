import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import AddNotes from './Components/AddNotes'
import YourNotes from './Components/YourNotes'
import EditNotes from './Components/EditNotes'
import Footer from "./Components/Footer"
import Alert from './Components/Alert'

function App() {
  //const now = new Date();

  let initNotes;
  if (localStorage.getItem("notes") === null) {
    initNotes = [];
  } else {
    initNotes = JSON.parse(localStorage.getItem("notes"));
  }

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [notes, setNotes] = useState(initNotes)
  const [toEditNote, setToEditNote] = useState({})
  const [newTitle, setNewTitle] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const [time, setTime] = useState("loading...")
  const [date, setDate] = useState('loading...')
  const [alert, setAlert] = useState(false)
  const [alertMssg, setAlertMssg] = useState('')

  const updateTimeAndDate = () => {
    const d = new Date();
    setTime(d.toLocaleTimeString());
    setDate(d.toLocaleDateString());
  }

  setInterval(updateTimeAndDate, 1000);

  //function to add note
  const addNotes = (e) => {
    e.preventDefault();

    if (title.length > 0 && desc.length > 0) {
      let sno;

      if (notes.length === 0) {
        sno = 0;
      } else {
        sno = notes[notes.length - 1].sno;
      }

      const newNote = {
        sno: sno + 1,
        title: title,
        desc: desc,
        date: date,
        time: time
      }

      setNotes([...notes, newNote]);
      setTitle('');
      setDesc('');

      setAlertMssg("Note added successfully.");
      alertSystem();
    } else {
      setAlertMssg("Title and description can't be blank.");
      alertSystem();
    }
  }

  //function to clear user inputs
  const clear = (e) => {
    e.preventDefault();

    setTitle('');
    setDesc('');
    setNewTitle('');
    setNewDesc('');
  }

  //function to delete note
  const deleteNotes = (note) => {
    setNotes(notes.filter((e) => { return e !== note; })) //filter note from existing notes
  }

  //function to edit note
  const editNotes = (note) => {
    setToEditNote(note);
    setNewTitle(note.title);
    setNewDesc(note.desc);
  }

  //function to save the edited note
  const save = async (e) => {
    e.preventDefault();

    if (newTitle.length > 0 && newDesc.length > 0) {
      let tmpNotes = notes;

      tmpNotes = tmpNotes.filter(e => e !== toEditNote); //it deletes toEditNote

      let sno;

      if (tmpNotes.length === 0) {
        sno = 0;
      } else {
        sno = tmpNotes[tmpNotes.length - 1].sno;
      }

      const editedNote = {
        sno: sno + 1,
        title: newTitle,
        desc: newDesc,
        date: date,
        time: time
      }

      tmpNotes.push(editedNote);

      setNotes(tmpNotes);

      setToEditNote({});
      setNewTitle('');
      setNewDesc('');

      setAlertMssg("Edited note saved successfully.");
      alertSystem();
    } else {
      setAlertMssg("Title and description can't be blank.");
      alertSystem();
    }
  }

  //function to show alert when needed
  const alertSystem = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }

  //everytime when notes will change, it renders and current notes will be saved in the local storage.
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])

  return (
    <div className="App">
      {alert === true ? <Alert alertMssg={alertMssg} /> : ''}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home time={time} date={date} />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="writeNotes" element={<AddNotes title={title} desc={desc} setTitle={setTitle} setDesc={setDesc} addNotes={addNotes} clear={clear} date={date} time={time} />} />
            <Route path="notes" element={<YourNotes notes={notes} deleteNotes={deleteNotes} editNotes={editNotes} date={date} time={time} />} />
            <Route path="editNotes" element={<EditNotes toEditNote={toEditNote} newTitle={newTitle} newDesc={newDesc} setNewTitle={setNewTitle} setNewDesc={setNewDesc} save={save} clear={clear} date={date} time={time} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
