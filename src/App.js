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
import { useTranslation, withTranslation, Trans } from 'react-i18next';






// Component using the Trans component
function MyComponent() {
  return (
    <Trans i18nKey="description.part1">
      To get started, edit <code>src/App.js</code> and save to reload.
    </Trans>
  );
}

// page uses the hook
function Page() {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <div className="App-header">
        <button onClick={() => changeLanguage('de')}>de</button>
        <button onClick={() => changeLanguage('en')}>en</button>
      </div>
      <div className="App-intro">
        <MyComponent />
      </div>
      <div>{t('description.part2')}</div>
    </div>
  );
}


export default function App() {

  return (

      <FirebaseProvider>
        <h1>Hello</h1>
        <Page />
        <Router>
          <div>
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
          </div>
        </Router>
      </FirebaseProvider>
  );
}





function Home() {
  return (
    <nav>
      <Link className="main-choice" to="/request">Request</Link>
      <Link className="main-choice" to="/volunteer">Volunteer</Link>
    </nav>
  );
}



















