import React, { Component } from 'react'

const ItineraryListContext = React.createContext({
  itineraryList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setItineraryList: () => {},
})
export default ItineraryListContext

export class ItineraryListProvider extends Component {
  state = {
    itineraryList: [],
    error: null,
  };

  setItineraryList = itineraryList => {
    this.setState({ itineraryList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      itineraryList: this.state.itineraryList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setItineraryList: this.setItineraryList,
    }
    return (
      <ItineraryListContext.Provider value={value}>
        {this.props.children}
      </ItineraryListContext.Provider>
    )
  }
}
