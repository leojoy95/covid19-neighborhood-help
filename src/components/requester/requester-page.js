
import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";



import {Carousel} from '../carousel';

import * as firebase from 'firebase';

import { RequesterForm } from './requester-form';
import { RequesterHowItWorks } from './requester-how-it-works';


/*
email

location_description

location_geo

message

phone

time_created

username


*/


// Volunteer Page
export class RequesterPage extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Request />
      </React.Fragment>
    );
  }
}



  
// Request Page
function Request() {
    let match = useRouteMatch();
  
    return (
      <div>
        <h2>Requester</h2>
  
        <ul>
          <li>
            <Link to={`${match.url}/step-1`}>Step 1</Link>
          </li>
          <li>
            <Link to={`${match.url}/step-2`}>
              Step 2
            </Link>
          </li>
        </ul>

        <Route path={`${match.url}/step-1`} component={RequesterHowItWorks} />
        <Route path={`${match.url}/step-2`} component={RequesterForm} />

      </div>
    );
  }




