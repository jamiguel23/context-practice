import React, { Component } from 'react'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'

export default class Main extends Component {
  render() {
    return (
      <div>
        Main
        <Home />
        <Login />
        <Profile />

      </div>
    )
  }
}
