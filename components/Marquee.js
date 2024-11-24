// components/Marquee.js
// import React from 'react';
// import Link from 'next/link';
// import styles from '@styles/Marquee.module.css';

// const Marquee = () => {
//   // Define the items directly within the component
//   const itemsnames = [
//     { text: 'YouTube News 2024.', href: '../news/top-3-best-youtube-news-videos-to-watch/', image: 'https://res.cloudinary.com/dezf3wemk/image/upload/v1717391455/YTM_NEWS_tts2ux.webp' },
//     { text: 'YouTube Crime Movie 2024.', href: '../movies/top-3-best-youtube-crime-movie-videos-to-watch/', image: 'https://res.cloudinary.com/dezf3wemk/image/upload/v1717292628/ytmg_movies_esajnc.webp' },
//     { text: 'YouTube Movie 2024.', href: '../movies/top-3-best-youtube-movie-videos-to-watch/', image: 'https://res.cloudinary.com/dezf3wemk/image/upload/v1717160383/YouTube_Movie_tvmai7.webp' },
//     { text: 'YouTube Crime Movie 2024.', href: '../movies/top-3-best-youtube-crime-movie-videos-to-watch/', image: 'https://res.cloudinary.com/dezf3wemk/image/upload/v1717292628/ytmg_movies_esajnc.webp' },
//     { text: 'YouTube Movie 2024.', href: '../movies/top-3-best-youtube-movie-videos-to-watch/', image: 'https://res.cloudinary.com/dezf3wemk/image/upload/v1717160383/YouTube_Movie_tvmai7.webp' },
//   ];

//   return (
//     <div className={styles.marquee}>
//       <div className={styles.marqueeContent}>
//         {itemsnames.map((item, index) => (
//           <Link href={item.href} key={index}>
//             <span className='bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl hover:text-blue-800 font-bold mt-2'>
//               <p className={styles.marqueeItem}>
//                 <img   width={140}  height={140} quality={90} src={item.image} alt={item.text} className={styles.marqueeImage}  style={{
//                      borderRadius: '8px',
//                           filter:
//                             'contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)'
//                         }}/>
//                 {item.text}
//               </p>
//             </span>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Marquee;

// components/Marquee.js
// import React from 'react';
// import Link from 'next/link';
// import styles from '@styles/Marquee.module.css';
// import Image from 'next/image'

// const Marquee = () => {
//   const itemsnames = [
//     {
//       text: 'Softwarebay Browsers 2024.',
//       href: '../live-news/',
//       image: 'https://img.youtube.com/vi/gCNeDWCI0vo/0.jpg'
//     },
//   {
//     text: 'Softwarebay Desktop 2024.',
//     href: '../worldnews/',
//     // image: 'https://res.cloudinary.com/dm37icb6j/image/upload/v1717477537/Desktop_ikjv44.webp'
//   },
//   {
//     text: 'Softwarebay Multimedia 2024.',
//     href: '../politics/',
//     // image: 'https://res.cloudinary.com/dm37icb6j/image/upload/v1717472629/multimedia_nzsixs.webp'
//   },
//   {
//     text: 'Softwarebay Graphic Design 2024.',
//     href: '../sport/',
//     // image: 'https://res.cloudinary.com/dm37icb6j/image/upload/v1717473042/Graphic_Design_ntmyef.webp'
//   },
//   {
//     text: 'Softwarebay Network 2024.',
//     href: '../tech/',
//     // image: 'https://res.cloudinary.com/dm37icb6j/image/upload/v1717473711/nerwork_mvibk1.webp'
//   },
//   {
//     text: 'Softwarebay Development 2024.',
//     href: '../shopping/',
//     // image: 'https://res.cloudinary.com/dm37icb6j/image/upload/v1717473983/Development_jv6q5p.webp'
//   },
//   {
//     text: 'Softwarebay File Sharing 2024.',
//     href: '../health/',
//     // image: 'https://res.cloudinary.com/dm37icb6j/image/upload/v1717474230/File_Sharing_v5jumb.webp'
//   },
//   {
//     text: 'Softwarebay Security 2024.',
//     href: '../business/',
//     // image: 'https://res.cloudinary.com/dm37icb6j/image/upload/v1717474965/security_dolho1.webp'
//   },
//   {
//     text: 'Softwarebay Games 2024.',
//     href: '../crime/',
//     // image: 'https://res.cloudinary.com/dm37icb6j/image/upload/v1717475178/Games_ocv0yr.webp'
//   },
//   {
//     text: 'Softwarebay Education 2024.',
//     href: '../auto/',
//     // image: 'https://res.cloudinary.com/dm37icb6j/image/upload/v1717475473/Education_q3itoq.webp'
//   },
//   {
//     text: 'Softwarebay Mobile 2024.',
//     href: '../entertainment/',
//     // image: 'https://res.cloudinary.com/dm37icb6j/image/upload/v1717475804/Mobile_ik0vmr.webp'
//   },
//   {
//     text: 'Softwarebay Utilities 2024.',
//     href: '../utilities/',
//     // image: 'https://res.cloudinary.com/dm37icb6j/image/upload/v1717476297/utilities_grpxui.webp'
//   },
//   {
//     text: 'Softwarebay Movies 2024.',
//     href: '../documentary/',
//     // image: 'https://res.cloudinary.com/dm37icb6j/image/upload/v1717476587/Movies_omhgp9.webp'
//   }
// ];

