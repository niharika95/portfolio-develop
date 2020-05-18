import React from 'react'
import '../assets/CSS/NavigationBar.css'

export default class NavigationBar extends React.Component {
  render() {
    return (
      <div className='navigationBar'>
        <div className='brand'>Niharika Dalal</div>
        <div className='links'>
          <a href=''>Education</a>
          <a href=''>Experience</a>
          <a href=''>Projects</a>
          <a href=''>UI/UX</a>
          <a href=''>Skills</a>
        </div>
      </div>
    )
  }
}
