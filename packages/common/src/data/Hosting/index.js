import BlogImage1 from '../../assets/image/hosting/blog/blog-img1.png';
import BlogImage2 from '../../assets/image/hosting/blog/blog-img2.png';
import BlogImage3 from '../../assets/image/hosting/blog/blog-img3.png';
import Member1 from '../../assets/image/hosting/team/member-1.jpg';
import Member2 from '../../assets/image/hosting/team/member-2.jpg';
import Member3 from '../../assets/image/hosting/team/member-3.jpg';
import Denny from '../../assets/image/hosting/client/denny.png';
import Menny from '../../assets/image/hosting/client/menny.png';

const data = {
  menuItems: [
    {
      label: 'Feature',
      path: '#featureSection',
      offset: '80',
    },
    {
      label: 'Work History',
      path: '#workHistorySection',
      offset: '100',
    },
    {
      label: 'Portfolio',
      path: '#blogSection',
      offset: '100',
    },
    {
      label: 'Quality feature',
      path: '#qualitySection',
      offset: '100',
    },
    {
      label: 'Testimonial',
      path: '#testimonialSection',
      offset: '100',
    },
    {
      label: 'Team Member',
      path: '#teamSection',
      offset: '67',
    },
    {
      label: 'FAQ',
      path: '#faqSection',
      offset: '100',
    },
  ],
  aboutus: [
    {
      id: 1,
      title: 'Amazing communication experience.',
      icon: 'flaticon-next',
    },
    {
      id: 2,
      title: 'Best designing experience with trending tools and sizes.',
      icon: 'flaticon-next',
    },
    {
      id: 3,
      title: 'Training and communication method remotely.',
      icon: 'flaticon-next',
    },
    {
      id: 4,
      title: '24/7 Hour onine supports.',
      icon: 'flaticon-next',
    },
  ],
  features: [
    {
      id: 1,
      icon: 'flaticon-flask',
      title: 'Search Optimization',
      description:
        'By using Search Engine Optimization, You will get more Clients',
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      title: 'Ui/UX Design',
      description:
        'We provide the best UI/UX Design by following the latest trends of the market .',
    },
    {
      id: 3,
      icon: 'flaticon-ruler',
      title: 'Wireframing Task',
      description:
        'We respect our customer opinions and deals with them with perfect wireframing ',
    },
    {
      id: 4,
      icon: 'flaticon-startup',
      title: 'Business Solutions',
      description:
        'We are commited to provide proper business solutions with reasonable pricing',
    },
    {
      id: 5,
      icon: 'flaticon-briefing',
      title: 'Business Analysis',
      description:
        'A day to day report about your ongoing business for proper understanding',
    },
    {
      id: 6,
      icon: 'flaticon-creative',
      title: 'Content Management',
      description:
        'Proper Content Management is important to find out the real clients for your agencies',
    },
  ],
  qualityFeature: [
    {
      id: 1,
      icon: 'flaticon-flask',
      title: 'Search Optimization',
      description:
        'By using Search Engine Optimization, You will get more Clients.',
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      title: 'Wireframing Task',
      description:
        'We respect our customer opinions and deals with them with perfect wireframing.',
    },
    {
      id: 3,
      icon: 'flaticon-ruler',
      title: 'Ui/Ux Design',
      description:
        'We provide the best UI/UX Design by following the latest trends of the market .',
    },
    {
      id: 4,
      icon: 'flaticon-briefing',
      title: 'Content Writting',
      description:
        'Proper Content Management is important to find out the real clients for your agencies .',
    },
  ],
  blog: [
    {
      id: 1,
      title: 'Real home corporation',
      thumbnail_url: BlogImage1,
      date: 'November 02, 2018',
      postLink: '#1',
    },
    {
      id: 2,
      title: 'Sheltech developer ltd.',
      thumbnail_url: BlogImage2,
      date: 'November 12, 2018',
      postLink: '#2',
    },
    {
      id: 3,
      title: 'Alt architecture co.',
      thumbnail_url: BlogImage3,
      date: 'December 09, 2018',
      postLink: '#3',
    },
  ],
  teamMember: [
    {
      id: 1,
      name: 'Kathleen Gonzalez',
      thumbnail_url: Member1,
      ca_dre_number: 'CA DRE #00928789',
      designation: 'Owner/Broker',
      specialties:
        'Buyer’s Agent, Listing Agent, Commercial Properties, Landlord',
      bio:
        'Kathleen is a professional, experienced real estate Broker representing both buyers and sellers in their real estate ventures. \
        Whether you are a first time buyer or an investor, you are unique and will be enthusiastically supported by her team with a client-first philosophy. \
        As a member of the San Diego Association of Realtors, Kathleen has full access to legal advice, the latest industry training and is held to a higher \
        standard, a commitment to ethics.  She is licensed with the Bureau of Real Estate as both a Sales Person and a Broker.',

      bio2:
        'Having marketed equity sales, short sales and bank owned (REO) properties of various property types, \
      Kathleen is able to maneuver well for optimum results.  Her attention to detail, problem solving skills and commitment \
      to communication allow her to manage this complex and sometimes emotional process seamlessly.',

      bio3:
        'As an full time Realtor, Kathleen understands that staying active in this market is the only way to support that \
      oh-so-current understanding of the market her clients have come to expect.',

      social_links: [
        // "flaticon-twitter-logo-silhouette",
        // "flaticon-facebook-logo",
        // "flaticon-instagram"
      ],
    },
    {
      id: 2,
      name: 'Joe Gonzalez',
      thumbnail_url: Member2,
      ca_dre_number: 'CA DRE #01385924',
      designation: 'Realtor',
      specialties:
        'Buyer’s Agent, Listing Agent, Short-Sale, Finance, Consulting',
      bio: 'Joe has real estate in his blood.',
      bio2:
        'The youngest son of two successful local real estate brokers, Joe has been working residential real estate for over a decade and his past and current experience in financing, originating and brokering real estate loans affords his clients stellar navigation through the intricacies of today’s real estate transactions.',
      bio3:
        'Joe is committed to satisfying your real estate needs through personalized service that is sensitive to the complex process of buying or selling property. His team focuses on taking the pressure off of you so you can make the best decisions for you and your family.',

      social_links: [
        // "flaticon-twitter-logo-silhouette",
        'flaticon-facebook-logo',
        'flaticon-instagram',
      ],
    },
    {
      id: 3,
      name: 'Marcella Prado',
      thumbnail_url: Member3,
      ca_dre_number: 'CA DRE #01421780',
      designation: 'Realtor',
      specialties:
        'Buyer’s Agent, Listing Agent, Foreclosure, Short-Sale, Consulting',
      bio:
        'Marcella’s passion to provide her clients with an outstanding experience truly sets her apart.',

      bio2:
        'Marcella is a lifelong San Diego County resident dedicated to a tradition of trust and integrity.',
      bio3:
        'During the market down turn, she specialized in short sales which was an opportunity to exercise her negotiation skills.  Described by her clients as an intuitive negotiator and a consistent and effective communicator, Marcella advocates tirelessly on behalf of her clients. She does not work to meet her client’s expectations but to exceed them.',

      social_links: [
        // "flaticon-twitter-logo-silhouette",
        'flaticon-facebook-logo',
        // "flaticon-instagram"
      ],
    },
  ],
  testimonial: [
    {
      id: 1,
      name: 'Denny Albuz',
      designation: 'CEO of Denish Co.',
      comment:
        'Best working experience  with this amazing team & in future, we want to work together',
      avatar_url: Denny,
    },
    {
      id: 2,
      name: 'Roman Ul Oman',
      designation: 'Co-founder of QatarDiaries',
      comment:
        'Impressed with master class support of the team and really look forward for the future.',
      avatar_url: Menny,
    },
    {
      id: 3,
      name: 'Caroleane Mina',
      designation: 'Director of Beauty-queen',
      comment:
        'I have bought more than 10 themes on ThemeForest, and this is the first one I review. Wow! Amazing React Theme',
      avatar_url: Denny,
    },
    {
      id: 4,
      name: 'Roman Ul Oman',
      designation: 'Co-founder of QatarDiaries',
      comment:
        'Impressed with master class support of the team and really look forward for the future.',
      avatar_url: Menny,
    },
  ],
  faq: [
    {
      id: 1,
      expend: true,
      title: 'How to contact with Customer Service?',
      description:
        'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ',
    },
    {
      id: 2,
      title: 'App installation failed, how to update system information?',
      description:
        'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ',
    },
    {
      id: 3,
      title: 'Website reponse taking time, how to improve?',
      description:
        'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .',
    },
    {
      id: 4,
      title: 'New update fixed all bug and issues?',
      description:
        'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .',
    },
  ],
  menuWidget: [
    {
      id: 1,
      title: 'About Us',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Support Center',
        },
        {
          id: 2,
          url: '#2',
          text: 'Customer Support',
        },
        {
          id: 3,
          url: '#3',
          text: 'About Us',
        },
        {
          id: 4,
          url: '#4',
          text: 'Copyright',
        },
        {
          id: 5,
          url: '#5',
          text: 'Popular Campaign',
        },
      ],
    },
    {
      id: 2,
      title: 'Our Information',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Return Policy',
        },
        {
          id: 2,
          url: '#2',
          text: 'Privacy Policy',
        },
        {
          id: 3,
          url: '#2',
          text: 'Terms & Conditions',
        },
        {
          id: 4,
          url: '#4',
          text: 'Site Map',
        },
        {
          id: 5,
          url: '#5',
          text: 'Store Hours',
        },
      ],
    },
    {
      id: 3,
      title: 'My Account',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Press inquiries',
        },
        {
          id: 2,
          url: '#2',
          text: 'Social media directories',
        },
        {
          id: 3,
          url: '#3',
          text: 'Images & B-roll',
        },
        {
          id: 4,
          url: '#4',
          text: 'Permissions',
        },
        {
          id: 5,
          url: '#5',
          text: 'Speaker requests',
        },
      ],
    },
    {
      id: 4,
      title: 'Policy',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Application security',
        },
        {
          id: 2,
          url: '#2',
          text: 'Software principles',
        },
        {
          id: 3,
          url: '#3',
          text: 'Unwanted software policy',
        },
        {
          id: 4,
          url: '#4',
          text: 'Responsible supply chain',
        },
      ],
    },
  ],
  social_profile: [
    {
      id: 1,
      icon: 'flaticon-facebook-logo',
      link: '#1',
    },
    {
      id: 2,
      icon: 'flaticon-twitter-logo-silhouette',
      link: '#2',
    },
    {
      id: 3,
      icon: 'flaticon-instagram',
      link: '#3',
    },
    {
      id: 4,
      icon: 'flaticon-tumblr-logo',
      link: '#4',
    },
    {
      id: 5,
      icon: 'flaticon-dribble-logo',
      link: '#5',
    },
  ],
};
export default data;
