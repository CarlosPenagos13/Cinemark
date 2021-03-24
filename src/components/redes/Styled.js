import styled from "styled-components";

export const Redesimg = styled.img`
  height: 30px;
  width: auto;
  margin-bottom: 2px;
`;

export const RedesContainer = styled.div`
  width: 45%;
  margin: 0 auto;
  margin-left: 15px;
  @media (min-width: 360px) {
    margin-left: 20px;
  }
  @media (min-width: 768px) {
    margin-left: 35px;
    width: 50%;
  }
`;

export const SocialLink = styled.div`
  display: flex;
  margin: 50px auto;
  justify-content: space-around;
  width: 100%;
  @media (min-width: 768px) {
    width: 55%;
  } ;
`;
