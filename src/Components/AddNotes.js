import React from 'react'

function AddNotes(props) {
  const { title, desc, setTitle, setDesc, addNotes, clear, time, date } = props;

  return (
    <div id='add' className='container'>
      <div className="row">
        <div className="col-3 text-center" style={{ paddingTop: "18px" }}>
          <b>Date: {date}</b>
        </div>
        <div className="col-6 text-center" style={{ fontSize: "50px" }}>
          <b>Add <span style={{ color: '#F83B3D' }}>Note</span></b>        </div>
        <div className="col-3 text-center" style={{ paddingTop: "18px" }}>
          <b>Time: {time}</b>
        </div>
      </div>
      <div className="row">
        <div className='col'>
          <div>
            <div className='container my-3'>
              <h2 style={{ fontWeight: "600" }}>Your Text Summary</h2>
              <p>{(title.split(/\s+/).filter((element) => { return element.length !== 0 }).length) + (desc.split(/\s+/).filter((element) => { return element.length !== 0 }).length)} words and {(title.length) + (desc.length)} characters</p>
              <p>{0.008 * desc.split(" ").length} munites will take to read the note</p>
              <h2 style={{ fontWeight: "600" }}>Preview</h2>
              <h3>{title.length > 0 ? title : "Write something on title to preview"}</h3>
              <p>{desc.length > 0 ? desc : "Write something on description to preview"}</p>
            </div>
          </div>
        </div>
        <div className='col'>
          <form action='' method=''>
            <input className='title' type='text' value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder='Note Title' />
            <textarea className='desc' rows={10} value={desc} onChange={(e) => { setDesc(e.target.value) }} placeholder='Note Description' />
            <div>
              <button onClick={addNotes}>Add</button>
              <button onClick={clear}>Clear</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddNotes
