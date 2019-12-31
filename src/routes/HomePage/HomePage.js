import React, { Component } from 'react';
import ItineraryList from '../../components/ItineraryList/ItineraryList';
import LinkButton from '../../components/Utils/LinkButton';
import ItinerariesApiService from '../../services/Itinerary-api-service';
import ItineraryListContext from '../../contexts/ItineraryListContext';
import './HomePage.css';

export default class HomePage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    }
  }

  static contextType = ItineraryListContext

  componentDidMount() {
    this.context.clearError();
    ItinerariesApiService.getItineraries()
      .then(this.context.setItineraryList)
      .catch(this.context.setError)
  }


  handleDeleteItinerary = () => {
    window.location.reload()
  }

  render(){
    const { error, itineraryList } = this.context
    return(
      <div>
        <header role="banner">
          <h1 className="home-title">Travel Plans</h1>
        </header>

        <h2 className="home-subtitle">Add an itinerary to start your journey!</h2>

        <LinkButton
          to='/add-itinerary'
          className='add-itinerary-button'>
          Add Itinerary
        </LinkButton>

        <div className="itinerary-list">
          <ul className="list">
          {error
            ? <p className='red'>There was an error, try again</p>
            : itineraryList.map(itinerary => {
              if (itinerary.user.id.toString() === localStorage.getItem('user_id')) {
               return <ItineraryList
                        key={itinerary.id}
                        itinerary={itinerary}
                        onDeleteItinerary = {this.handleDeleteItinerary}
                      />
              }
              else {
                return <div key={itinerary.id}></div>
              }
              })}
          </ul>
        </div>
      </div>
    )
  }
}