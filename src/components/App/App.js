import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import LandingPage from '../Landing/Landing';
import Header from '../Header/Header';
import LoginPage from '../../routes/LoginPage/LoginPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import SignUpPage from '../../routes/SignUpPage/SignUpPage'


class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }
  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <Header />
        </header>
        <main className='App__main'>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoute
              path={'/signup'}
              component={SignUpPage}
            />
            {/* <PrivateRoute
              path={'/itineraries'}
              component={ItinListPage}
            /> */}
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
