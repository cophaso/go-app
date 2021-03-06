import React, { Component } from 'react';
import { Button, Input, Required } from '../Utils/Utils';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';

export default class SignUpForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = { error: null };

  handleSubmit = ev => {
    ev.preventDefault()
    const { first_name, last_name, user_name, password } = ev.target

    this.setState({ error: null })
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      first_name: first_name.value,
      last_name: last_name.value,
    })
      .then(res => {
        if(typeof res.id !== 'undefined') {
          AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value,
          })
          .then(res => {
            localStorage.setItem('user_id', res.id)
            TokenService.saveAuthToken(res.authToken)
            first_name.value = ''
            last_name.value = ''
            user_name.value = ''
            password.value = ''
            this.props.onRegistrationSuccess()
          })
        }
        else {
          this.setState({error: res.error})
        }
      })
      .catch(res => {
        throw new Error(res.error);
      })
  };

  render() {
    const { error } = this.state;
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='full_name'>
          <label htmlFor='RegistrationForm__first_name'>
            First Name <Required />
          </label>
          <Input
            name='first_name'
            type='text'
            required
            id='RegistrationForm__first_name'>
          </Input>
        </div>
        <div className='last_name'>
          <label htmlFor='RegistrationForm__last_name'>
            Last Name <Required />
          </label>
          <Input
            name='last_name'
            type='text'
            required
            id='RegistrationForm__last_name'>
          </Input>
        </div>
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            User Name <Required />
          </label>
          <Input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <p className="password-validation">Password must be longer than 8 characters contain 1 upper case, lower case, number and special character</p>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </Input>
        </div>
        <Button type='submit'>
          Register
        </Button>
      </form>
    )
  };
}
