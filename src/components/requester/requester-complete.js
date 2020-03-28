
import React, { Component } from 'react';



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

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
      <React.Fragment>
        <img src={requestIcon} alt="Request Icon" />
        <h3>{t('requester.complete.title')}</h3>
        <p>{t('requester.complete.description')}</p>
      </React.Fragment>
  );
}



