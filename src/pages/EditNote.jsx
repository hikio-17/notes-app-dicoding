import React from 'react';
import '../styles/addNote.css';
import { getNote } from '../utils/network-data';
import { useNavigate, useParams } from 'react-router-dom';
import parser from 'html-react-parser';
import useInput from './../hooks/useInput';

function EditNote() {
   const navigate = useNavigate();
   const { id } = useParams();
   const [note, setNote] = React.useState(null);
   const [title, onTitleChange] = useInput('');
   const [body, setBody] = React.useState('');

   React.useEffect(() => {
      async function fetchGetNote() {
         const { error, data } = await getNote(id);

         if (!error) {
            setNote(data);
         }
      }

      fetchGetNote();
   }, []);

   function onSubmitHandler() {
      alert({
         message: 'Fungsinya masih belum disediakan',
         data: {
            title,
            body
         }
      });
      navigate('/')
   }

   function onInputHandler(event) {
      setBody(event.target.innerHTML)
   }

   return (
      <section className='add-note'>
        <h3>Edit Note</h3>
        {note && <div className='form-add-note'>
          <input
            type='text'
            placeholder='Title...'
            value={note.title}
            onChange={onTitleChange}
          />
          <div className='body'>
            <div
              className='input-body'
              contentEditable
              onInput={onInputHandler}
              suppressContentEditableWarning={true}
            >
              {parser(note.body)}
            </div>
            <button
              id='btn-save'
              onClick={onSubmitHandler}
            >
              Save
            </button>
          </div>
        </div>}
      </section>
    )
}

export default EditNote;