import React from 'react'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-app-info'>
          <div className='footer-links'>
            <a href="#0" className='links'>Home</a>
            <a href="#0" className='links'>Feature</a>
            <a href="#0" className='links'>Pets</a>
            <a href="#0" className='links'>Games</a>
            <a href="#0" className='links'>Technology</a>
          </div>
          <div className='footer-title'><h3>Get the RainCity Report</h3>
            <p>We update weekly for new projects that our developers are working on</p>
          </div>
        </div>
      </div>
      <div className='footer-copyright'> <p>&copy; Alex Aguilar, Maria Revelo, Pam Pragides</p></div>
    </footer>
  )
}

export default Footer