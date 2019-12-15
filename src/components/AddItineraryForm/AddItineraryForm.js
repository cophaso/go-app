import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'
import ItinerariesApiService from '../../services/Itinerary-api-service';
import TokenService from '../../services/token-service'

export default class AddItineraryForm extends Component {
  static defaultProps = {
    onAddItinerarySuccess: () => {}
  }

  state = {
    error: null
  };

  handleSubmit = ev => {
    ev.preventDefault()
    const { title, start_date, end_date } = ev.target

    this.setState({ error: null })
    
    ItinerariesApiService.postItinerary({
      title: title.value,
      start_date: start_date.value,
      end_date: end_date.value,
      user_id: localStorage.getItem('user_id')
    })
      .then(itinerary => {
        title.value = ''
        this.props.onAddItinerarySuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
        TokenService.clearAuthToken();
        window.location.pathname = '/login';
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
      className='AddItineraryForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {content}
        </div>
        <div className='title'>
          <label htmlFor='AddItineraryForm__title'>
            Title <Required />
          </label>
          <Input
            name='title'
            type='text'
            required
            id='AddItineraryForm__title'>
          </Input>
        </div>
        <div className='start_date'>
          <label htmlFor='AddItineraryForm__start_date'>
            Start Date: <Required />
          </label>
          <Input
            name='start_date'
            type='date'
            required
            id='AddItineraryForm__start_date'>
          </Input>
        </div>
        <div className='end_date'>
          <label htmlFor='AddItineraryForm__end_date'>
            End Date: <Required />
          </label>
          <Input
            name='end_date'
            type='date'
            required
            id='AddItineraryForm__end_date'>
          </Input>
        </div>
        <Button type='submit'>
          Add
        </Button>
      </form>
    )}
}