import React from "react";
import Head from "next/head";
import Script from "next/script";

const cookiepolicy = () => {
  const containerStyle = {
    margin: "24px auto",
    padding: "0 24px",
    maxWidth: "960px",
  };

  const sectionStyle = {
    marginBottom: "32px",
    color: "#333",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
  };

  const listItemStyle = {
    marginLeft: "20px",
  };

  const linkStyle = {
    fontWeight: "bold",
    color: "#007bff",
    textDecoration: "none",
  };

  const rankMathSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://worldsnews24.vercel.app/#organization",
        name: "World News 24™ – Stay Informed, Stay Ahead",
        url: "https://worldsnews24.vercel.app",
      },
      {
        "@type": "WebSite",
        "@id": "https://worldsnews24.vercel.app/intro/cookiepolicy#website",
        url: "https://worldsnews24.vercel.app/intro/cookiepolicy",
        name: "World News 24™ – Stay Informed, Stay Ahead",
        publisher: {
          "@type": "Organization",
          "@id": "https://worldsnews24.vercel.app/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://worldsnews24.vercel.app/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://worldsnews24.vercel.app/intro/cookiepolicy#webpage",
        url: "https://worldsnews24.vercel.app/intro/cookiepolicy",
        name: "Movie",
        datePublished: "2024-01-13T13:00:00+00:00",
        dateModified: "2024-01-13T13:13:00+00:00",
        isPartOf: {
          "@id": "https://worldsnews24.vercel.app/#website",
        },
        inLanguage: "en-US",
        mainEntity: [
          {
            "@type": "Article",
            "@id": "https://worldsnews24.vercel.app/intro/cookiepolicy",
            url: "https://worldsnews24.vercel.app/intro/cookiepolicy",
            headline: "Movie",
            datePublished: "2024-01-13T13:00:00+00:00",
            dateModified: "2024-01-13T13:13:00+00:00",
            publisher: {
              "@type": "Organization",
              "@id": "https://worldsnews24.vercel.app/#organization",
              name: "World News 24™ – Stay Informed, Stay Ahead",
              url: "https://worldsnews24.vercel.app",
            },
          },
        ],
      },
    ],
  });

  return (
    <div>
      <Head>
        <title>World News 24™ | Cookie Policy</title>
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="https://worldsnews24.vercel.app/sitemap.xml"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="googlebot" content="index,follow" />
        <meta name="revisit-after" content="1 days" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="keywords"
          content="latest news, live news, business news, news in India, online news, bollywood news, breaking news, current news, world news, sports news, india latest news, news headlines, news site, news website, top news, India news, entertainment news, national news, political news, Asian News International"
        />
        <meta
          name="description"
          content="World News 24™: Your trusted source for breaking news, global updates, and in-depth analysis from around the world. Stay informed 24/7 with real-time coverage of politics, business, technology, culture, and more."
        />
        <link
          rel="canonical"
          href="https://worldsnews24.vercel.app/intro/cookiepolicy"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="World News 24™  " />
        <meta
          property="og:description"
          content="World News 24™: Your trusted source for breaking news, global updates, and in-depth analysis from around the world. Stay informed 24/7 with real-time coverage of politics, business, technology, culture, and more."
        />
        <meta
          property="og:url"
          content="https://worldsnews24.vercel.app/intro/cookiepolicy/"
        />
        <meta property="og:site_name" content="World News 24™  " />
        <meta
          property="og:image"
          content="https://worldsnews24.vercel.app/og_image.jpg"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="og:image:type" content="image/jpg" />
        <meta name="application-name" content="World News 24™  " />
        <meta
          property="article:modified_time"
          content="2024-01-01T13:13:13+00:00"
        />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="https://worldsnews24.vercel.app/sitemap.xml"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="google-site-verification"
          content="BZNZaUyoS1nXyRfa99f4VJ3ABKZUZhkKB0pZ3DU3L8s"
        />
        <meta
          name="facebook-domain-verification"
          content="du918bycikmo1jw78wcl9ih6ziphd7"
        />
        <meta
          name="dailymotion-domain-verification"
          content="dmdzuqt3p027t2adn"
        />
        <meta name="monetag" content="35a75bbdeae678c82776e64fb78cdac5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: rankMathSchema }}
        />
      </Head>
      {/* <Script src="../../propler/ads.js" defer />
      <Script src="../../propler/ads2.js" defer /> */}

      <div style={containerStyle}>
        <section style={sectionStyle}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div
              style={{
                flexGrow: 1,
                flexShrink: 0,
                flexBasis: "auto",
                marginBottom: "12px",
                width: "100%",
                padding: "0 12px",
              }}
            >
              <h1 style={headingStyle}>Cookie Policy</h1>
              <p style={{ color: "#666", marginBottom: "24px" }}>
                This is the Cookie Policy for World News 24™ , accessible from
                https://worldsnews24.vercel.app and its subdomains.
              </p>

              <h2 style={headingStyle}>What Are Cookies</h2>
              <p style={{ color: "#666", marginBottom: "24px" }}>
                As is common practice with nearly all professional websites,
                this site uses cookies, which are small files downloaded to your
                computer, to enhance your browsing experience. This page
                explains the information they collect, their purpose, and why we
                occasionally need to store these cookies. We'll also outline how
                you can prevent these cookies from being stored, though this
                might result in the reduction or disruption of certain site
                features.
              </p>

              <h2 style={headingStyle}>How We Use Cookies</h2>
              <p style={{ color: "#666", marginBottom: "24px" }}>
                We employ cookies for various purposes as detailed below.
                Unfortunately, in most cases, there are no universally accepted
                industry settings to disable cookies without entirely
                sacrificing the functionality and features they contribute to
                the site. It is advisable to keep all cookies enabled unless you
                are unsure whether they are necessary, in case they are used to
                provide a service you utilize.
              </p>

              <h2 style={headingStyle}>Disabling Cookies</h2>
              <p style={{ color: "#666", marginBottom: "24px" }}>
                You have the option to prevent cookies from being set by
                adjusting your browser settings (consult your browser's Help
                section for guidance). Be aware that disabling cookies will
                impact the functionality of this site, along with many other
                websites you visit. This usually involves the deactivation of
                certain features and functionalities on this site. Thus, it is
                recommended that you do not disable cookies.
              </p>

              <h2 style={headingStyle}>The Cookies We Set</h2>
              <p style={{ color: "#666", marginBottom: "24px" }}>
                Forms Related Cookies: When you submit data through forms like
                those on cookiepolicy pages or comment forms, cookies might be set to
                remember your user details for future interactions.
              </p>
              <p style={{ color: "#666", marginBottom: "24px" }}>
                Site Preferences Cookies: To offer you a tailored experience on
                this site, we enable you to customize your preferences for how
                the site behaves when you use it. These preferences are stored
                in cookies so that the site can recall them when you interact
                with pages affected by your choices.
              </p>

              <h2 style={headingStyle}>Third Party Cookies</h2>
              <p style={{ color: "#666", marginBottom: "24px" }}>
                In specific cases, we use cookies from trusted third parties.
                The following section outlines third party cookies you might
                encounter on this site.
              </p>
              <p style={{ color: "#666", marginBottom: "24px" }}>
                This site employs Google Analytics, a widely used and reliable
                analytics solution that helps us understand your site usage for
                further improvement. These cookies track data such as time spent
                on the site and visited pages, aiding us in producing engaging
                content. For more information on Google Analytics cookies, refer
                to the official Google Analytics page.
              </p>
              <p style={{ color: "#666", marginBottom: "24px" }}>
                The Google AdSense and/or Google AdManager service, used to
                deliver advertising, uses a DoubleClick cookie to show more
                relevant ads across the web and limit the frequency of specific
                ads shown to you. For further details on Google AdSense, consult
                the official Google AdSense privacy FAQ. Advertisements support
                the site's operational costs and development. The behavioral
                advertising cookies on this site anonymously track your
                interests to ensure relevant ad display. These ads mirror your
                interests and may appeal to you.
              </p>
              <p style={{ color: "#666", marginBottom: "24px" }}>
                Several partners advertise on our behalf; affiliate tracking
                cookies verify if customers visit via our partner sites,
                enabling proper crediting and bonus provision for purchases made
                through affiliate partners.
              </p>
              {/* Add more sections with similar structure */}
              <h2 style={headingStyle}>More Information</h2>
              <p style={{ color: "#666", marginBottom: "24px" }}>
                We hope this clarifies matters. As previously mentioned, if
                you're uncertain about whether you require cookies enabled, it's
                safer to keep them enabled in case they interact with features
                you use on our site.
              </p>

              <p style={{ color: "#666" }}>
                Please review these terms and conditions carefully before using
                our website. If you have any questions or concerns, please
                contact us at{" "}
                <a style={linkStyle} href="mailto:drtrailer2022@gmail.com">
                  drtrailer2022@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default cookiepolicy;
