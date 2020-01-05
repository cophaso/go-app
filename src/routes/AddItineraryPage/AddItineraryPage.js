import React, { Component } from 'react';
import './AddItineraryPage.css';
import { Section } from '../../components/Utils/Utils';
import AddItineraryForm from '../../components/AddItineraryForm/AddItineraryForm';


export default class AddItineraryPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleAddItinerarySuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/home'
    history.push(destination)
  }

  render(){
    return(
      <Section className='AddItineraryPage'>
        <h2>Add an Itinerary</h2>
        <AddItineraryForm
          onAddItinerarySuccess={this.handleAddItinerarySuccess}
        />
      </Section>
    )
  }
}