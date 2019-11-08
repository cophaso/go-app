import React, { Component } from 'react';
import './ItineraryList.css'
import { Link } from 'react-router-dom'


export default class ItineraryList extends Component {
  render() {
    const { itinerary } = this.props
    return(
        <l1>
          <Link to={`/itinerary/${itinerary.id}`} className='ItineraryListItem'>
            <div className="name">{itinerary.title}</div>
          </Link>
        </l1>     
    )
  }
}