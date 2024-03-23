import React from 'react'
import editIcon from './assets/edit.png'
import removeIcon from './assets/remove.png'
import { Link } from 'react-router-dom'

function note(props) {
    const { note, title, desc, date, time, deleteNotes, editNotes } = props;

    return (
        <div id='note' className="col-sm-6 mb-3 mb-sm-0 my-4">
            <div className="card m-4">
                <div className="card-body m-4">
                    <h4 className="card-title"><b>{title}</b></h4>
                    <p className="card-text">{desc}</p>
                    <p className="card-text">
                        <small className="text-body-secondary my-4">
                            On {date} at {time}
                            <Link to="/editNotes" onClick={() => { editNotes(note) }}>
                                <button type='button' className='btn btn-sm mx-2'>
                                    <img src={editIcon} alt="" height={"25px"} width={"25px"} title='Edit' />
                                </button>
                            </Link>
                            <button type='button' className='btn btn-sm' onClick={() => { deleteNotes(note) }} >
                                <img src={removeIcon} alt="" height={"25px"} width={"25px"} className='mx-2' title='Remove' />
                            </button>
                        </small>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default note
