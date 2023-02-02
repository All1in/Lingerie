import React, { useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSlides } from '../../../store/slides/slides'

const SlickSlider = () => {
  const dispatch = useDispatch()
  const slides = useSelector(state => state.slides)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows: false
  }

  useEffect(() => {
    dispatch(fetchSlides())
  }, [dispatch])

  return (
    <div className='container'>
      {slides && (
        <Slider {...settings}>
          {slides.slides.map(item =>
            item.imageUrl.map(url => <img src={url} />)
          )}
        </Slider>
      )}
    </div>
  )
}

export default SlickSlider
