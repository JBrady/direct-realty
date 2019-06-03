import {
  IconOne,
  IconTwo,
  IconThree,
  IconFour,
  IconFive,
  IconSix,
  AuthorOne,
  AuthorTwo,
  AuthorThree,
  ReviewOne,
  ReviewTwo,
  ReviewThree,
  ReviewFour,
  ReviewFive,
  ReviewSix,
  ReviewSeven,
  ReviewEight,
  ReviewNine,
  ReviewTen,
  ReviewEleven,
  ReviewTwelve,
  ReviewThirteen
} from "./images";

// Feature Section Content
export const FEATURES_DATA = [
  {
    title: "Kathleen Gonzalez",
    description:
      "Buyer’s Agent, Listing Agent, Commercial Properties, Landlord",
    icon: "flaticon-trophy violate",
    animation: true
  },
  {
    title: "Joe Gonzalez",
    description:
      "Buyer’s Agent, Listing Agent, Short-Sale, Finance, Consulting",
    icon: "flaticon-startup yellow",
    animation: true
  },
  {
    title: "Marcella Prado",
    description:
      "Buyer’s Agent, Listing Agent, Foreclosure, Short-Sale, Consulting",
    icon: "flaticon-creative green",
    animation: true
  }
];

// FAQ Section Content
export const FAQ_DATA = [
  {
    expend: true,
    title: "How to contact with Customer Service?",
    description:
      "Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. "
  },
  {
    title: "App installation failed, how to update system information?",
    description:
      "Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . "
  },
  {
    title: "Website reponse taking time, how to improve?",
    description:
      "At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum ."
  },
  {
    title: "New update fixed all bug and issues?",
    description:
      "We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us ."
  }
];

// Service Section Content
export const SERVICES_DATA = [
  {
    title: "Development Server ",
    description:
      "Get Lightspeed Development Server for your website and fly in the web",
    icon: `${IconOne}`
  },
  {
    title: "Web Protection",
    description:
      "Best Protection and some tools are provided with our Web servers .",
    icon: `${IconTwo}`
  },
  {
    title: "E-commerce Shop",
    description:
      "You can build any kind of E-commerce Shop with payment security tools",
    icon: `${IconThree}`
  },
  {
    title: "Money Back Guarantee",
    description:
      "We have provided 30 days money back guarantee for our customer",
    icon: `${IconFour}`
  },
  {
    title: "Client Satisfaction",
    description:
      "Client Satisfaction is our first priority and We are best at it",
    icon: `${IconFive}`
  },
  {
    title: "24/7 Online Support",
    description:
      "A Dedicated support team is always ready to provide best support ",
    icon: `${IconSix}`
  }
];

export const MENU_ITEMS = [
  {
    label: "Home",
    path: "#banner_section",
    offset: "70"
  },
  {
    label: "About Us",
    path: "#teamSection",
    offset: "70"
  },
  {
    label: "Sellers",
    path: "#info_section",
    offset: "70"
  },
  {
    label: "Buyers",
    path: "#domain_section",
    offset: "70"
  },
  {
    label: "Reviews",
    path: "#testimonial_section",
    offset: "70"
  }
  // {
  //   label: 'Contact',
  //   path: '#contact_section',
  //   offset: '70',
  // },
];

export const FOOTER_WIDGET = [
  {
    title: "About Us",
    menuItems: [
      {
        url: "#teamSection",
        text: "About Us"
      }
      // {
      //   url: "#",
      //   text: "Customer Support"
      // },
      // {
      //   url: "#",
      //   text: "About Us"
      // },
      // {
      //   url: "#",
      //   text: "Copyright"
      // },
      // {
      //   url: "#",
      //   text: "Popular Campaign"
      // }
    ]
  },

  {
    title: "Sellers",
    menuItems: [
      {
        url: "#info_section",
        text: "Sellers"
      }
      // {
      //   url: "#",
      //   text: "Privacy Policy"
      // },
      // {
      //   url: "#",
      //   text: "Terms & Conditions"
      // },
      // {
      //   url: "#",
      //   text: "Site Map"
      // },
      // {
      //   url: "#",
      //   text: "Store Hours"
      // }
    ]
  },

  {
    title: "Buyers",
    menuItems: [
      {
        url: "#domain_section",
        text: "Buyers"
      }
      // {
      //   url: "#",
      //   text: "Social media directories"
      // },
      // {
      //   url: "#",
      //   text: "Images & B-roll"
      // },
      // {
      //   url: "#",
      //   text: "Permissions"
      // },
      // {
      //   url: "#",
      //   text: "Speaker requests"
      // }
    ]
  },

  {
    title: "Reviews",
    menuItems: [
      {
        url: "#",
        text: "Reviews"
      }
      // {
      //   url: "#",
      //   text: "Software principles"
      // },
      // {
      //   url: "#",
      //   text: "Unwanted software policy"
      // },
      // {
      //   url: "#",
      //   text: "Responsible supply chain"
      // }
    ]
  }
];

