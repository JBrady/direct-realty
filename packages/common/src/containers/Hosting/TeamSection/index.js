import React, { Fragment } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import FeatureBlock from '../../../components/FeatureBlock';
import data from '../../../data/Hosting';
import Container from '../../../components/UI/Container';
import TeamSectionWrapper, { SocialLinks } from './teamSection.style';
import { List } from '../Banner/banner.style';

const TeamSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  memberName,
  designation,
  bio,
  bio2,
  bio3,
  specialties,
  ca_dre_number,
  contentStyle,
}) => {
  return (
    <TeamSectionWrapper id="teamSection">
      <Container>
        <Box>
          <Text content="Our team focuses on taking the pressure off of you so you can make the best decisions for you and your family." />
          <Text content="We are there for you 24/7 – Call or email us anytime!" />
        </Box>

        <Box {...sectionHeader}>
          <Text content="ABOUT US" {...sectionSubTitle} />
          <Heading content="Meet the Team" {...sectionTitle} />
        </Box>

        <Box className="row" {...row}>
          {data.teamMember.map((member, index) => (
            <Box className="agent_card col" {...col} key={`team_key-${index}`}>
              <FeatureBlock
                id={`member-${member.id}`}
                className="team__member"
                icon={
                  <Image
                    src={member.thumbnail_url}
                    alt={`Team member photo ${member.id}`}
                    className="member__photo"
                  />
                }
                contentStyle={contentStyle}
                title={<Heading content={member.name} {...memberName} />}
                description={
                  <Fragment>
                    <Text content={member.designation} {...designation} />
                    <Text content={member.ca_dre_number} {...ca_dre_number} />
                    <Text content={member.specialties} {...specialties} />
                    <Text content={member.bio} {...bio} />
                    <Text content={member.bio2} {...bio2} />
                    <Text content={member.bio3} {...bio3} />
                    <SocialLinks className="socialLinks">
                      {member.social_profile.map((profile, index) => (
                        <span key={`profile_key_${index}`}>
                          <a href={profile.link} target="_blank">
                            <i className={profile.icon} />
                          </a>
                        </span>
                      ))}
                    </SocialLinks>
                  </Fragment>
                }
              />
            </Box>
          ))}
        </Box>
      </Container>
    </TeamSectionWrapper>
  );
};

// TeamSection style props
TeamSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  memberName: PropTypes.object,
  designation: PropTypes.object,
  specialties: PropTypes.object,
  ca_dre_number: PropTypes.object,
  bio: PropTypes.object,
  bio2: PropTypes.object,
  bio3: PropTypes.object,
};

// TeamSection default style
TeamSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px'],
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#10ac84',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Team member col default style
  col: {
    flexBox: true,
    flexWrap: 'wrap',
    width: [1, 1 / 2, 1 / 3, 1 / 3],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
  // Team member content default style
  contentStyle: {
    textAlign: 'center',
    mt: '0',
  },
  // Team member memberName default style
  memberName: {
    fontSize: ['18px', '18px', '16px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: '8px',
    letterSpacing: '-0.020em',
  },
  // Team member designation default style
  designation: {
    fontSize: ['15px', '16px', '14px', '17px'],
    lineHeight: '1',
    color: '#656565',
    mb: 0,
  },
  // Team member specialties default style
  specialties: {
    fontSize: ['11px', '12px', '11px', '13px'],
    color: '#656565',
    textAlign: 'left',
    mt: '25px',
    mb: 0,
  },
  // Team member ca_dre_number default style
  ca_dre_number: {
    fontSize: ['11px', '12px', '11px', '13px'],
    color: '#656565',
    textAlign: 'left',
    mt: '25px',
    mb: 0,
  },
  // Team member bio default style
  bio: {
    fontSize: ['12px', '13px', '11px', '14px'],
    color: '#656565',
    mb: 0,
    textAlign: 'left',
    mt: '25px',
  },
  // Team member bio default style
  bio2: {
    fontSize: ['12px', '13px', '11px', '14px'],
    color: '#656565',
    mb: 0,
    textAlign: 'left',
    mt: '25px',
  },
  // Team member bio default style
  bio3: {
    fontSize: ['12px', '13px', '11px', '14px'],
    color: '#656565',
    mb: 0,
    textAlign: 'left',
    mt: '25px',
  },
};

export default TeamSection;
