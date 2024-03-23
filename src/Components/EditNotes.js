import React from 'react'
import { useNavigate } from 'react-router-dom';

function EditNotes(props) {
    const navigate = useNavigate();

    const { newTitle, newDesc, setNewTitle, setNewDesc, save, clear, date, time } = props;

    const onSave = (e) => {
        save(e);

        if (newTitle.length > 0 && newDesc.length > 0) {
            navigate('/notes');
        }
    }

    const onCancel = () => {
        navigate('/notes');
    }

    return (
        <div id='add' className='container'>
            <div className="row">
                <div className="col-3 text-center" style={{ paddingTop: "18px" }}>
                    <b>Date: {date}</b>
                </div>
                <div className="col-6 text-center" style={{ fontSize: "50px" }}>
                    <b>Edit <span style={{ color: '#F83B3D' }}>Note</span></b>
                </div>
                <div className="col-3 text-center" style={{ paddingTop: "18px" }}>
                    <b>Time: {time}</b>
                </div>
            </div>
            <div className="row">
                <div className='col'>
                    <div>
                        <div className='container my-3'>
                            <h2 style={{ fontWeight: "600" }}>Your Text Summary</h2>
                            <p>{(newTitle.split(/\s+/).filter((element) => { return element.length !== 0 }).length) + (newDesc.split(/\s+/).filter((element) => { return element.length !== 0 }).length)} words and {(newTitle.length) + (newDesc.length)} characters</p>
                            <p>{0.008 * newDesc.split(" ").length} munites will take to read the note</p>
                            <h2 style={{ fontWeight: "600" }}>Preview</h2>
                            <h3>{newTitle.length > 0 ? newTitle : "Write something to preview"}</h3>
                            <p>{newDesc.length > 0 ? newDesc : "Write something to preview"}</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <form action='' method=''>
                        <input className='title' type='text' value={newTitle} onChange={(e) => { setNewTitle(e.target.value) }} />
                        <textarea className='desc' rows={10} value={newDesc} onChange={(e) => { setNewDesc(e.target.value) }} />
                        <div>
                            <button onClick={onSave}>Save</button>
                            <button onClick={clear}>Clear</button>
                            <button onClick={onCancel}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditNotes
