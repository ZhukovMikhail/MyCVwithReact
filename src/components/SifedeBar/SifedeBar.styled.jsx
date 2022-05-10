import styled from '@emotion/styled';

import { BsLinkedin, BsGithub } from 'react-icons/bs';

export const SideBox = styled.div`
  width: 240px;
  background-color: #5b608c;
  color: #fff;
`;
export const PhotoBox = styled.div`
  margin-top: 20px;
  width: 200px;
  display: flex;
`;

export const IMG = styled.img`
  display: block;
  width: 80%;
  margin: 0 auto;
  border-radius: 10px;
`;
export const Contacts = styled.ul`
  margin-top: 20px;
  margin-left: 20px;
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
    color: #ffffffab;
    text-decoration: none;
  }
`;
export const Skills = styled.ul`
  margin-left: 20px;
  margin-top: 20px;
  h4 {
    color: orange;
    margin-top: 20px;
  }

  li {
    list-style: inside;
  }
`;

export const SocialLink = styled.ul`
  display: flex;
  justify-content: center;
  margin-left: -10px;
  margin-top: 10px;

  & li {
    margin-left: 10px;
  }
`;

export const Linkedin = styled(BsLinkedin)`
  width: 25px;
  height: 25px;
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
  width: 25px;
  height: 25px;
  color: black;
  border-radius: 50%;

  transition: 300ms;
  &:hover,
  :focus {
    color: orange;
    /* background-color: #fff; */
    /* transform: scale(1.25); */
  }
`;
