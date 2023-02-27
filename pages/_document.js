import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            type="application/ld+json"
            class="yoast-schema-graph"
            dangerouslySetInnerHTML={{
              __html: `{
                "@context":"https://schema.org",
                "@graph":[{"@type":"WebPage",
                "@id":"https://uwatch4free.vercel.app/",
                "url":"https://uwatch4free.vercel.app/",
                "name":"Uwatch4free™ Hollywood Bollywood Adult | Watch now the Best TV shows and Movies",
                "isPartOf":{"@id":"https://uwatch4free.vercel.app/#website"},
                "primaryImageOfPage":{"@id":"https://uwatch4free.vercel.app/#primaryimage"},
                "image":{"@id":"https://uwatch4free.vercel.app/#primaryimage"},
                "thumbnailUrl":"https://uwatch4free.vercel.app/logo.png",
                "datePublished":"2023-01-02T10:50:12+00:00",
                "dateModified":"2023-02-20T11:33:45+00:00",
                "description":"Uwatch4free™ Hollywood Bollywood Adult | Watch now the Best TV shows and Movies",
                "breadcrumb":{"@id":"https://uwatch4free.vercel.app/#breadcrumb"},
                "inLanguage":"en-US",
                "potentialAction":[{"@type":"ReadAction",
                "target":["https://uwatch4free.vercel.app/"]}]},
                {"@type":"ImageObject",
                "inLanguage":"en-US",
                "@id":"https://uwatch4free.vercel.app/#primaryimage",
                "url":"https://uwatch4free.vercel.app/logo.png",
                "contentUrl":"https://uwatch4free.vercel.app/logo.png",
                "width":381,
                "height":77,
                "caption":"Uwatch4free™"},
                {"@type":"BreadcrumbList",
                "@id":"https://uwatch4free.vercel.app/#breadcrumb",
                "itemListElement":[{"@type":"ListItem","position":1,
                "name":"Uwatch4free™"}]},
                {"@type":"WebSite",
                "@id":"https://uwatch4free.vercel.app/#website",
                "url":"https://uwatch4free.vercel.app/",
                "name":"Uwatch4free™",
                "description":"Uwatch4free™| Watch now the Best TV shows and Movies",
                "potentialAction":[{"@type":"SearchAction",
                "target":{"@type":"EntryPoint",
                "urlTemplate":"https://uwatch4free.vercel.app/?s={search_term_string}"},
                "query-input":"required name=search_term_string"}],
                "inLanguage":"en-US"}]}`
            }}
          />
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
