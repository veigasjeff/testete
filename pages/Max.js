import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const Max = ({ }) => {
  const images = [
    { src: '/ant-Man-and-the-wasp-2023.webp', alt: 'AntMan', link: '../../Hollywood/AntMan-2023/AntMan', text: 'Ant-Man and The Wasp (2023)' },
    { src: '/farzi-2023.webp', alt: 'Farzi', link: '../../Bollywood/Farzi-2023/Farzi', text: 'Farzi (2023)' },
    { src: '/mayfair-witches-2023.webp', alt: 'Mayfair Witches', link: '../../Hollywood/MayfairWitches-2023/MayfairWitchesP1', text: 'Mayfair Witches (2023)' },
    { src: '/lady-doctor-2023.webp', alt: 'Lady Doctor', link: '../../Adult/LadyDoctor-2023/LadyDoctor', text: 'Lady Doctor (2023)' },
    { src: '/hunt-2023.webp', alt: 'Hunt', link: '../../Bollywood/Hunt-2023/Hunt', text: 'Hunt (2023)' },
    { src: '/ishqiya-2023.webp', alt: 'Ishqiya', link: '../../Adult/Ishqiya-2023/Ishqiya', text: 'Ishqiya (2023)' },
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
    <div className="carousel-inner relative w-full cursor-pointer m-10 overflow-hidden">
      <h2 className="mb-4 py-5 font-bold leading-none tracking-tight text-white text-center text-2xl dark:text-white">Watch Viewed Movies of the Month </h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div onClick={() => handleImageClick(image.link)} style={{ display: "flex", justifyContent: "center", cursor: 'pointer' }}>
              <Image
                className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl"
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
              />
            </div>
            <div className="text-center mt-2 text-gray-500">{image.text}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Max;
