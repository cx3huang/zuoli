import React from 'react'
import './services.css'


const Services = () => {
  return (
    <section id='services'>
      <h5>Services</h5>
      <h2>服务范围</h2>
      <div className="container experience__container">
        <div>
          <h3>工程报批相关制图</h3>
          <small>Engineering Drawings for Construction Application Approvals</small>
        </div>
        <div>
          <h3>根据需要提供装修设计图</h3>
          <small>Renovation Design Drawings/Renderings</small>
        </div>
        <div>
          <h3>按甲方需求提供房屋平面图</h3>
          <small>Provision of Floorplan Drawings</small>
        </div>
        <div>
          <h3>各类机械制图及其他</h3>
          <small>Various Mechanical Part/Assembly Designs</small>
        </div>
      </div>
    </section>
  )
}

export default Services