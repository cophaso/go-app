import React, { Component } from 'react';
import './AddActivityItemPage.css'
import { Section } from '../../components/Utils/Utils'
import AddActivityItemForm from '../../components/AddActivityItemForm/AddActivityItemForm'


export default class AddActivityItemPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    }
  }

  handleAddActivityItemSuccess = () => {
    console.log('redirected')
    const  itinerary_id = this.props.location.itinerary_id
    const { location, history } = this.props
    const destination = (location.state || {}).from || `/itineraries/${itinerary_id}`
    history.push(destination)
  }

  render(){
    return(
      <Section className='AddActivitItemPage'>
        <h2>Add an Itinerary</h2>
        <AddActivityItemForm
          onAddActivityItemSuccess={this.handleAddActivityItemSuccess}
          itinerary_id = {this.props.location.itinerary_id}
        />
      </Section>
    )
  }
}