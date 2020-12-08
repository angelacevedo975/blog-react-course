import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="page-footer font-small pt-4">
      <div className="footer-copyright text-center text-white py-3 bg-primary">
        © 2020 Copyright:
        <a href="/" className="text-white">
          {' '}
          Clickit Blog
        </a>
      </div>
    </footer>
  )
}

export default Footer
