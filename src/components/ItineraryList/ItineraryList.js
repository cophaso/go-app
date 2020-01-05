import React, { Component } from 'react';
import './ItineraryList.css'
import { Link } from 'react-router-dom';
import ItineraryContext from '../../contexts/ItineraryContext';
import ItinerariesApiService from '../../services/Itinerary-api-service';


export default class ItineraryList extends Component {
  static defaultProps ={
    onDeleteItinerary: () => {},
    itineraries: []
  };

  static contextType = ItineraryContext

  handleClickDelete = e => {
    e.preventDefault()
    const itineraryId = this.props.itinerary.id
    ItinerariesApiService.deleteItinerary(itineraryId)
    this.props.onDeleteItinerary()
  };

  handleClickEdit = e => {
    e.preventDefault()
    const itineraryId = this.props.itinerary.id
    ItinerariesApiService.getItinerary(itineraryId)
  };

  render() {
    const { itinerary } = this.props;
    return(
        <li className='itinerary-item'>
          <div className='btn-holder'>
            <button 
              className='Note__delete' 
              type='button'
              onClick={this.handleClickDelete}
            >Delete</button>
          </div>
          
          <Link to={`/itineraries/${itinerary.id}`} className='ItineraryListItem'>
            <div className="name">{itinerary.title}</div>
          </Link>
        </li>
    )
  };
}