import React from "react";
import styled from "styled-components";
import { FaPaperPlane } from "react-icons/fa";
import Fade from "react-reveal/Fade";
const Hireme = styled.div`
  padding: 56px 0px;
  background-color: #02cfb4;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
const Texts = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  @media (max-width: 885px) {
    margin-left: -20px;
  }
  @media (max-width: 430px) {
    gap: 0px;
  }
`;
const Tittle = styled.h2`
  font-size: 37px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-align: center;
  @media (max-width: 886px) {
    font-size: 25px;
  }
  @media (max-width: 430px) {
    font-size: 22px;
    width: 272px;
  }
`;
const Paragrf = styled.p`
  font-family: Open Sans;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.4000000059604645px;
  text-align: center;
  width: 513px;

  @media (max-width: 430px) {
    width: 350px;
  }
`;
const Btn = styled.button`
  padding: 14px 50px;
  background-color: #22252c;
  color: #02cfb4;
  text-transform: uppercase;
  font-family: Open Sans;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.4000000059604645px;
  text-align: center;
  transition: 0.7s;

  &:hover {
    transition: 0.7s;
    border: 1px solid #22252c;
    color: #22252c;
    background-color: transparent;
  }
`;

const Icon = styled(FaPaperPlane)`
  font-size: 70px;
  opacity: 0.75;
  @media (max-width: 885px) {
    font-size: 50px;
  }
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 430px) {
    gap: 10px;
  }
`;
const HireMe = () => {
  return (
    <Hireme>
      <div className="container">
        <Box>
          <Top>
            <Fade bottom>
              <Texts>
                <Icon />
                <Tittle>HIRE ME FOR YOUR AWESOME PROJECT</Tittle>
              </Texts>
            </Fade>
            <Fade bottom>
              <Paragrf>
                I am available for Freelance projects that depends on your
                project value. Hire me and get your project done!
              </Paragrf>
            </Fade>
          </Top>
          <Btn>Hire Me</Btn>
        </Box>
      </div>
    </Hireme>
  );
};

export default HireMe;
