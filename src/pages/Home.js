import React from 'react'
import NavigationBar from '../components/NavigationBar'
import '../assets/CSS/Home.css'
import RoundLink from '../components/RoundLink'
import GithubLogo from '../assets/images/githubLogo.png'
import LinkedinLogo from '../assets/images/linkedinLogo.png'
import Resume from '../assets/images/resume.png'

export default class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <NavigationBar />
        <div className='content'>
          <div className='homeSection'>
            <div className='homeContent'>
              <p className='heading'>Hi,</p>
              <p className='heading'>
                I'm <span>Niharika</span>
              </p>
              {/* <hr /> */}
              <p className='description'>
                Recently graduated with a Master's degree in Software
                Engineering from Rochester Institute of Technology. I'm
                passionate about front-end web development, UI/UX and
                interaction design. Actively seeking job opportunities for June
                2020.
              </p>
              <div className='roundLinks'>
                <RoundLink
                  icon={GithubLogo}
                  link='https://github.com/niharika95'
                />
                <RoundLink
                  icon={LinkedinLogo}
                  link=' https://www.linkedin.com/in/niharikadalal
'
                />
                <RoundLink
                  icon={Resume}
                  link='https://niharika95.github.io/Documents/Resume-FrontEnd.pdf'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
