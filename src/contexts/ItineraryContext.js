import React, { Component } from 'react'

export const nullItinerary = {
  itinerary: {}
}

const ItineraryContext = React.createContext({
  itineraries: nullItinerary,
  activity_items: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setItinerary: () => {},
  clearItinerary: () => {},
  setActivityItems: () => {},
  addActivityItem: () => {},
})

export default ItineraryContext

export class ItineraryProvider extends Component {
  state = {
    itinerary: nullItinerary,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setItinerary = itinerary => {
    this.setState({ itinerary })
  }

  setActivityItems = activity_items => {
    this.setState({ activity_items })
  }

  clearItinerary = () => {
    this.setItinerary(nullItinerary)
    this.setActivityItems([])
  }

  addActivityItem = activity_item => {
    this.setActivityItems([
      ...this.state.activity_items,
      activity_item
    ])
  }

  render() {
    const value = {
      itinerary: this.state.itinerary,
      activity_items: this.state.activity_items,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setItinerary: this.setItinerary,
      setActivityItems: this.setActivityItems,
      clearItinerary: this.clearItinerary,
      addActivityItem: this.addActivityItem,
    }
    return (
      <ItineraryContext.Provider value={value}>
        {this.props.children}
      </ItineraryContext.Provider>
    )
  }
}
