import styled from '@emotion/styled';

export const MainBox = styled.div`
  margin-left: 30px;
  p,
  span {
    color: #565656;
    display: inline-block;
    margin-left: 5px;
  }
  ul {
    margin-top: 10px;
  }
  li {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    padding-left: 10px;
  }

  a {
    display: inline-block;
    text-decoration: none;
    transition: 300ms;
    color: #777;
    &:hover,
    :focus {
      color: orange;
      text-decoration: underline;
      transform: scaleX(1.05);
    }
  }

  h1,
  h2 {
    margin-top: 40px;
  }

  p {
    margin-top: 15px;
  }
`;
