/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import Button from '../Button/Button'

import './Navbar.css'

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => this.setState({ clicked: !this.state.clicked })

  render() {
    return (
      <nav className="nav">
        <h1 className="nav__logo">
          React <i className="fab fa-react nav__logo__icon" />
        </h1>

        <div className="hamburger__icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={this.state.clicked ? 'nav__menu active' : 'nav__menu'}>
          {MenuItems.map((item) => (
            <li key={item.title} className="nav__item">
              <a href={item.url} className={item.className}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <Button>Sign Up</Button>
      </nav>
    )
  }
}

export default Navbar
