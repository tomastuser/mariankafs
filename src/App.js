import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import { AuthProvider } from 'react-use-auth';

import './App.css';
import './slick-theme.css';
import './slick.css';

import Uvod from './components/Uvod';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';

import OMariance from './components/ONas/OMariance';
import Zazemi from './components/ONas/Zazemi';
import NasTym from './components/ONas/NasTym';
import Program from './components/ONas/Program';
import Projekty from './components/ONas/Projekty';
import Sponzori from './components/ONas/Sponzori';
import Dokumenty from './components/ONas/Dokumenty';

import Zapis from './components/Info/Zapis';
import Cenik from './components/Info/Cenik';
import CoSSebou from './components/Info/CoSSebou';
import NasePravidla from './components/Info/NasePravidla';
import Interni from './components/Info/Interni';

import Aktualita from './components/Aktuality/Aktualita';
import AktualityVse from './components/Aktuality/AktualityVse';

import DalsiAktivity from './components/DalsiAktivity/DalsiAktivity';
import Krouzky from './components/DalsiAktivity/Krouzky';
import Tabory from './components/DalsiAktivity/Tabory';
import Prednasky from './components/DalsiAktivity/Prednasky';

import Kontakt from './components/Kontakt';

import Foto from './components/Aktuality/Foto';
import ScrollToTop from './components/otherComponents/ScrollToTop';
import PageNotFound from './components/otherComponents/PageNotFound';
import AuthCallback from './components/otherComponents/AuthCallback';

import Admin from './components/Admin/Admin';
import AdminAktuality from './components/Admin/AdminAktuality';
import AdminTym from './components/Admin/AdminTym';
import AdminStranky from './components/Admin/AdminStranky';
import AdminEdit from './components/Admin/AdminEdit';
import AdminEditNew from './components/Admin/AdminEditNew';

const App = (props) => {
  const navLinks = [
    {
      name: 'O nás',
      path: '/onas',
      id: '1',
      subNavLinks: [
        {
          name: 'O Mariánce',
          path: '/onas/omariance',
        },
        {
          name: 'Zázemí',
          path: '/onas/zazemi',
        },
        {
          name: 'Náš tým',
          path: '/onas/nastym',
        },
        {
          name: 'Program',
          path: '/onas/program',
        },
        {
          name: 'Projekty',
          path: '/onas/projekty',
        },
        {
          name: 'Podporují nás',
          path: '/onas/sponzori',
        },
        {
          name: 'Dokumenty',
          path: '/onas/dokumenty',
        },
      ],
    },
    {
      name: 'Praktické informace',
      path: '/info',
      id: '2',
      subNavLinks: [
        {
          name: 'Zápis',
          path: '/info/zapis',
        },
        {
          name: 'Ceník a stravování',
          path: '/info/cenik',
        },
        {
          name: 'Co s sebou',
          path: '/info/cossebou',
        },
        {
          name: 'Naše pravidla',
          path: '/info/nasepravidla',
        },
        {
          name: 'Interni sekce',
          path: '/info/interni',
        },
      ],
    },
    {
      name: 'Aktuality',
      path: '/aktuality',
      id: '3',
      subNavLinks: [],
    },
    {
      name: 'Aktivity Kavylu',
      path: '/kavyl',
      id: '4',
      open: false,
      subNavLinks: [
        {
          name: 'Kroužky',
          path: '/kavyl/krouzky',
        },
        {
          name: 'Tábory',
          path: '/kavyl/tabory',
        },
        {
          name: 'Přednášky',
          path: '/kavyl/prednasky',
        },
      ],
    },
    {
      name: 'Kontakt',
      path: '/kontakt',
      id: '5',
      subNavLinks: [],
    },
  ];
  return (
    <>
      <ScrollToTop />
      <AuthProvider
        navigate={props.history.push}
        auth0_domain='dev-ygeujhi0.us.auth0.com'
        auth0_client_id='x3qt8REWr7UFOz7tFq0mEP83tT0Xxff8'
      >
        <Switch>
          <Route exact path='/admin' component={Admin} />
          <Route exact path='/admin/aktuality' component={AdminAktuality} />
          <Route exact path='/admin/tym' component={AdminTym} />
          <Route exact path='/admin/stranky' component={AdminStranky} />
          <Route exact path='/admin/editnew' component={AdminEditNew} />
          <Route path='/admin/edit' component={AdminEdit} />
          <div className='App'>
            <Nav navLinks={navLinks} />
            <div className='navSpacerAtTheTop'></div>
            <main>
              <Route path='/' exact component={Uvod} />
              <Route path='/onas' exact component={OMariance} />
              <Route path='/onas/omariance' exact component={OMariance} />
              <Route path='/onas/zazemi' exact component={Zazemi} />
              <Route path='/onas/nastym' exact component={NasTym} />
              <Route path='/onas/program' exact component={Program} />
              <Route path='/onas/projekty' exact component={Projekty} />
              <Route path='/onas/sponzori' exact component={Sponzori} />
              <Route path='/onas/dokumenty' exact component={Dokumenty} />

              <Route exact path='/info' component={Zapis} />
              <Route exact path='/info/zapis' component={Zapis} />
              <Route exact path='/info/cenik' exact component={Cenik} />
              <Route exact path='/info/cossebou' component={CoSSebou} />
              <Route exact path='/info/nasepravidla' component={NasePravidla} />
              <Route exact path='/info/interni' component={Interni} />

              <Route path='/aktuality' exact component={AktualityVse} />
              <Route exact path='/aktuality/:id' component={Aktualita} />
              <Route
                exact
                path='/aktuality/strana/:id'
                component={AktualityVse}
              />

              <Route exact path='/kavyl' component={DalsiAktivity} />
              <Route exact path='/kavyl/krouzky' component={Krouzky} />
              <Route exact path='/kavyl/tabory' component={Tabory} />
              <Route exact path='/kavyl/prednasky' component={Prednasky} />

              <Route exact path='/kontakt' exact component={Kontakt} />

              <Route exact path='/images/:id' component={Foto} />
              <Route path='/auth0_callback' component={AuthCallback} />
            </main>

            <Footer />
            <Footer2 />
          </div>
        </Switch>
      </AuthProvider>
    </>
  );
};

export default withRouter(App);
