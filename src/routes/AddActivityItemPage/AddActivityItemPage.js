import React, { Component } from 'react';
import './AddActivityItemPage.css'
import { Section } from '../../components/Utils/Utils'
import AddActivityItemForm from '../../components/AddActivityItemForm/AddActivityItemForm'


export default class AddActivityItemPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleAddActivityItemSuccess = () => {
    const { itinerary } = this.context
    const { location, history } = this.props
    const destination = (location.state || {}).from || `/itineraries/${itinerary.id}`
    history.push(destination)
  }

  render(){
    return(
      <Section className='RegistrationPage'>
        <h2>Add an Itinerary</h2>
        <AddActivityItemForm
          onAddActivityItemSuccess={this.handleAddActivityItemSuccess}
        />
      </Section>
    )
  }
}