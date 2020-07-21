import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AdminNav from './AdminNav';

const AdminTym = () => {
  const [aktuality, setAktuality] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    axios
      .get('https://mariankafs.herokuapp.com/api/tym/')
      .then((res) => {
        setAktuality(res.data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const serazeniOdNejvyssiho = () => {
    return [].slice.call(aktuality).sort(function (a, b) {
      return b.id - a.id;
    });
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const TymZde = serazeniOdNejvyssiho().slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return (
    <div className='adminContainer'>
      <AdminNav />
      <div className='adNadpis stred mt-3'>Tým</div>
      <br />
      <div className='vpravo'>
        <form action='/admin/editnew' method='GET'>
          <input
            style={{ display: 'none' }}
            type='text'
            name='kategorie'
            value='tym'
          />
          <input
            type='submit'
            className='adminButton vpravo'
            value='Nový příspěvek'
          />
        </form>
      </div>
      <br />
      <table className='adminTable'>
        <thead>
          <tr>
            <th scope='col' className='prvniRada'>
              #
            </th>
            <th scope='col' className='prvniRada'>
              Název
            </th>
            <th scope='col' className='prvniRada'>
              Datum
            </th>
            <th scope='col' className='prvniRada'>
              Obrázek
            </th>
            <th scope='col' className='prvniRada'></th>
          </tr>
        </thead>
        <tbody id='output'>
          {TymZde.map((aktualita) => {
            return (
              <tr>
                <th scope='row'>{aktualita.id}</th>
                <td>
                  {aktualita.name.length > 20
                    ? aktualita.name.substring(0, 20) + ' ...'
                    : aktualita.name}
                </td>
                <td>{aktualita.date.substring(0, 10)}</td>
                <td>
                  <img
                    style={{
                      width: '40px',
                      height: '40px',
                      objectFit: 'cover',
                      borderRadius: '50%',
                    }}
                    src={aktualita.image}
                  ></img>
                </td>
                <td style={{ textAlign: 'right' }}>
                  <form action='/admin/edit' method='GET'>
                    <input
                      style={{ display: 'none' }}
                      type='text'
                      name='kategorie'
                      value='tym'
                    />
                    <input
                      style={{ display: 'none' }}
                      type='text'
                      name='id'
                      value={aktualita._id}
                    />
                    <input
                      type='submit'
                      className='adminButton vpravo'
                      value='Upravit'
                    />
                  </form>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTym;
