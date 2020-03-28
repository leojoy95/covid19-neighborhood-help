
import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";


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
        <RequesterHowItWorks />
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
            <Link to={`${match.url}/step-1`}>Skip</Link>
          </li>
          <li>
            <Link to={`${match.url}/step-2`}>
              Step 2
            </Link>
          </li>
        </ul>

        <Route path={`${match.url}/step-1`} component={RequesterForm} />
        <Route path={`${match.url}/step-2`} component={RequesterForm} />

      </div>
    );
  }




