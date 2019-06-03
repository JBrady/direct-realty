import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Logo from "reusecore/src/elements/UI/Logo";
import Container from "../../../components/UI/Container";
import FooterWrapper, { List, ListItem } from "./footer.style";

import LogoImage from "../../../assets/image/hosting/logo-bbb-bre.jpg";

import { FOOTER_WIDGET } from "../../../data/Hosting/data";

const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  titleStyle,
  logoStyle,
  textStyle,
  finePrint
}) => {
  return (
    <FooterWrapper>
      <Container className="footer_container">
        <Box className="row" {...row}>
          <Box {...colOne}>
            <Text
              content="©2019 Direct Realty – All Rights Reserved"
              {...textStyle}
            />
            <Logo
              href="#"
              logoSrc={LogoImage}
              title="Direct Realty"
              logoStyle={logoStyle}
            />
          </Box>
          <Text
            className="finePrint"
            content="This information is deemed reliable but not guaranteed. 
          You should rely on this information only to decide whether or not to further investigate a particular 
          property. BEFORE MAKING ANY OTHER DECISION, YOU SHOULD PERSONALLY INVESTIGATE THE FACTS 
          (e.g. square footage and lot size) with the assistance of an appropriate professional. 
          You may use this information only to identify properties you may be interested in investigating further. 
          All uses except for personal, non-commercial use in accordance with the foregoing purpose are prohibited. 
          Redistribution or copying of this information, any photographs or video tours is strictly prohibited. 
          This information is derived from the Internet Data Exchange (IDX) service provided by San Diego MLS. 
          Displayed property listings may be held by a brokerage firm other than the broker and/or agent responsible 
          for this display. The information and any photographs and video tours and the compilation from which they 
          are derived is protected by copyright. Compilation © 2019 San Diego MLS."
            {...finePrint}
          />
          {/* <Box {...colOne}>
            <Logo
              href="#"
              logoSrc={LogoImage}
              title="Direct Realty"
              logoStyle={logoStyle}
            /> 
            <Heading content="Contact" {...titleStyle} />
            <Text content="Email Us" {...textStyle} />
            <Text content="619-471-7444" {...textStyle} />
          </Box> */}
          {/* End of footer logo column */}
          {/* <Box {...colTwo}>
            {FOOTER_WIDGET.map((widget, index) => (
              <Box className="col" {...col} key={`footer-widget-${index}`}>
                <Heading content={widget.title} {...titleStyle} />
                <List>
                  {widget.menuItems.map((item, index) => (
                    <ListItem key={`footer-list-item-${index}`}>
                      <Link href={item.url}>
                        <a className="ListItem">{item.text}</a>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box> */}
          {/* End of footer List column */}
        </Box>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  finePrint: PropTypes.object
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px"
  },
  // Footer col one style
  colOne: {
    // width: [1, "35%", "35%", "23%"],
    width: [1, "100%", "100%", "100%"],
    mt: [0, "13px"],
    mb: ["30px", 0],
    pl: ["15px", 0],
    pr: ["15px", "15px", 0]
  },
  // Footer col two style
  colTwo: {
    width: ["100%", "65%", "65%", "77%"],
    flexBox: true,
    flexWrap: "wrap"
  },
  // Footer col default style
  col: {
    width: ["100%", "50%", "50%", "25%"],
    pl: "15px",
    pr: "15px",
    mb: "30px"
  },
  // widget title default style
  titleStyle: {
    color: "#343d48",
    fontSize: "16px",
    fontWeight: "700",
    mb: "30px"
  },
  // Default logo size
  logoStyle: {
    width: "70px",
    mb: "15px"
  },
  // widget text default style
  textStyle: {
    color: "#0f2137",
    fontSize: "16px",
    mb: "10px"
  },
  // widget text default style
  finePrint: {
    color: "#0f2137",
    fontSize: "10px",
    mb: "10px"
  }
};

export default Footer;
