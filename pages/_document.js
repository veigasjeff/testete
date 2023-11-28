import Document, { Html, Head, Main, NextScript } from 'next/document';


const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "/",
      "url": "/",
      "name": "Uwatch4free | Watch HD Quality Movies & TV Series Online Free.",
      "isPartOf": {
        "@id": "/#website"
      },
      "about": {
        "@id": "/#organization"
      },
      "description": "Watch free movies online free. Uwatch4free is a movie streaming site with all new Hollywood and Bollywood movies added daily. No registration required for free streaming movie.",
      "breadcrumb": {
        "@id": "/#breadcrumb"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "/#website",
      "url": "/",
      "name": "Uwatch4free™",
      "description": "",
      "publisher": {
        "@id": "/#organization"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      ],
      "inLanguage": "en-US"
    },
    {
      "@type": "Organization",
      "@id": "/#organization",
      "name": "Uwatch4free™",
      "url": "/",
      "logo": {
        "@type": "ImageObject",
        "inLanguage": "en-US",
        "@id": "/#/schema/logo/image/",
        "url": "/logo.png",
        "contentUrl": "/logo.png",
        "width": 834,
        "height": 135,
        "caption": "Uwatch4free™"
      },
      "image": {
        "@id": "/#/schema/logo/image/"
      }
    }
  ]
};

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <meta name="facebook-domain-verification" content="13auzwhblf4oo4jn5vl6gcmebugsqb" />
        <link rel="preconnect" href="/" />
        <link rel="dns-prefetch" href="/" />
        <Head>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
        <link
          rel="preload"
          href="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610087/og_image_okmgde.jpg"
          as="image"
        />
        <link rel="canonical" href="/" />
        <link rel="preconnect" href="/" />
        <link rel="dns-prefetch" href="/" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <link
            rel="stylesheet"
            href="../styles/ad-blocker.module.css" // Adjust the path as needed
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
