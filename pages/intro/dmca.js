import React from 'react'
import Head from 'next/head'
import Script from 'next/script'


const dmca = () => {
  const containerStyle = {
    margin: '24px auto',
    padding: '0 24px',
    maxWidth: '960px'
  }

  const sectionStyle = {
    marginBottom: '32px',
    color: '#333'
  }

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem'
  }

  const listItemStyle = {
    marginLeft: '20px'
  }

  const linkStyle = {
    fontWeight: 'bold',
    color: '#007bff',
    textDecoration: 'none'
  }

  const rankMathSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "http://localhost:3000/#organization",
        name: "World News 24™ – Stay Informed, Stay Ahead",
        url: "http://localhost:3000",
      },
      {
        "@type": "WebSite",
        "@id": "http://localhost:3000/intro/contact#website",
        url: "http://localhost:3000/intro/contact",
        name: "World News 24™ – Stay Informed, Stay Ahead",
        publisher: {
          "@type": "Organization",
          "@id": "http://localhost:3000/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "http://localhost:3000/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "http://localhost:3000/intro/contact#webpage",
        url: "http://localhost:3000/intro/contact",
        name: "Movie",
        datePublished: "2024-01-13T13:00:00+00:00",
        dateModified: "2024-01-13T13:13:00+00:00",
        isPartOf: {
          "@id": "http://localhost:3000/#website",
        },
        inLanguage: "en-US",
        mainEntity: [
          {
            "@type": "Article",
            "@id": "http://localhost:3000/intro/contact",
            url: "http://localhost:3000/intro/contact",
            headline: "Movie",
            datePublished: "2024-01-13T13:00:00+00:00",
            dateModified: "2024-01-13T13:13:00+00:00",
            publisher: {
              "@type": "Organization",
              "@id": "http://localhost:3000/#organization",
              name: "World News 24™ – Stay Informed, Stay Ahead",
              url: "http://localhost:3000",
            },
          },
        ],
      },
    ],
  });



  return (
    <div>
      <Head>
        <title>World News 24™ | DMCA</title>
        <link
          rel='sitemap'
          type='application/xml'
          title='Sitemap'
          href='http://localhost:3000/sitemap.xml'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='icon'
          type='image/x-icon'
          href='/favicon.ico'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='googlebot' content='index,follow' />
        <meta name='revisit-after' content='1 days' />
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
      <meta name="keywords" content="world news 24, world news, united kingdom, united states, australia, canada, europe, asia, japan, china, south america" />
        <meta
          name='description'
         content="World News 24™: Your trusted source for breaking news, global updates, and real-time coverage of politics, business, technology, culture, sports, and more—24/7."
        />
        <link
          rel='canonical'
          href='http://localhost:3000/intro/intro/dmca'
        />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='World News 24™  ' />
        <meta
          property='og:description'
          content="World News 24™: Your trusted source for breaking news, global updates, and real-time coverage of politics, business, technology, culture, sports, and more—24/7."
        />
        <meta
          property='og:url'
          content='http://localhost:3000/intro/intro/dmca/'
        />
        <meta property='og:site_name' content='World News 24™  ' />
        <meta
          property='og:image'
          content='http://localhost:3000/og_image.jpg'
        />
        <meta property='og:image:width' content='1280' />
        <meta property='og:image:height' content='720' />
        <meta property='og:image:type' content='image/jpg' />
        <meta name='application-name' content='World News 24™  ' />
        <meta
          property='article:modified_time'
          content='2024-01-01T13:13:13+00:00'
        />
        <link
          rel='sitemap'
          type='application/xml'
          title='Sitemap'
          href='http://localhost:3000/sitemap.xml'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='google-site-verification'
          content='BZNZaUyoS1nXyRfa99f4VJ3ABKZUZhkKB0pZ3DU3L8s'
        />
        <meta
          name='facebook-domain-verification'
          content='du918bycikmo1jw78wcl9ih6ziphd7'
        />
        <meta
          name='dailymotion-domain-verification'
          content='dmdzuqt3p027t2adn'
        />
        <meta name='monetag' content='35a75bbdeae678c82776e64fb78cdac5' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: rankMathSchema }}
        />
      
      </Head>
      {/* <Script src='../../propler/ads.js' defer />
      <Script src='../../propler/ads2.js' defer /> */}

      <div style={containerStyle}>
        <section style={sectionStyle}>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div
              style={{
                flexGrow: 1,
                flexShrink: 0,
                flexBasis: 'auto',
                marginBottom: '12px',
                width: '100%',
                padding: '0 12px'
              }}
            >
              <h1 style={headingStyle}>
                DMCA Copyright Infringement Notification
              </h1>
              <p style={{ color: '#666', marginBottom: '24px' }}>
                All trademarks, registered trademarks, product names, and
                company names or logos appearing on the site are the property of
                their respective owners. Filepuma complies with the federal
                Digital Millennium Copyright Act (DMCA) by responding to
                credible notices of alleged infringement that adhere to the DMCA
                and other applicable laws. As part of our response protocol, we
                may take down or disable access to material hosted on the
                Filepuma website that is claimed to be infringing. In such
                cases, we will earnestly attempt to establish contact with the
                developer who posted the disputed material, allowing them the
                opportunity to present a counter notification as outlined by the
                DMCA.
              </p>
              <p style={{ color: '#666', marginBottom: '24px' }}>
                Before proceeding with either a Notice of Infringing Material or
                Counter-Notification, it is recommended to seek legal advice to
                fully comprehend your rights and obligations under the DMCA and
                other relevant laws. The subsequent notice guidelines are
                designed to align with Filepuma's responsibilities under the
                DMCA, particularly section 512(c), and do not constitute legal
                counsel.
              </p>

              <h2 style={headingStyle}>Notice of Copyright Infringement</h2>
              <ul
                style={{
                  ...listItemStyle,
                  color: '#666',
                  marginBottom: '24px'
                }}
              >
                <li>
                  To submit a notice of infringing material on Filepuma, kindly
                  provide a notification containing the ensuing details:
                </li>
                <li>
                  A physical signature of a developer or development team
                  authorized to act on behalf of the owner of an exclusive right
                  that is allegedly infringed. For third-party agencies, please
                  include a copy of the "Physical Authorization Letter" to
                  verify authority over copyrighted content.
                </li>
                <li>
                  Identification of the copyrighted work claimed to be
                  infringed, or, if multiple copyrighted works at a single
                  online location are covered by one notification, furnish a
                  representative list of these works on that site.
                </li>
                <li>
                  Incorporating URLs within the email body is the most effective
                  way to expedite content identification.
                </li>
                <li>
                  Information reasonably sufficient to enable the service
                  provider to contact the complaining party, including an
                  address, telephone number, and, if available, an email address
                  where the complaining party can be reached.
                </li>
                <li>
                  A statement that the complaining party believes in good faith
                  that the material's usage, as complained of, lacks
                  authorization from the copyright owner, its agent, or the law.
                </li>
                <li>
                  A statement affirming the accuracy of the notification's
                  information, along with a declaration, made under penalty of
                  perjury, that the complaining party is authorized to act on
                  behalf of the owner of an exclusive right that is allegedly
                  infringed (Note: Under Section 512(f), individuals who
                  knowingly and materially misrepresent infringing material or
                  activity may be liable for damages).
                </li>
              </ul>

              <h2 style={headingStyle}>Contact Infringement Notice</h2>

              <p style={{ color: '#666' }}>
                Please review these terms and conditions carefully before using
                our website. If you have any questions or concerns, please
                contact us at{' '}
                <a style={linkStyle} href='mailto: drtrailer2022@gmail.com'>
                drtrailer2022@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default dmca
