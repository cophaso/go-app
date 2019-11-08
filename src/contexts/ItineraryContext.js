import React, { Component } from 'react'

export const nullItinerary = {
  itinerary: {}
}

const ItineraryContext = React.createContext({
  itineraries: nullItinerary,
  comments: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setItinerary: () => {},
  clearItinerary: () => {},
  setComments: () => {},
  addComment: () => {},
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

  setComments = comments => {
    this.setState({ comments })
  }

  clearItineraries = () => {
    this.setItinerary(nullItinerary)
    this.setComments([])
  }

  addComment = comment => {
    this.setComments([
      ...this.state.comments,
      comment
    ])
  }

  render() {
    const value = {
      itinerary: this.state.itinerary,
      comments: this.state.comments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setItinerary: this.setItinerary,
      setComments: this.setComments,
      clearItinerary: this.clearItinerary,
      addComment: this.addComment,
    }
    return (
      <ItineraryContext.Provider value={value}>
        {this.props.children}
      </ItineraryContext.Provider>
    )
  }
}
