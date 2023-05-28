import React from 'react'
import './contact.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaMailBulk} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Contact Us</h5>
      <h2>联系我们</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <FaMailBulk className='contact__option-icon'/>
            <h4>电子邮箱</h4>
            <h5>rainbow2009@msn.com</h5>
            <h5>Catherine 刘工</h5>
            <a href='mailto:rainbow2009@msn.com' target="_blank">发送邮件</a>
          </article>
          <article className='contact__option'>
            <BsFillTelephoneFill className='contact__option-icon'/>
            <h4>电话</h4>
            <h5>(778) 839-9188</h5>
            <h5>Catherine 刘工</h5>
            <a href='tel:+1778-839-9188' target="_blank">拨打电话</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact