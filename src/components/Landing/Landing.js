import React, { Component } from 'react'
import './Landing.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm'

export default class LandingPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <div>
          <header role="banner">
            <h1>Go!</h1>
            <h2>Adventure is a path.</h2>
          </header>
          <section>
            <header>
                <h3>Travel without regret.</h3>
            </header>
            <p>Go! helps you plan your next adventure, so there's no more fear of missing out.</p>
          </section>
          <section>
            <header>
                <h3>See the world, your way.</h3>
            </header>
            <p>[<em>placeholder for screenshot of Itinerary list</em>]</p>
            <p>Never lose another minute of your vacation planning what to do next.</p>
          </section>
          <section>
            <header>
                <h3>Keep track of your travels</h3>
            </header>
            <p>[<em>placeholder for screenshot of Activity Item </em>]</p>
            <p>Add notes and ratings so you can remember those moments.</p>
          </section>
          <section>
            <header>
                <h3>Plan Your Journey Now</h3>
            </header>
            <SignUpForm
              onRegistrationSuccess={this.handleRegistrationSuccess}
            />
          </section>
  </div>
    )
  }
}