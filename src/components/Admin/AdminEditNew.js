import React, { useState, useEffect } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import AdminNav from './AdminNav';

const EditNew = () => {
  const [editor, setEditor] = useState({});
  const [editorData, setEditorData] = useState('');
  const [nazev, setNazev] = useState('');
  const [apiImage, setImage] = useState('');

  const urlParams = new URLSearchParams(window.location.search);
  const kategorie = urlParams.get('kategorie');

  const submitChanges = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/api/${kategorie}/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: nazev,
        text: editorData,
        image: apiImage,
      }),
    })
      .then((res) => res.json())
      .then(() => (window.location.href = `/admin/${kategorie}`));
  };
  const goBack = (e) => {
    e.preventDefault();
    window.location.href = `/admin/${kategorie}`;
  };
  const handleNazevChange = (e) => {
    setNazev(e.target.value);
  };
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };
  return (
    <div className='adminContainer'>
      <AdminNav />
      <div>
        <h2 className='adNadpis'>Nový příspěvek</h2>
        <div className='formBlock'>
          <label className='adminText'>Název:</label>
          <input
            type='text'
            className='formControl'
            id='name'
            onChange={handleNazevChange}
          />
        </div>
        <div className='adminText'>Text:</div>
        <CKEditor
          editor={ClassicEditor}
          data=''
          onInit={(editor) => {
            setEditor(editor);
          }}
          onChange={(event, editor) => {
            setEditorData(editor.getData());
          }}
        />
        <br />
        <div className='formBlock'>
          <label className='adminText'>Adresa obrázku:</label>
          <input
            type='text'
            className='formControl'
            id='imageURL'
            onChange={handleImageChange}
          />
        </div>

        <br />
        <img
          id='image'
          style={{ width: '300px', textAlign: 'left' }}
          src={apiImage}
        ></img>
      </div>
      <div className='rada'>
        <div className='sloupec2 vlevo'>
          <button className='adminButtonLarge' onClick={goBack}>
            Zpět
          </button>
        </div>
        <div className='sloupec2 vpravo'>
          <button className='adminButtonLarge' onClick={submitChanges}>
            Potvrdit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditNew;
