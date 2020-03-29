
import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Link,
  useRouteMatch
} from "react-router-dom";


import {Carousel} from '../carousel';
import { useTranslation, withTranslation, Trans } from 'react-i18next';

// Images
import requestIcon from '../../assets/img/requester.svg';


// Volunteer Page
export class RequesterHowItWorks extends React.Component {

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
  let match = useRouteMatch();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
      <React.Fragment>
        
        <Link to={`/`}>Back</Link>
        <h2>{t('how_it_works.title')}</h2>
        <img src={requestIcon} alt="Request Icon" />
        <h3>{t('requester.how_it_works.step_1.title')}</h3>
        <p>{t('requester.how_it_works.step_1.description')}</p>

        <Link to={`step-1`}>Skip and submit a request</Link>
      </React.Fragment>
  );
}



