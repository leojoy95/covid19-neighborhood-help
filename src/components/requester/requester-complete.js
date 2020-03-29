
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  useRouteMatch
} from "react-router-dom";


import { useTranslation, withTranslation, Trans } from 'react-i18next';

// Images
import requestIcon from '../../assets/img/requester.svg';


// Volunteer Page
export class RequesterComplete extends React.Component {

  render () {
    return (
      <React.Fragment>
        <Page />
      </React.Fragment>
    );
  }
}


// page uses the hook
function Page() {
  const { t, i18n } = useTranslation();

  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
      <React.Fragment>
        <header>
          <div className="container">
            <Link className="back-link" to={`/`}>Back Home.</Link>
            <h3>
              <Trans i18nKey="requester.complete.request_sent" >
                Hello <strong>{{name}}</strong>.
              </Trans>
            </h3>
            <p>{t('requester.complete.description')}</p>
          </div>
        </header>        
      </React.Fragment>
      
  );
}



