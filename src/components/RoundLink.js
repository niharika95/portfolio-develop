import React from 'react'
import '../assets/CSS/RoundLink.css'

export default class RoundLink extends React.Component {
  render() {
    return (
      <a href={this.props.link}>
        <div className='roundLink'>
          <img src={this.props.icon} alt='Github' className='linkImage' />
        </div>
      </a>
    )
  }
}
