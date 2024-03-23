import React from 'react'
import coverImage from './assets/cover.jpg'
import write from './assets/writeNotes.png'
import notes from './assets/notes.png'
import edit from './assets/edit.png'
import remove from './assets/remove.png'
import one from './assets/notepad-coffee.jpg'
import two from './assets/notepad-human.jpg'
import three from './assets/notepad-phone.jpg'

function Home(props) {
  const { time, date } = props;

  return (
    <div id='home'>
      <div className="container">
        <div className="row">
          <div className="col-3 text-center" style={{ paddingTop: "18px" }}>
            <b>Date: {date}</b>
          </div>
          <div className="col-6 text-center" style={{ fontSize: "50px" }}>
            <b>Note<span style={{ color: '#F83B3D' }}>Book</span></b>
          </div>
          <div className="col-3 text-center" style={{ paddingTop: "18px" }}>
            <b>Time: {time}</b>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <p>A <span style={{ color: '#F83B3D' }}>Notebook</span> Is A <span style={{ color: '#F83B3D' }}>Canvas</span> For The <span style={{ color: '#F83B3D' }}>Mind</span>, Where <span style={{ color: '#F83B3D' }}>Ideas</span> Come To <span style={{ color: '#F83B3D' }}>Life</span>.</p>
          </div>
          <div className='col-6 p-4'>
            <img src={coverImage} alt="" />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <img src={one} alt='...' height={'100%'} width={'100%'} />
          </div>
          <div className='col'>
            <img src={two} alt='...' height={'100%'} width={'100%'} />
          </div>
          <div className='col'>
            <img src={three} alt='...' height={'100%'} width={'100%'} />
          </div>
        </div>
        <div className='row'>
          <div className='col text-center p-4'>
            <h1>Feat<span style={{ color: '#F83B3D' }}>ures</span></h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-3'>
            <div className="card" style={{ width: '92%' }}>
              <img src={write} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text text-center">Write</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className="card" style={{ width: '92%' }}>
              <img src={notes} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text text-center">Read</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className="card" style={{ width: '92%' }}>
              <img src={edit} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text text-center">Edit</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className="card" style={{ width: '92%' }}>
              <img src={remove} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text text-center">Remove</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <p>
              You can write and save your notes on it.
              It will save your notes with some important informations like saving date and time.
              It helps you to find out your special day.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
