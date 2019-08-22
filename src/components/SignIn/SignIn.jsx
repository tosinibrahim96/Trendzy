import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import './SignIn.scss';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLoginSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log('Login Successful');
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error('Error', error.message);
    }
  };

  render() {
    return (
      <div className="sign-in">
        <p>SIGN IN</p>
        <h2 className="title">Already have an account?</h2>
        <span>Sign in with your e-mail and password </span>

        <form onSubmit={this.handleLoginSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleInputChange}
            label="email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleInputChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign-In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isgoogle="true">
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
