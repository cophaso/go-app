import React, { Component } from 'react';
import ItineraryList from '../../components/ItineraryList/ItineraryList';
// import { Link } from 'react-router-dom'
import LinkButton from '../../components/Utils/LinkButton';
import ItinerariesApiService from '../../services/Itinerary-api-service';
import ItineraryListContext from '../../contexts/ItineraryListContext';
import './HomePage.css'

export default class HomePage extends Component {
  static contextType = ItineraryListContext

  componentDidMount() {
    this.context.clearError()
    ItinerariesApiService.getItineraries()
      .then(this.context.setItineraryList)
      .catch(this.context.setError)
  }

  renderItineraries() {
    const { itineraryList = [] } = this.context
    return itineraryList.map(itinerary =>
      <ItineraryList
        key={itinerary.id}
        itinerary={itinerary}
      />
    )
  }

  render(){
    const { error } = this.context
    return(
      <div>
        <header role="banner">
          <h1 className="home-title">Travel Plans</h1>
        </header>

        <LinkButton
          to='/add-itinerary'
          className='add-itinerary-button'>
          Add Itinerary
        </LinkButton>

        <div className="itinerary-list">
          <ul className="list">
          {error
            ? <p className='red'>There was an error, try again</p>
            : this.renderItineraries()}
          </ul>
        </div>
      </div>
    )
  }
}