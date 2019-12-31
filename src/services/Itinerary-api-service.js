import TokenService from './token-service'
import config from '../config'

const ItinerariesApiService = {
  getItineraries() {
    return fetch(`${config.API_ENDPOINT}/itineraries`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  postItinerary(data) {
    return fetch(`${config.API_ENDPOINT}/itineraries`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(data),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getItinerary(itineraryId) {
    return fetch(`${config.API_ENDPOINT}/itineraries/${itineraryId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getItineraryActivityItems(itineraryId) {
    return fetch(`${config.API_ENDPOINT}/itineraries/${itineraryId}/activity_items`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  
  postActivityItem(itineraryId, data) {
    return fetch(`${config.API_ENDPOINT}/itineraries/${itineraryId}/activity_items`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(data),
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },

  deleteItinerary(itineraryId){
    fetch(`${config.API_ENDPOINT}/itineraries/${itineraryId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  }
}

export default ItinerariesApiService