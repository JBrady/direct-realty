import styled from 'styled-components';

const TeamSectionWrapper = styled.section`
  padding: 80px 0;
  overflow: hidden;
  @media (max-width: 990px) {
    padding: 60px 0;
  }

  .team__member {
    border: #e2e2e2 1px solid;
    display: flex;
    flex-direction: column;

    .content__wrapper {
      border-top: #e2e2e2 1px solid;
      padding-top: 10px;
      padding-bottom: 20px;
      background-color: #f0f1f3;
      display: flex;
      flex-direction: column;
      flex: 1;
      h2,
      p {
        margin-left: 15px;
        margin-right: 15px;
      }
    }

    .icon__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .socialLinks {
      margin-top: auto;
      padding-top: 12px;
    }
  }

  .member__photo {
    margin-top: 20px;
  }
`;

const SocialLinks = styled.div`
  > button {
    margin: 3px;
    cursor: pointer;
    width: 30px;
    height: 24px;
    line-height: 20px;
    background-color: transparent;
    border-radius: 3px;
    border: 1px solid rgba(15, 33, 55, 0.26);
    color: #0f2137;
    transition: all 0.2s ease;
    &:hover,
    &:focus {
      outline: none;
      &.flaticon-facebook-logo {
        color: #ffffff;
        border-color: #3c5a99;
        background-color: #3c5a99;
      }
      &.flaticon-twitter-logo-silhouette {
        color: #ffffff;
        border-color: #1da1f2;
        background-color: #1da1f2;
      }
      &.flaticon-instagram {
        color: #ffffff;
        border-color: #fb3958;
        background-color: #fb3958;
      }
      &.flaticon-dribble-logo {
        color: #ffffff;
        border-color: #ea4c89;
        background-color: #ea4c89;
      }
    }
  }
`;

export { SocialLinks };
export default TeamSectionWrapper;
