import React from "react";
import styled from "styled-components";
import { profile } from "../../../assets/img/img";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Fade } from "react-reveal";
import Resume from '../../../assets/img/resume.pdf'
const AboutPage = styled.div`
  padding: 114px 0px;
  background-color: #22252c;
`;
const Content = styled.div`
  display: flex;
  gap: 170px;
  justify-content: flex-start;

  @media (max-width: 885px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 100px;
  }
`;
const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
const Box2 = styled.div`
  display: flex;
  gap: 14px;
  flex-direction: column;
`;
const UserImg = styled.div`
  position: relative;
  width: 415px;
  height: 435px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 430px) {
    width: 385px;
    height: 405px;
  }
  @media (max-width: 395px) {
    width: 370px;
    height: 390px;
  }
  @media (max-width: 376px) {
    width: 355px;
    height: 375px;
  }
  @media (max-width: 361px) {
    width: 340px;
    height: 360px;
  }
`;
const Border = styled.div`
  width: 365px;
  height: 385px;
  border: 8px solid #00d7bb;
  box-shadow: 0px 0px 3px #00d7bb;
  @media (max-width: 430px) {
    width: 350px;
    height: 370px;
  }
  @media (max-width: 395px) {
    width: 335px;
    height: 355px;
  }
  @media (max-width: 376px) {
    width: 320px;
    height: 340px;
  }
  @media (max-width: 361px) {
    width: 305px;
    height: 325px;
  }
`;
const Img = styled.img`
  position: absolute;
  top: 50px;
  left: 0px;
  @media (max-width: 430px) {
    width: 350px;
    height: 370px;
    top: 35px;
    left: 0px;
  }
  @media (max-width: 395px) {
    width: 335px;
    height: 355px;
  }
  @media (max-width: 376px) {
    width: 320px;
    height: 340px;
  }

  @media (max-width: 361px) {
    width: 305px;
    height: 325px;
  }
`;
const Btn = styled.button`
  padding: 18px 22px;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.4px;
  background: linear-gradient(90deg, #17d396 0%, #07f7f7 100%);
  color: #ffff;
  font-family: Open Sans;
  display: flex;
  align-items: center;
  gap: 5px;
  box-shadow: 0px 0px 10px #00d7bb;
  border: #00d7bb;
`;
const DownloadIcon = styled(FaCloudDownloadAlt)`
  font-size: 18px;
`;
export const Tittle = styled.h1`
  font-family: Open Sans;
  font-size: 45px;
  font-weight: 700;
  line-height: 61px;
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  background: linear-gradient(270deg, #00f298 0%, #07f7f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
const Paragrf = styled.p`
  font-weight: 300;
  font-size: 14.5px;
  line-height: 26px;
  letter-spacing: 0.4px;
  width: 494.72px;
  margin-bottom: 10px;
  color: #ffffff;
  @media (max-width: 885px) {
    width: 650px;
  }
  @media (max-width: 430px) {
    width: 350px;
  }
  @media (max-width: 361px) {
    width: 330px;
  }
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Item = styled.li`
  font-family: Open Sans;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  color: #00d7bb;
  @media (max-width: 430px) {
  }
`;
const Answer = styled.span`
  font-family: Open Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  color: #fff;
`;

export default function About() {
  return (
    <>
      <AboutPage>
        <div className="container">
          <Content>
            <Fade left>
              <Box1>
                <UserImg>
                  <Border />
                  <Img src={profile} alt={"userImg"} />
                </UserImg>
                <a href={Resume} download="Resume">
                  <Btn>
                    <DownloadIcon />
                    Download Resume
                  </Btn>
                </a>
              </Box1>
            </Fade>
            <Fade right>
              <Box2>
                <Fade top>
                  <Tittle>ABOUT ME</Tittle>
                </Fade>
                <Fade bottom>
                  <Paragrf>
                    Hello! I’m Oliver Queen. Web Developer with over 8 years of
                    experience. Experienced with all stages of the development
                    cycle for dynamic web projects. Having an in-depth knowledge
                    including advanced HTML5, CSS3, JavaScript, jQuery, Angular
                    JS. Strong background in management and leadership.
                  </Paragrf>
                </Fade>
                <List>
                  <Fade bottom>
                    <Item>
                      NAME: <Answer>Diyorbek Abdullayev</Answer>
                    </Item>
                  </Fade>
                  <Fade bottom>
                    <Item>
                      DATE OF BIRTH: <Answer>18 May 2008</Answer>
                    </Item>
                  </Fade>
                  <Fade bottom>
                    <Item>
                      NATIONALITY: <Answer>Citizen of Uzbekistan</Answer>
                    </Item>
                  </Fade>
                  <Fade bottom>
                    <Item>
                      ADDRESS:{" "}
                      <Answer>
                        Republic of Uzbekistan, Tashkent city, Uchtepa district
                      </Answer>
                    </Item>
                  </Fade>
                  <Fade bottom>
                    <Item>
                      PHONE: <Answer>+998 (93) 561-42-20</Answer>
                    </Item>
                  </Fade>
                  <Fade bottom>
                    <Item>
                      E-MAIL: <Answer>github1805@gmail.com</Answer>
                    </Item>
                  </Fade>
                </List>
              </Box2>
            </Fade>
          </Content>
        </div>
      </AboutPage>
    </>
  );
}
