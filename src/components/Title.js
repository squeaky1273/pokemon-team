import React from 'react'
import './Title.css';
import { NavLink } from 'react-router-dom'

function Title() {
  return (
    <div className="Title">
      <header>
        <div>
          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            exact
            to="/">Wild</NavLink>

          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            to="/team">Team</NavLink>
        </div>

      </header>
    </div>
  )
}
export default Title