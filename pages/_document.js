import Document, { Html, Head, Main, NextScript } from "next/document";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "/",
      url: "/",
      name: "UWatchFree | Watch Latest Movies & TV-Series Online Free",
      isPartOf: {
        "@id": "/#website",
      },
      about: {
        "@id": "/#organization",
      },
      description:
        "Watch free movies online free. UWatchFree is a movie streaming site with all new Hollywood and Bollywood movies added daily. No registration required for free streaming movie.",
      breadcrumb: {
        "@id": "/#breadcrumb",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "/#website",
      url: "/",
      name: "Uwatchfree™",
      description: "",
      publisher: {
        "@id": "/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "/#organization",
      name: "Uwatchfree™",
      url: "/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "/#/schema/logo/image/",
        url: "/logo.png",
        contentUrl: "/logo.png",
        width: 834,
        height: 135,
        caption: "Uwatchfree™",
      },
      image: {
        "@id": "/#/schema/logo/image/",
      },
    },
  ],
};

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
      
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          />
          <link rel="canonical" href="/" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
