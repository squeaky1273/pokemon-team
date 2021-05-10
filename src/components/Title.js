import React from 'react'
import './Title.css';
import { NavLink } from 'react-router-dom'

function Title() {
  return (
    <div className="Title">
      <header>
      <h1>POKEMON</h1>

        <div>
          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            exact
            to="/">Wild</NavLink>

          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            to="/team">Your Team</NavLink>
        </div>
      </header>
    </div>
  )
}
export default Title