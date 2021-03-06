import React from 'react'

class Nav extends React.Component {
  render(){
    return (
      <nav id="Contact">

        <ul> 
          <li><a href="mailto:c@corbinjensen.ca"><i className="icon-mail" aria-hidden="true"></i> Email</a></li>
          <li><a href="http://github.com/corbinjensen" target="_blank"><i className="icon-github" aria-hidden="true"></i> Github</a></li>
          <li><a href="https://www.linkedin.com/in/corbinjensen/" target="_blank"><i className="icon-linkedin" aria-hidden="true"></i> Linkedin</a></li>
        </ul>

      </nav>
    )
  }
}

export default Nav
