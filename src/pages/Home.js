import React from 'react'
import NavigationBar from '../components/NavigationBar'
import '../assets/CSS/Home.css'
import RoundLink from '../components/RoundLink'
import GithubLogo from '../assets/images/githubLogo.png'
import LinkedinLogo from '../assets/images/linkedinLogo.png'
import Resume from '../assets/images/resumeLogo.png'

export default class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <NavigationBar />
        <div className='roundLinks'>
          <RoundLink
            icon={Resume}
            link='https://niharika95.github.io/Documents/Resume-FrontEnd.pdf'
          />
          <RoundLink icon={GithubLogo} link='https://github.com/niharika95' />
          <RoundLink
            icon={LinkedinLogo}
            link=' https://www.linkedin.com/in/niharikadalal
'
          />
        </div>
        <div className='content'>
          <div id='homeSection'>
            <div className='homeContent'>
              <p className='heading'>Hi,</p>
              <p className='heading'>
                I'm <span>Niharika</span>
              </p>
              <p className='description'>
                I recently graduated with a Master's degree in Software
                Engineering from Rochester Institute of Technology, and am
                passionate about front-end web development, UI/UX and
                interaction design.
                <br />
                I'm actively seeking job opportunities for June 2020.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
