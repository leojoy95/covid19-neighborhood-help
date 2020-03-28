import React, {Suspense} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import FirebaseProvider  from './context/firebase';
import { RequesterPage } from './components/requester/requester-page';
import { VolunteerPage } from './components/volunteer/volunteer-page';
import { useTranslation, Trans } from 'react-i18next';

// Images
import requestIcon from './assets/img/requester.svg';


// page uses the hook
function LanguageToggle() {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
      <div className="language-selection-container">
        <button onClick={() => changeLanguage('de')}>de</button>
        <button onClick={() => changeLanguage('en')}>en</button>
      </div>
  );
}


export default function App() {

  return (

      <FirebaseProvider>
        
        <Router>
          <header>
            <Link className="logo" to="/">[Logo]</Link>
            <LanguageToggle />
          </header>
            <Switch>
              <Route path="/request">
                <RequesterPage />
              </Route>
            
              <Route path="/volunteer">
                <VolunteerPage />
              </Route>

              <Route path="/">
                <Home />
              </Route>

            </Switch>

        </Router>
      </FirebaseProvider>
  );
}





function Home() {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <React.Fragment>
      <h2>{t('home.connecting_those_affected')}</h2>
      <h3>{t('home.what_would_you_like_to_do')}</h3>
      
      <nav>
        <Link className="bucket bucket-link" to="/request">
          <img src={requestIcon} alt="Request Icon" />
          {t('home.i_need_help')}
        </Link>
        <Link className="bucket bucket-link" to="/volunteer">
          <img src={requestIcon} alt="Request Icon" />
          {t('home.i_want_to_help')}
        </Link>
      </nav>
    </React.Fragment>
  );
}



















