import React, { Component } from 'react';
import { Section } from '../../components/Utils/Utils';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import './SignUpPage.css';

export default class SignUpPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/home')
    window.location.reload()
  }

  render() {
    return (
      <Section className='SignUpPage'>
        <h2>Sign Up</h2>
        <SignUpForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </Section>
    )
  }
}