export const MONTHLY_PRICING_TABLE = [
  {
    freePlan: true,
    name: "Basic Account",
    description: "For Small teams or group who need to build website ",
    price: "$0",
    priceLabel: "Only for first month",
    buttonLabel: "CREATE FREE ACCOUNT",
    url: "#",
    listItems: [
      {
        content: "Drag & Drop Builder"
      },
      {
        content: "1,000s of Templates Ready"
      },
      {
        content: "Blog Tools"
      },
      {
        content: "eCommerce Store "
      },
      {
        content: "30+ Webmaster Tools"
      }
    ]
  },
  {
    name: "Business Account",
    description: "For Mediums teams or group who need to build website ",
    price: "$9.87",
    priceLabel: "Per month & subscription yearly",
    buttonLabel: "START FREE TRIAL",
    url: "#",
    listItems: [
      {
        content: "Drag & Drop Builder"
      },
      {
        content: "1,000s of Templates Ready"
      },
      {
        content: "Blog Tools"
      },
      {
        content: "eCommerce Store "
      },
      {
        content: "30+ Webmaster Tools"
      }
    ]
  },
  {
    name: "Premium Account",
    description: "For Large teams or group who need to build website ",
    price: "$12.98",
    priceLabel: "Per month & subscription yearly",
    buttonLabel: "START FREE TRIAL",
    url: "#",
    listItems: [
      {
        content: "Drag & Drop Builder"
      },
      {
        content: "1,000s of Templates Ready"
      },
      {
        content: "Blog Tools"
      },
      {
        content: "eCommerce Store "
      },
      {
        content: "30+ Webmaster Tools"
      }
    ]
  }
];

export const YEARLY_PRICING_TABLE = [
  {
    freePlan: true,
    name: "Basic Account",
    description: "For a single client or team who need to build website ",
    price: "$0",
    priceLabel: "Only for first month",
    buttonLabel: "CREATE FREE ACCOUNT",
    url: "#",
    listItems: [
      {
        content: "Drag & Drop Builder"
      },
      {
        content: "1,000s of Templates Ready"
      },
      {
        content: "Blog Tools"
      },
      {
        content: "eCommerce Store "
      },
      {
        content: "30+ Webmaster Tools"
      }
    ]
  },
  {
    name: "Business Account",
    description: "For Small teams or group who need to build website ",
    price: "$6.00",
    priceLabel: "Per month & subscription yearly",
    buttonLabel: "START FREE TRIAL",
    url: "#",
    listItems: [
      {
        content: "Unlimited secure storage"
      },
      {
        content: "2,000s of Templates Ready"
      },
      {
        content: "Blog Tools"
      },
      {
        content: "24/7 phone support"
      },
      {
        content: "50+ Webmaster Tools"
      }
    ]
  },
  {
    name: "Premium Account",
    description: "For Large teams or group who need to build website ",
    price: "$9.99",
    priceLabel: "Per month & subscription yearly",
    buttonLabel: "START FREE TRIAL",
    url: "#",
    listItems: [
      {
        content: "Drag & Drop Builder"
      },
      {
        content: "3,000s of Templates Ready"
      },
      {
        content: "Advanced branding"
      },
      {
        content: "Knowledge base support"
      },
      {
        content: "80+ Webmaster Tools"
      }
    ]
  }
];

export const TESTIMONIALS = [
  {
    // review:
    //   "Joe found us a fixer upper and was hands on with the renovation process. \
    //   He has access to a team of contractors, and designers who were able to get the house ready for us to flip \
    //   in just under 2 months. We relisted and got an offer above our asking price! More than satisfied with my \
    //   experience with Joe! I recommend him to all my friends.",
    // name: "manfeyb",
    // designation:
    //   "Bought and sold a Single Family home in 2016 in Northwest, Chula Vista, CA.",
    avatar: `${ReviewOne}`
  },
  {
    // review:
    //   "Joe can buy or sell my property anytime. Initially working with his dad, Joe helped my wife \
    //   and I find our retirement home. With Joe's very professional work and clear ability to deal \
    //   with people we were able to sell a home and purchase a new one with ease. I truly believe that \
    //   Joe's strongest   asset is that he not only looks for a sell, but he looks for the satisfaction \
    //   of his customers. WE ARE SATISFIED!!",
    // name: "chicox32001",
    // designation: "Bought and sold a Single Family home in 2013 in Bonita, CA.",
    avatar: `${ReviewTwo}`
  },
  {
    // review:
    //   "Trustworthy Agent! Joe and his family team listed our home in Otay Ranch earlier this year. \
    //   However, we decided not to upgrade to a larger home at this time. Afterward, Joe went out of \
    //   his way to connect us with a lender who was able to significantly lower our monthly payment. \
    //   Joe has a no   pressure approach and did not try to push us into a new house which would have \
    //   meant a higher mortgage payment.",
    // name: "celinam7",
    // designation:
    //   "Listed my Single Family home in 2015 in Otay Ranch, Chula Vista, CA.",
    avatar: `${ReviewThree}`
  },
  {
    avatar: `${ReviewFour}`
  },
  {
    avatar: `${ReviewFive}`
  },
  {
    avatar: `${ReviewSix}`
  },
  {
    avatar: `${ReviewSeven}`
  },
  {
    avatar: `${ReviewEight}`
  },
  {
    avatar: `${ReviewNine}`
  },
  {
    avatar: `${ReviewTen}`
  },
  {
    avatar: `${ReviewEleven}`
  },
  {
    avatar: `${ReviewTwelve}`
  },
  {
    avatar: `${ReviewThirteen}`
  }
];

export const DOMAIN_NAMES = [
  {
    label: ".com",
    value: "com"
  },
  {
    label: ".net",
    value: "net"
  },
  {
    label: ".org",
    value: "org"
  },
  {
    label: ".co",
    value: "co"
  },
  {
    label: ".edu",
    value: "edu"
  },
  {
    label: ".me",
    value: "me"
  }
];

export const DOMAIN_PRICE = [
  {
    content: ".com $9.26"
  },
  {
    content: ".sg $7.91"
  },
  {
    content: ".space $12.54"
  },
  {
    content: ".info $9.13"
  },
  {
    content: "& much more",
    url: "#"
  }
];
