import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

export const Carousel = () => {
  const images = [
    { src: '/we-have-a-ghost-2023.webp', alt: 'We Have A Ghost', link: '../../Hollywood/WeHaveAGhost-2023/WeHaveAGhost' },
    { src: '/ant-Man-and-the-wasp-2023.webp', alt: 'Ant Man', link: '../../Hollywood/AntMan-2023/AntMan' },
    { src: '/the-ark-2023.webp', alt: 'The Ark', link: '../../Hollywood/TheArk-2023/TheArkP1' },
    { src: '/luther-the-fallen-sun-2023.webp', alt: 'Luther The Fallen Sun', link: '../../Hollywood/LutherTheFallenSun-2023/LutherTheFallenSun' },
    { src: '/tulsa-king-2023.webp', alt: 'Tulsa King', link: '../../Hollywood/TulsaKing-2023/TulsaKingP1' },
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
