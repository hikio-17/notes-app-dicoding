import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/network-data';
import useInput from '../hooks/useInput';
import LocaleContext from '../context/LocalContext';

function AddNote() {
   const navigate = useNavigate();
   const [title, onTitleChange] = useInput('');
   const [body, setBody] = useState('');

   const { language } = React.useContext(LocaleContext);

   async function onSubmitHandler() {
      const { error } = await addNote({ title, body });

      if (!error) {
        navigate('/');
      }
   }

   function onInputHandler(event) {
      setBody(event.target.innerHTML);
   }

   return (
      <section className='add-note'>
        <h3>{language === 'id' ? 'Tambah Catatan' : 'Add Note'}</h3>
        <div className='form-add-note'>
          <input
            type='text'
            placeholder='Title...'
            value={title}
            onChange={onTitleChange}
          />
          <div className='body'>
            <div
              className='input-body'
              contentEditable
              onInput={onInputHandler}
              suppressContentEditableWarning={true}
            >
              {body === '' ? 'Add your note...' : ''}
            </div>
            <button
              id='btn-save'
              onClick={onSubmitHandler}
            >
              {language === 'id' ? 'Simpan' : 'Save'}
            </button>
          </div>
        </div>
      </section>
    )
}

export default AddNote;