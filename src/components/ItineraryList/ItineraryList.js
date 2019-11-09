import React, { Component } from 'react';
import './ItineraryList.css'
import { Link } from 'react-router-dom'


export default class ItineraryList extends Component {
  render() {
    const { itinerary } = this.props
    return(
        <li className='itinerary-item'>
          <Link to={`/itineraries/${itinerary.id}`} className='ItineraryListItem'>
            <div className="name">{itinerary.title}</div>
          </Link>
        </li>     
    )
  }
}