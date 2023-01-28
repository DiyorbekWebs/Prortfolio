import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsTelegram, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import styled from "styled-components";
const Footter = styled.footer`
  padding: 30px 0px 30px 0px;
  background-color: #22252c;
  cursor: pointer;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-bottom: 65px;
  border-bottom: 1px solid #313741;
  @media (max-width: 1281px) {
    padding-bottom: 50px;
  }
  @media (max-width: 885px) {
    padding-bottom: 40px;
  }
  @media (max-width: 430px) {
    padding-bottom: 30px;
    gap: 15px;
  }
  @media (max-width: 376px) {
    padding-bottom: 30px;
    gap: 10px;
  }
`;
const Icon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #313741;
  font-size: 24px;
  color: #02cfb4;
  border-radius: 100%;
  transition: 0.7s;

  &:hover {
    transition: 0.7s;
    background-color: #02cfb4;
    color: #313741;
  }
`;
const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.4000000059604645px;
  text-align: center;
  color: #02cfb4;
  text-transform: uppercase;
`;
export default function Footer() {
  return (
    <>
      <Footter>
        <div className="container">
          <Content>
            <Icons>
              <a href="https://github.com/DiyorbekkAbdullayev" target="_blank">
                <Icon>
                  <AiFillGithub />
                </Icon>
              </a>
              <a href="https://t.me/Storm_02031" target="_blank">
                <Icon>
                  <BsTelegram />
                </Icon>
              </a>
              <a
                href="https://www.instagram.com/diyorbek.webs/"
                target={"_blank"}
              >
                <Icon>
                  <BsInstagram />
                </Icon>
              </a>
              <a href="https://twitter.com/storm02031" target={"_blank"}>
                <Icon>
                  <BsTwitter />
                </Icon>
              </a>
              <a
                href="https://www.facebook.com/Diyorbek.Webs/"
                target={"_blank"}
              >
                <Icon>
                  <FaFacebookF />
                </Icon>
              </a>
              <a
                href="https://www.linkedin.com/in/honor-9-454914257/"
                target={"_blank"}
              >
                <Icon>
                  <FaLinkedinIn />
                </Icon>
              </a>
            </Icons>
            <Text>Diyorbek Abdullayev Portfolio</Text>
          </Content>
        </div>
      </Footter>
    </>
  );
}
