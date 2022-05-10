import styled from '@emotion/styled';

const n = 4;
export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 50px;
  width: calc(210px * ${n});
  height: calc(294px * ${n});
  background-color: #fff;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  color: #14204d;
`;
