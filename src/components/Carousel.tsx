/* eslint-disable @next/next/no-img-element */
import Slider from 'react-slick'

export const Carousel: React.FC = () => {
  const settings = {
    // dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
  }
  return (
    <Slider className="text-white" {...settings}>
      <img className="focus-visible:outline-none" draggable="false" tabIndex={-1} src="image/1.png" alt="image" />
      <img className="focus-visible:outline-none" draggable="false" tabIndex={-1} src="image/2.png" alt="image" />
      <img className="focus-visible:outline-none" draggable="false" tabIndex={-1} src="image/3.png" alt="image" />
    </Slider>
  )
}
