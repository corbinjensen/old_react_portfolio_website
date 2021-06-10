import React from 'react'

import logo from '../img/full-logo-colour.svg'

import '../css/header.css'

class Header extends React.Component {
  render(){
    return (
      <header className="wrapper">

        <img className="title" src={logo} alt="Corbin Jensen "/>

        <ul className="mainMenu">
          <li><a href="http://github.com/corbinjensen">Github</a></li>
          <li><a href="https://www.linkedin.com/in/corbinjensen/" target="_blank">Linkedin</a></li>
          <li><a href="mailto:c@corbinjensen.ca">Contact</a></li>
        </ul>

      </header>
    )
  }
}

export default Header
