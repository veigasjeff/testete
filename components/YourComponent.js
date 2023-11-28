import Script from "next/script";

const YourComponent = () => (
  <>
    <Script
      strategy="beforeInteractive"
      src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
    />
    <Script
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          WebFont.load({
            google: {
              families: ['Poppins:700']
            }
          });
        `,
      }}
    />
    {/* Your component content here */}
  </>
);

export default YourComponent;
