import React from 'react';

function Kontakt() {
  return (
    <div className='mainOstatni'>
      <div className='kontakt'>
        <h1>Kontakty</h1>
        <div className='kontaktContD'>
          <div className='kontaktA'>
            <h3>Kde nás najdete</h3> <p>ulice Samoty, Brno-Líšeň</p>
            <div className='mapouterD'>
              <div className='gmapCanvas'>
                <iframe
                  id='gmapCanvas'
                  title='gmapCanvas'
                  src='https://maps.google.com/maps?q=49.2155000N%2C%2016.6988333E&t=&z=13&ie=UTF8&iwloc=&output=embed'
                  scrolling='no'
                  marginHeight={0}
                  marginWidth={0}
                  width={400}
                  height={500}
                  frameBorder={0}
                />
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '.mapouter{position:relative;text-align:right;height:500px;width:400px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:400px;}',
                }}
              />
            </div>
          </div>
          <div className='kontaktB'>
            <h3>Lesní mateřská škola Mariánka</h3>
            <ul>
              <li>školská právnická osoba</li>
              <li>Sídlo: č. p. 137, 664 06 Viničné Šumice</li>
              <li>IČ: 06 107 591</li>
              <li>ID datové schránky: 6h4qvbm</li>
              <li>č. účtu: 77996002/5500 (Raiffeisen bank)</li>
              <li>info@lesnimarianka.cz</li>
            </ul>
            <h3>Pro rodiče</h3>{' '}
            <p>
              {' '}
              Mgr. Klára Taufarová <br />
              604 536 796
            </p>
            <h3>Ředitelka</h3>{' '}
            <p>
              {' '}
              Mgr. Klára Krchňavá <br />
              777 145 343
            </p>
            <h3>Zřizovatel</h3>
            <ul>
              <li>Kavyl z.s.</li>
              <li>Sídlo: č. p. 137, 664 06 Viničné Šumice</li>
              <li>IČ: 229 09 320</li>
              <li>
                <a href='www.lesnikavyl.cz'>lesnikavyl.cz</a>
              </li>
            </ul>
            <div>
              <h3>Pracovní příležitosti</h3>
              <p>
                Máte-li zájem o spolupráci nebo stáž, kontaktujte ředitelku LMŠ
                Mariánka.
              </p>
            </div>
          </div>
        </div>
        <div className='kontaktContM'>
          <div className='kontaktB'>
            <h3>Lesní mateřská škola Mariánka</h3>
            <ul>
              <li>školská právnická osoba</li>
              <li>Sídlo: č. p. 137, 664 06 Viničné Šumice</li>
              <li>IČ: 06 107 591</li>
              <li>ID datové schránky: 6h4qvbm</li>
              <li>č. účtu: 77996002/5500 (Raiffeisen bank)</li>
              <li>info@lesnimarianka.cz</li>
            </ul>
            <h3>Pro rodiče</h3>{' '}
            <p>
              {' '}
              Mgr. Klára Taufarová <br />
              604 536 796
            </p>
            <h3>Ředitelka</h3>{' '}
            <p>
              {' '}
              Mgr. Klára Krchňavá <br />
              777 145 343
            </p>
            <h3>Zřizovatel</h3>
            <ul>
              <li>Kavyl z.s.</li>
              <li>Sídlo: č. p. 137, 664 06 Viničné Šumice</li>
              <li>IČ: 229 09 320</li>
              <li>
                <a href='www.lesnikavyl.cz'>lesnikavyl.cz</a>
              </li>
            </ul>
            <div>
              <h3>Pracovní příležitosti</h3>
              <p>
                Máte-li zájem o spolupráci nebo stáž, kontaktujte ředitelku LMŠ
                Mariánka.
              </p>
            </div>
          </div>
          <div className='kontaktA'>
            <h3>Kde nás najdete</h3> <p>ulice Samoty, Brno-Líšeň</p>
            <div className='mapouterM'>
              <div className='gmap_canvas'>
                <iframe
                  id='gmap_canvas'
                  title='gmap_canvas'
                  src='https://maps.google.com/maps?q=49.2155000N%2C%2016.6988333E&t=&z=13&ie=UTF8&iwloc=&output=embed'
                  scrolling='no'
                  marginHeight={0}
                  marginWidth={0}
                  width={320}
                  height={320}
                  frameBorder={0}
                />
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '.mapouter{position:relative;text-align:right;height:320px;width:320px;}.gmap_canvas {overflow:hidden;background:none!important;height:320px;width:320px;}',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
