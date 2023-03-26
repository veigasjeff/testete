import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

export const Carousel = () => {
  const images = [
    { src: '/selfiee-2023.webp', alt: 'Selfiee', link: '../../Bollywood/Selfiee-2023/Selfiee' },
    { src: '/gulmohar-2023.webp', alt: 'Gulmohar', link: '../../Bollywood/Gulmohar-2023/Gulmohar' },
    { src: '/incar-2023.webp', alt: 'InCar', link: '../../Bollywood/InCar-2023/InCar' },
    { src: '/raundal-2023.webp', alt: 'Raundal', link: '../../Bollywood/Raundal-2023/Raundal' },
    { src: '/tu-jhoothi-main-makkaar-2023.webp', alt: 'Tu Jhoothi Main Makkaar', link: '../../Bollywood/TuJhoothiMainMakkaar-2023/TuJhoothiMainMakkaar' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleImageClick = (link) => {
    window.location.href = link;
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <div onClick={() => handleImageClick(image.link)}  style={{  display: "flex", justifyContent: "center", cursor: 'pointer' }} >
            <Image
              className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl"
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};
