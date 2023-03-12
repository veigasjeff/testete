import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

export const Carousel = () => {
  const images = [
    { src: '/we-have-a-ghost-2023.webp', alt: 'We Have A Ghost', link: '../../Hollywood/WeHaveAGhost-2023/WeHaveAGhost' },
    { src: '/little-dixie-2023.webp', alt: 'Little Dixie', link: '../../Hollywood/LittleDixie-2023/LittleDixie' },
    { src: '/creed-III-2023.webp', alt: 'Creed-III', link: '../../Hollywood/Creed3-2023/Creed3' },
    { src: '/bikini-hackers-2023.webp', alt: 'Bikini Hackers', link: '../../Hollywood/BikiniHackers-2023/BikiniHackers' },
    { src: '/sayen-2023.webp', alt: 'Sayen', link: '../../Hollywood/Sayen-2023/SayenP1' },
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
