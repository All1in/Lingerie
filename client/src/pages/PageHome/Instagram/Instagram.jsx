import React from 'react'
import Title from '../../../components/Title'
import './Instagram.scss'

const Instagram = () => {
  return (
    <section className='container py-5'>
      <Title title='Follow us' subtitle='Our Instagram' />
      <div className='row text-end'>
        <div className='col my-4'>
          <h3 className='text-uppercase fs-3'>@femlingerie</h3>
        </div>
      </div>
      <div className='imgSection d-flex gap-4 align-items-center flex-column flex-md-row'>
        <div className='subSections'>
          <img
            className='img-fluid overflow-auto flex-grow-1'
            src='./images/home/inst_img.png'
            alt=''
          />
        </div>
        <div className='d-flex gap-4'>
          <img
            className='img-fluid overflow-auto flex-grow-1'
            src='./images/home/inst_img-1.png'
            alt=''
          />

          <img
            className='img-fluid overflow-auto flex-grow-1'
            src='./images/home/inst_img-2.png'
            alt=''
          />
        </div>
        <div className='subSections'>
          <img
            className='img-fluid overflow-auto flex-grow-1'
            src='./images/home/inst_img-3.png'
            alt=''
          />
        </div>
      </div>
    </section>
  )
}

export default Instagram
