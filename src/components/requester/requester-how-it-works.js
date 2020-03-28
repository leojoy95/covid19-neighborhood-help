
import React, { Component } from 'react';



import {Carousel} from '../carousel';
import { useTranslation, withTranslation, Trans } from 'react-i18next';




// Volunteer Page
export class RequesterHowItWorks extends React.Component {
  
  
  clicky(){
    alert('test');
    //i18n.changeLanguage('de');
  }

  render () {
    return (
      <React.Fragment>
        <h2 onClick={this.clicky}>This is how it works</h2>
        <Trans i18nKey="title">
          title
        </Trans>
        <Carousel type="requester" />
      </React.Fragment>
    );
  }
}




