import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { hostingTheme } from 'common/src/theme/hosting';
import {
  GlobalStyle,
  ContentWrapper,
} from 'common/src/containers/Hosting/hosting.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from 'common/src/containers/Hosting/Navbar';
import ContactSection from 'common/src/containers/Hosting/Contact';
import Footer from 'common/src/containers/Hosting/Footer';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { ParallaxProvider } from 'react-scroll-parallax';

export default () => {
  return (
    <ThemeProvider theme={hostingTheme}>
      <ParallaxProvider>
        <Head>
          <title>Direct Realty |Joe Gonzalez</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#eb4d4b" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,900|Open+Sans:400,400i,600,700"
            rel="stylesheet"
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>

          {/* <BannerSection /> */}
          {/* <TeamSection /> */}
          {/* <FeatureSection />
          <InfoSection />
          <DomainSection /> */}
          {/* <PricingSection />
          <ServicesSection />
          <PaymentSection />
          <GuaranteeSection />
          <FaqSection /> */}
          {/* <TestimonialSection /> */}
          <ContactSection />
          <Footer />
        </ContentWrapper>
      </ParallaxProvider>
    </ThemeProvider>
  );
};

// export default function JoeGonzalez() {
//   return (
//     <div>
//       <p>This is Joe Gonzalez's detail page</p>
//     </div>
//   );
// }
