import {useState} from 'react'

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo (props) {
const [ modalIsOpen, setModalIsOpen] = useState(false);
//use state is a variable managed for you by react
//false as we do not want modal open upon rendering the initial screen

  function deleteHandler() {
      setModalIsOpen(true);
      
  }
  
    return (
    <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
            <button className='btn' onClick={deleteHandler}>Delete</button>
        </div>
        {modalIsOpen && <Modal /> } 
        {modalIsOpen && <Backdrop />}
      </div>
    );
}

export default Todo;