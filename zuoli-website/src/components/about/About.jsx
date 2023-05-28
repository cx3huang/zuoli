import React from 'react'
import './about.css'
import PIC from '../../assets/exterior_lighting_3.jpg'
import {MdWork} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>我们是</h5>
      <h1>ZUOLI 佐力装饰公司</h1>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={PIC} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdWork className='about__icon' />
              <h5>Civil 3D</h5>
            </article>
            <article className='about__card'>
              <MdWork className='about__icon' />
              <h5>AutoCAD</h5>
            </article>
            {/* <article className='about__card'>
              <MdWork className='about__icon' />
              <h5></h5>
            </article> */}
          </div>

          <p>
            多年加拿大当地咨询公司设计工作经验，国内专业注册工程师。丰富的工程实践经历，长期的Autocad及Civil3D制图专业背景。 
          </p>
          
          <a href='#contact' className='btn btn-primary'>联系我们</a>
        </div>
      </div>
    </section>
  )
}

export default About