import React, { Component } from 'react';
import './Landing.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default class LandingPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/home')
    window.location.reload()
  };

  render() {
    return (
      <div>
          <header role="banner" className="header-landing">
            <h1 className="app-name">Go!</h1>
            <h2 className="slogan">Adventure is a path.</h2>
          </header>
          <section>
            <header>
                <h3>Travel without regret.</h3>
            </header>
            <p>Go! helps you plan your next adventure, so there's no more fear of missing out.</p>
          </section>
          <section className='middle'>
            <header>
                <h3>See the world, your way.</h3>
            </header>
            <p>Never lose another minute of your vacation planning what to do next.</p>
          </section>
          <section>
            <header>
                <h3>Keep track of your travels</h3>
            </header>
            <p>Keep detailed plans of your journey so you can remember every moment</p>
          </section>
          <section>
            <header>
                <h3>Plan Your Journey Now</h3>
            </header>
            <p>
              DEMO INFO <br />
              Test User:   <br />
                username: tuser <br />
                password: Password1! <br />
              Directions: Login with user and make an itinerary item to start planning your trip. Add activities to that itinerary. 
            </p>
            <SignUpForm
              onRegistrationSuccess={this.handleRegistrationSuccess}
            />
          </section>
      </div>
    )
  };
}