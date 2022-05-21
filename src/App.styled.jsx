import styled from '@emotion/styled';

const n = 5;
export const Container = styled.div`
  display: flex;
  font-size: 18px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;
  width: calc(210px * ${n});
  height: calc(294px * ${n});
  /* width: 1050px;
  height: 1470px; */
  background-color: #fff;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  color: #14204d;
  @media print {
    margin-bottom: 0;
    padding: 10px;
    /* border: 5px solid #5b608c; */
    box-shadow: none;
    background-color: #f0f6fe;
  }
`;
