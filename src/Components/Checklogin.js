import React from 'react';
import axios from 'axios';

const loginCheck = (user) => {
  return (
    axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
  );
}

export default loginCheck;