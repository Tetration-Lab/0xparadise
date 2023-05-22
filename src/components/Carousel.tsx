import Slider from 'react-slick'

export const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
  }
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img className="h-[250px] w-full object-cover" src="image/1.png" />
        </div>
        <div>
          <img className="h-[250px] w-full object-cover" src="image/2.png" />
        </div>
        <div>
          <img className="h-[250px] w-full object-cover" src="image/3.png" />
        </div>
      </Slider>
    </div>
  )
}
