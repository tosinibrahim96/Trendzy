import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import './styles/authpage.scss';

export default function AuthPage() {
  return (
    <div className="signin-signup">
      <SignIn />
      <SignUp />
    </div>
  );
}
