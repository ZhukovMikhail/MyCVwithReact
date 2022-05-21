import styled from '@emotion/styled';

import { BsLinkedin, BsGithub } from 'react-icons/bs';

export const SideBox = styled.div`
  min-width: 350px;
  background-color: #5b608c;
  color: #fff;

  h4 {
    color: orange;
    margin-top: 20px;
    font-size: 30px;
  }
`;

export const InfoBox = styled.div`
  margin-left: 20px;
  ul {
    margin-left: 25px;
  }
  li {
    margin-top: 10px;
  }
`;
export const PhotoBox = styled.div`
  margin-top: 20px;
  width: 80%;
  margin-left: 10%;
`;

export const IMG = styled.img`
  display: block;
  width: 100%;
  border-radius: 10px;
`;
export const Contacts = styled.ul`
  margin-top: 10px;

  text-decoration: none;

  & li {
    list-style: none;
    transition: 300ms;
    &:hover,
    :focus {
      color: orange;
      transform: scale(1.02);
      a {
        color: orange;
      }
    }
  }
  & a {
    display: inline-block;
    margin-left: 10px;
    margin-top: 5px;
    color: #fff;
    text-decoration: none;
  }
`;

export const SocialLink = styled.ul`
  display: flex;
  margin-top: 10px;

  & li {
    list-style: none;
  }
`;

export const Linkedin = styled(BsLinkedin)`
  width: 35px;
  height: 35px;
  transition: 300ms;
  color: #02027a;
  &:hover,
  :focus {
    color: orange;
    /* background-color: #fff; */
    /* transform: scale(1.25); */
  }
`;
export const GitLink = styled(BsGithub)`
  width: 35px;
  height: 35px;
  color: black;
  border-radius: 50%;
  margin-left: 15px;

  transition: 300ms;
  &:hover,
  :focus {
    color: orange;
    /* background-color: #fff; */
    /* transform: scale(1.25); */
  }
`;
export const PrintContacts = styled.ul`
  list-style-type: circle;
`;
