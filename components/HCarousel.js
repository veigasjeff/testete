import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { lazy } from 'react';

export const Carousel = () => {
    const images = [  '/ant-Man-and-the-wasp-2023.webp', '/black-panther-wakanda-forever-2022.webp', '/carnival-row-2023.webp', '/kaleidoscope-2022.webp' ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
        
      };
  return (
    <div>


  <Slider {...settings}>
  {images.map((image) => (
    <div key={image}>
      <Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src={image} alt="Carousel Image" width={600} height={400} />
    </div>
  ))}
</Slider>


    </div> 
 )
}
