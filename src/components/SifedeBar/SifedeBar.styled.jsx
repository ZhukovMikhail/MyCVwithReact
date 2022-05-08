import styled from '@emotion/styled';

export const SideBox = styled.div`
  width: 500px;
  background-color: #5b608c;
  color: wheat;
`;
export const PhotoBox = styled.div`
  margin-top: 20px;
  width: 300px;
  display: flex;
`;

export const IMG = styled.img`
  display: block;
  width: 250px;
  margin: 0 auto;
  border-radius: 10px;
`;
export const Contacts = styled.ul`
  text-decoration: none;
  & li {
    list-style: none;
  }
  & a {
    color: #ffffffab;
    text-decoration: none;
  }
`;
