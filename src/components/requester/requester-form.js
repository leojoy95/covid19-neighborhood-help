
import React from 'react';


import {Carousel} from '../carousel';

import * as firebase from 'firebase';



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
export class RequesterForm extends React.Component {
  constructor () {
    super();
    this.state = {
      name: '',
      email: '',
      location_description: '',
      message: '',
      phone: '',
      time_created: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange (evt) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(event) {
    let day = firebase.firestore.Timestamp.fromDate(new Date());
    this.state.time_created = day;
    firebase.firestore().collection("requests").add(this.state);
    event.preventDefault();
  }
  
  render () {
    return (
      <form onSubmit={this.handleSubmit}>

        <fieldset>
          <label>Name</label>
          <input type="text" name="name" onChange={this.handleChange} />
        </fieldset>

        <fieldset>
          <label>Email</label>
          <input type="text" name="email" onChange={this.handleChange} />
        </fieldset>

        <fieldset>
          <label>Location Description</label>
          <input type="text" name="location_description" onChange={this.handleChange} />
        </fieldset>

        <fieldset>
          <label>Message</label>
          <input type="text" name="message" onChange={this.handleChange} />
        </fieldset>
        
        <fieldset>
          <label>Phone</label>
          <input name="phone" onChange={this.handleChange} />
        </fieldset>
        
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



