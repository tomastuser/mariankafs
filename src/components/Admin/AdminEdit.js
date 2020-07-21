import React, { useState, useEffect } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import AdminNav from './AdminNav';

const Edit = () => {
  const [editor, setEditor] = useState();
  const [editorData, setEditorData] = useState('');
  const [apiData, setApiData] = useState();
  const [nazev, setNazev] = useState('');
  const [apiImage, setImage] = useState('');

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const kategorie = urlParams.get('kategorie');

  useEffect(() => {
    fetch(`http://localhost:5000/api/${kategorie}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
        setNazev(data.name);
        setImage(data.image);
        setEditorData(data.text);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submitChanges = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/api/${kategorie}/${id}`, {
      method: 'PUT',
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

  const deletePost = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/api/${kategorie}/${id}`, {
      method: 'DELETE',
      redirect: 'follow',
    })
      .then((res) => res.json())
      .then(() => (window.location.href = `/admin/${kategorie}`));
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
        <h2 className='adNadpis'>Úprava příspěvku</h2>
        <div className='formBlock'>
          <label className='adminText'>Název:</label>
          <input
            type='text'
            className='formControl'
            id='name'
            value={nazev}
            onChange={handleNazevChange}
          />
        </div>
        <div className='adminText'>Text:</div>
        <CKEditor
          editor={ClassicEditor}
          data={editorData}
          onInit={(editor) => {
            setEditor(editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setEditorData(data);
          }}
        />
        <br />
        <div className='formBlock'>
          <label className='adminText'>Adresa obrázku:</label>
          <input
            type='text'
            className='formControl'
            id='imageURL'
            value={apiImage}
            onBlur={handleImageChange}
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
        <div className='sloupec vlevo'>
          <button className='adminButtonLarge danger' onClick={deletePost}>
            Vymazat
          </button>
        </div>
        <div className='sloupec stred'>
          <button className='adminButtonLarge' onClick={goBack}>
            Zpět
          </button>
        </div>
        <div className='sloupec vpravo'>
          <button className='adminButtonLarge' onClick={submitChanges}>
            Potvrdit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
