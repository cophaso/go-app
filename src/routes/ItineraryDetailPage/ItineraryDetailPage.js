import React, { Component } from 'react';
import { Section } from '../../components/Utils/Utils'
import ItinerariesApiService from '../../services/Itinerary-api-service';
import ItineraryContext from '../../contexts/ItineraryContext';
import { Link } from 'react-router-dom'
import './ItineraryDetailPage.css'

export default class ItineraryDetailPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = ItineraryContext

  componentDidMount() {
    const { itineraryId } = this.props.match.params
    this.context.clearError()
    ItinerariesApiService.getItinerary(itineraryId)
      .then(this.context.setItinerary)
      .catch(this.context.setError)
    ItinerariesApiService.getItineraryActivityItems(itineraryId)
      .then(this.context.setActivityItems )
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearItinerary()
  }

  render() {
    const { error, itinerary, activity_items } = this.context
    const start_date = new Date(itinerary.start_date).toDateString()
    const end_date = new Date(itinerary.end_date).toDateString()
    let content
    if (error) {
      content = (error.error === `Itinerary doesn't exist`)
        ? <p className='red'>Itinerary not found</p>
        : <p className='red'>There was an error</p>
    } 
    else if (!itinerary.id) {
      content = <div className='loading' />
    } 
    return (
      <Section className='ItineraryPage'>
        <Link
          to={{
            pathname: `/itineraries/${itinerary.id}/add-activity-item`,
            itinerary_id: itinerary.id
          }}
          className='add-activity-item-button'>
          Add Activity Item
        </Link>

        {content}

        <div className='ItineraryPage__activity-item-list'>
          <h2>{itinerary.title}</h2>
          <div>{start_date} - {end_date}</div>
          <ItineraryActivityItems activity_items={activity_items} />
        </div>
      </Section>
    )
  }
}

function ItineraryActivityItems({ activity_items = [] }) {
  return (
    <ul className='ItineraryPage__activity-items_list'>
      {activity_items.map(activity_item =>
        <li key={activity_item.id} className='ItineraryPage__activity-items'>
          <h3 className='ItineraryPage__activity-items_title'>
            {activity_item.title}
          </h3>
          <p className='ItineraryPage__activity-items_description'>
            {activity_item.description}
          </p>
          <div>
            {new Date(activity_item.start_date).toDateString()} to {new Date(activity_item.end_date).toDateString()}
          </div>
          <div>
            Start Time: {activity_item.start_time} 
          </div>
          <div>
            End Time: {activity_item.end_time}
          </div>
          <div>${activity_item.cost}</div>
          <a href={activity_item.url}>{activity_item.url}</a>
        </li>
      )}
    </ul>
  )
}