//   return (
//     <div className={styles.marquee}>
//       <div className={styles.marqueeContent}>

//         {itemsnames.map((item, index) => (
//           <Link href={item.href} key={index}>
//             <span className='bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl hover:text-blue-800 font-bold mt-2'>
//               <p className={styles.marqueeItem}>
//                 <img
//                   src={item.image}
//                   alt={item.text}
//                   className={styles.marqueeImage}
//                   style={{
//                     width:'150px',
//                     height:'150px',
//                     borderRadius: '8px',
//                     filter: 'contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)'
//                   }}
//                 />
//                 {item.text}
//               </p>
//             </span>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Marquee;

// import React from "react";
// import Link from "next/link";
// import styles from "@styles/Marquee.module.css";

// const Marquee = () => {
//   const itemsnames = [
//     {
//       text: "Stay Informed: Watch Al Jazeera English Live: @Al Jazeera English, we focus on people and events that affect people's lives.",
//       href: "../live-news/",
//       image: "https://img.youtube.com/vi/gCNeDWCI0vo/0.jpg",
//     },
//     {
//       text: 'Trump Is Running His Transition Team on Secret Money.',
//       href: '../',
//       image: 'https://cdn.24.co.za/files/Cms/General/d/12054/43818184510d4a7f9724bf22209b0aa4.jpg'
//     },
//     {
//       text: 'US Gautam Adani Group Bribery Allegations.',
//       href: "../worldnews/",
//       image: 'https://news24online.com/wp-content/uploads/2024/11/adani.jpg'
//     },
//     {
//       text: 'Highlights: Southampton vs Liverpool | Salah Double Wins It! (2-3)',
//       href: "../sport/",
//       image: 'https://img.youtube.com/vi/KOgtICimh5E/maxresdefault.jpg'
//     },
//     {
//       text: 'Highlights: Australia v India 2024-25 | First Test',
//       href: "../sport/",
//       image: 'https://img.youtube.com/vi/3I0kpPFonSc/maxresdefault.jpg'
//     },
//   ];

//   return (
//     <div className={styles.marquee}>
//       <div className={styles.marqueeContent}>
//         {itemsnames.map((item, index) => (
//           <Link href={item.href} key={index} passHref>
//             <div className={styles.marqueeItem}>
//               {item.image && (
//                 <img
//                   src={item.image}
//                   alt={item.text}
//                   className={styles.marqueeImage}
//                   loading="lazy"
//                   style={{
//                     boxShadow: "0 0 10px 0 #000",
//                     filter: "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)",
//                   }}
//                 />
//               )}
//               <span className='bg-gradient-to-r from-black to-blue-900 bg-clip-text text-transparent text-xl hover:text-blue-800 font-bold mt-2'
//                style={{

//                 textShadow: "1px 1px 0px #000",

//               }}
//               >{item.text}</span>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Marquee;

import React from "react";
import Link from "next/link";
import styles from "@styles/Marquee.module.css";

const Marquee = () => {
  const itemsnames = [
    {
      text: "Stay Informed: Watch Al Jazeera English Live: @Al Jazeera English, we focus on people and events that affect people's lives.",
      href: "../live-news/",
      image: "https://img.youtube.com/vi/gCNeDWCI0vo/0.jpg",
    },
    {
      text: "Trump Is Running His Transition Team on Secret Money.",
      href: "../",
      image:
        "https://cdn.24.co.za/files/Cms/General/d/12054/43818184510d4a7f9724bf22209b0aa4.jpg",
    },
    {
      text: "US Gautam Adani Group Bribery Allegations.",
      href: "../worldnews/",
      image: "https://news24online.com/wp-content/uploads/2024/11/adani.jpg",
    },
    {
      text: "Highlights: Southampton vs Liverpool | Salah Double Wins It! (2-3)",
      href: "../sport/",
      image: "https://img.youtube.com/vi/KOgtICimh5E/maxresdefault.jpg",
    },
    {
      text: "Highlights: Australia v India 2024-25 | First Test",
      href: "../sport/",
      image: "https://img.youtube.com/vi/3I0kpPFonSc/maxresdefault.jpg",
    },
  ];

  return (
    <div className={styles.marquee}>
      <div className={styles.marqueeContent}>
        {itemsnames.map((item, index) => (
          <Link href={item.href} key={index} passHref>
            <div className={styles.marqueeItem}>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.text}
                  className={styles.marqueeImage}
                  loading="lazy"
                  style={{
                    boxShadow: "0 0 10px 0 #000",
                    filter:
                      "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)",
                  }}
                />
              )}
              <span className={styles.marqueeText}>{item.text}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
