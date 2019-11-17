import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'
import ItinerariesApiService from '../../services/Itinerary-api-service';


export default class AddActivityItemForm extends Component {
  static defaultProps = {
    onAddActivityItemSuccess: () => {}
  }

  state = {
    error: null
  };

  handleSubmit = ev => {
    ev.preventDefault()
    const itineraryId = this.props.itinerary_id
    const { travel_type, 
            title,
            description,
            start_date, 
            end_date,
            start_time,
            end_time,
            cost,
            url
          } = ev.target

    this.setState({ error: null })

    ItinerariesApiService.postActivityItem(itineraryId, {
      travel_type: travel_type.value,
      title: title.value,
      description: description.value,
      start_date: start_date.value,
      end_date: end_date.value,
      start_time: start_time.value,
      end_time: end_time.value,
      cost: cost.value,
      url: url.value,
      itinerary_id: itineraryId,
      user_id: localStorage.getItem('user_id')
    })
    .then( () => this.props.onAddActivityItemSuccess(itineraryId))
    .catch(res => {
      this.setState({ error: res.error })
    })
  }

  render() {
    const { error } = this.state
    let content
    if (error != null) {
      content = <p className='red'>{error.name}</p>
    }
    return (
      <form
      className='AddActivityItemForm'
        onSubmit={this.handleSubmit}
      >
        <div className='title'>
          <label htmlFor='AddActivityItemForm__title'>
            Title <Required />
          </label>
          <Input
            name='title'
            type='text'
            required
            id='AddActivityItemForm__title'>
          </Input>
        </div>
        <div className='travel_type'>
          <label htmlFor='AddActivityItemForm__travel-type'>
            Travel Type 
          </label>
          <select name="travel_type">
            <option value="Accommodations">Accommodations</option>
            <option value="Rentals">Rentals</option>
            <option value="Activity">Activity</option>
            <option value="Event">Event</option>
            <option value="Dining and Bars">Dining and Bars</option>
          </select>
        </div>
        <div className='description'>
          <label htmlFor='AddActivityItemForm__description'>
            Description 
          </label>
          <Input
            name='description'
            type='textarea'
            id='AddActivityItemForm__title'>
          </Input>
        </div>
        <div className='start_date'>
          <label htmlFor='AddActivityItemForm__start_date'>
            Start Date <Required />
          </label>
          <Input
            name='start_date'
            type='date'
            required
            id='AddActivityItemForm__start_date'>
          </Input>
        </div>
        <div className='end_date'>
          <label htmlFor='AddActivityItemForm__end_date'>
            End Date <Required />
          </label>
          <Input
            name='end_date'
            type='date'
            required
            id='AddActivityItemForm__end_date'>
          </Input>
        </div>
        <div className='start_time'>
          <label htmlFor='AddActivityItemForm__start_time'>
            Start Time <Required />
          </label>
          <Input
            name='start_time'
            type='time'
            required
            id='AddActivityItemForm__start_time'>
          </Input>
        </div>
        <div className='end_time'>
          <label htmlFor='AddActivityItemForm__end_time'>
            End Time <Required />
          </label>
          <Input
            name='end_time'
            type='time'
            required
            id='AddActivityItemForm__end_time'>
          </Input>
        </div>
        <div className='cost'>
          <label htmlFor='AddActivityItemForm__cost'>
            Cost <Required />
          </label>
          <Input
            name='cost'
            type='number' 
            step='any'
            required
            id='AddActivityItemForm__cost'>
          </Input>
        </div>
        <div className='url'>
          <label htmlFor='AddActivityItemForm__url'>
            URL
          </label>
          <Input
            name='url'
            type='text' 
            id='AddActivityItemForm__url'>
          </Input>
        </div>
        <div role='alert'>
          {content}
        </div>
        <Button type='submit'>
          Add
        </Button>
      </form>
    )}
}