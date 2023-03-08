import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

export const Carousel = () => {
  const images = [
    { src: '/gandii-baat-s7-2023.webp', alt: 'Gandi Baat S7', link: '../../Adult/GandiIBaatS7-2023/GandiIBaatS7' },
    { src: '/erotica-manila-2023.webp', alt: 'Erotica Manila', link: '../../Adult/EroticaManila-2023/EroticaManila' },
    { src: '/farebi-yaar-part-1-2023.webp', alt: 'Farebi Yarr', link: '../../Adult/FarebiYarr-2023/FarebiYarrP1' },
    { src: '/lagaslas-2023.webp', alt: 'Lagaslas', link: '../../Adult/Lagaslas-2023/Lagaslas' },
    { src: '/love-guru-s2-p2-2023.webp', alt: 'Love Guru S2 P2', link: '../../Adult/LoveGuruS2-P2-2023/LoveGuruS2P2' },
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
