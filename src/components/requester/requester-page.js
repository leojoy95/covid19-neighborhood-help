
import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";


import { RequesterForm } from './requester-form';
import { RequesterHowItWorks } from './requester-how-it-works';
import { RequesterComplete } from './requester-complete';



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




// This will be removed, just allows easier acess to parts in development
function RequestFullNav(){
  let match = useRouteMatch();
  return(
  <ul>
    <li>
      <Link to={`${match.url}/how-it-works`}>How It Works</Link>
    </li>
    <li>
      <Link to={`${match.url}/step-1`}>Skip</Link>
    </li>
    <li>
      <Link to={`${match.url}/step-2`}>Step 2</Link>
    </li>

    <li>
      <Link to={`${match.url}/complete`}>Complete</Link>
    </li>
  </ul>
  )
}


  
// Request Page
function Request() {
    let match = useRouteMatch();
  
    return (
      <div className="container">
        
        {/* <RequestFullNav /> */}

        <Route path={`${match.url}/how-it-works`} component={RequesterHowItWorks} />
        <Route path={`${match.url}/step-1`} component={RequesterForm} />
        <Route path={`${match.url}/step-2`} component={RequesterForm} />
        <Route path={`${match.url}/complete`} component={RequesterComplete} />

      </div>
    );
  }




