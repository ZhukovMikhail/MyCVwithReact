import styled from '@emotion/styled';

export const MainBox = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  h1 {
    font-size: 60px;
  }

  a {
    display: inline-block;
    text-decoration: none;
    transition: 300ms;
    color: rgb(20, 32, 77);

    font-weight: 700;
    font-size: 20px;

    &:hover,
    :focus {
      color: orange;
      text-decoration: underline;
      transform: scaleX(1.05);
    }
  }

  h1,
  h2 {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  h3,
  h4 {
    margin-top: 10px;
  }

  p {
    margin-top: 15px;
  }
`;
export const Projects = styled.ul`
  padding-left: 20px;
  li {
    margin-top: 5px;

    list-style: square;
  }
`;

export const Responibility = styled.div`
  margin-top: 10px;
  margin-left: 30px;
  /* padding-left: 20px; */
`;