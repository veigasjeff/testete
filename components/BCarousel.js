import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

export const Carousel = () => {
  const images = [
    { src: '/the-night-manager-2023.webp', alt: 'The Night Manager', link: '../../Bollywood/TheNightManager-2023/TheNightManager' },
    { src: '/farzi-2023.webp', alt: 'Farzi', link: '../../Bollywood/Farzi-2023/Farzi' },
    { src: '/shehzada-2023.webp', alt: 'Shehzada', link: '../../Bollywood/Shehzada-2023/Shehzada' },
    { src: '/lost-2023.webp', alt: 'Lost', link: '../../Bollywood/Lost-2023/Lost' },
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
          <div onClick={() => handleImageClick(image.link)} style={{ cursor: 'pointer' }}>
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
