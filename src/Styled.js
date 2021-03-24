import styled from "styled-components";

export const GeneralContainer = styled.div`
  width: 100%;
  max-width: 900px;
  color: #fff;
  margin: 0 auto;
`;

export const Title = styled.div`
  text-align: center;

  @media (min-width: 360px) {
    margin-top: 35px;
  }
  @media (min-width: 768px) {
    margin-top: 50px;
  }
`;

export const LogoContainer = styled.div`
  margin-top: 5%;
  text-align: center;
  @media (min-width: 360px) {
    margin-bottom: 30px;
  }

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const LogoContainerImg = styled.img`
  max-width: 560px;
  @media (min-width: 360px) {
    width: 56%;
  }

  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const Text = styled.p`
  text-align: center;
  max-width: 90%;
  margin: 0 auto;
  font-size: 14px;

  @media (min-width: 360px) {
    width: 90%;
  }

  @media (min-width: 768px) {
    width: 60%;
    font-size: 16px;
  } ;
`;
