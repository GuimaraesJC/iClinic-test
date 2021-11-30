import styled from "styled-components";

export const Container = styled.main`
height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2c97d1;
`;

export const Title = styled.h1`
  font-weight: normal;
  font-size: 72px;
  line-height: 88px;
  margin-top: 210px;

  span {
    font-family: 'Lato', sans-serif;
    font-weight: bold;
  }
`;

export const Subtitle = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  margin-bottom: 162px;

  span {
    font-weight: bold;
  }
`;
