import React from 'react'
import './footer.css'
import {FaMailBulk} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>ZUOLI 佐力</a>
      <ul className='permalinks'>
        <li><a href='#'>关于我们 Home</a></li>
        <li><a href='#services'>服务范围 Services</a></li>
        {/* <li><a href='#testimonials'>Testimonials</a></li> */}
        <li><a href='#contact'>联系我们 Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='mailto:rainbow2009@msn.com' target="_blank"><FaMailBulk/></a>
        <a href='tel:+1778-839-9188' target="_blank"><BsFillTelephoneFill/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ZuoLi Home Decoration Ltd., 2023. Hosted with GitHub Pages.</small>
      </div>
    </footer>
  )
}

export default Footer