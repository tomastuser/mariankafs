import React from 'react';

import AdminNav from './AdminNav';

const Admin = () => {
  return (
    <div className='adminContainer'>
      <AdminNav />
      <div className='jumbotron'>
        <h1 className='adNadpis'>LMŠ Mariánka</h1>
        <p className='adminText'>
          Vítejte v administrační části webu LMŠ Mariánka, která slouží k
          úpravám obsahu webu. Upravujte, přidávejte nové, nebo mažte již
          existující příspěvky.
        </p>
        <br />
        <p className='adminKat'>Kategorie:</p>
        <div className='rada'>
          <div className='sloupec'>
            <div className='kartaTelo'>
              <p className='kartaNadpis'>Aktuality</p>
              <p className='kartaText'>Upravujte jednotlivé aktuality. </p>
              <div className='kartaButtonContainer'>
                <a href='/admin/aktuality' className='adminButton'>
                  Vstoupit
                </a>
              </div>
            </div>
          </div>
          <div className='sloupec'>
            <div className='kartaTelo'>
              <p className='kartaNadpis'>Tým</p>
              <p className='kartaText'>Úprava informací o členech týmu. </p>
              <div className='kartaButtonContainer'>
                <a href='/admin/tym' className='adminButton'>
                  Vstoupit
                </a>
              </div>
            </div>
          </div>
          <div className='sloupec'>
            <div className='kartaTelo'>
              <p className='kartaNadpis'>Stránky</p>
              <p className='kartaText'>Úprava textu jednotlivých stránek. </p>
              <div className='kartaButtonContainer'>
                <a href='/admin/stranky' className='adminButton'>
                  Vstoupit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
