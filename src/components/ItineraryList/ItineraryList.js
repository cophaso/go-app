import React, { Component } from 'react';
import './ItineraryList.css'
import { Link } from 'react-router-dom';
import ItineraryContext from '../../contexts/ItineraryContext';
import ItinerariesApiService from '../../services/Itinerary-api-service';


export default class ItineraryList extends Component {
  static defaultProps ={
    onDeleteItinerary: () => {},
    itineraries: []
  }
  static contextType = ItineraryContext

  handleClickDelete = e => {
    e.preventDefault()
    const itineraryId = this.props.itinerary.id

    ItinerariesApiService.deleteItinerary(itineraryId)
      .then(() => {
        this.context.deleteItinerary(itineraryId)
        this.props.onDeleteItinerary(itineraryId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { itinerary } = this.props
    return(
        <li className='itinerary-item'>
          <Link to={`/itineraries/${itinerary.id}`} className='ItineraryListItem'>
            <div className="name">{itinerary.title}</div>
          </Link>

          <button 
            className='Note__delete' 
            type='button'
            onClick={this.handleClickDelete}
          >Delete</button>

        <button 
          className='Note__edit' 
          type='button'
          onClick={this.handleClickEdit}
        >Edit</button>
        </li>
    )
  }
}