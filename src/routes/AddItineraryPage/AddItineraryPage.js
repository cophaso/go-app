import React, { Component } from 'react';
import './AddItineraryPage.css'
// import { Link } from 'react-router-dom'
import { Section } from '../../components/Utils/Utils'
import AddItineraryForm from '../../components/AddItineraryForm/AddItineraryForm'


export default class AddItineraryPage extends Component {
  render(){
    return(
      <Section className='RegistrationPage'>
        <h2>Add an Itinerary</h2>
        <AddItineraryForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </Section>
    )
  }
}