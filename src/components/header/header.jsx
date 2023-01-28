import React from "react";
import styled from "styled-components";
import useModal from "../../hooks/useModal";
import Modal from "./modal/Modal";
import { Spin as Hamburger } from "hamburger-react";
import { AiFillGithub } from "react-icons/ai";
import { BsTelegram, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Typical from "react-typical";
import Fade from "react-reveal/Fade";
import useTimeout from "../../hooks/useTimeOut";
import { MdArrowBackIos } from "react-icons/md";
import "./header.css";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  color: #fff;
  transition: 1s;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const HeaderBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 20% 0px;

  @media (max-width: 885px) {
    padding: 35% 0px;
  }
  @media (max-width: 430px) {
    padding: 45% 0px;
  }
`;
const Tittle = styled.h1`
  font-family: Satisfy;
  font-size: 70px;
  font-weight: 400;
  margin: 0 0 5px 0;
  text-align: center;
`;
const Text1 = styled.h1`
  display: flex;
  gap: 20px;
  align-items: center;
  font-family: Open Sans;
  font-size: 24px;
  font-weight: 500;
  margin: 0 0 50px 0;
  text-align: center;
`;
const styyle = {
  transform: "translateY(-200%)",
  transition: "1.5s",
};
const icons = {
  color: "#ffff",
  fontSize: "22px",
};

const ArrowBottom = styled(MdArrowBackIos)`
  font-size: 32px;
  transform: rotate(-90deg) !important;
  animation-name: identifier !important;
  animation-duration: 3s;
  animation-iteration-count: infinite !important;
  transform: 1s;

  @keyframes identifier {
    0% {
      margin-top: -10px;
      transform: 1s;
    }
    25% {
      margin-top: 0px;
      transform: 1s;
    }
    50% {
      margin-top: -10px;
      transform: 1s;
    }
    75% {
      margin-top: 0px;
      transform: 1s;
    }
    100% {
      margin-top: -10px;
      transform: 1s;
    }
  }
`;
const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default function Header() {
  const { closeModal, isOpen, openModal } = useModal();
  const { isOpen: secondOpen, openModal: secondModal } = useModal();
  const {
    isOpen: stkyNav,
    openModal: stikyModal,
    closeModal: stikyClose,
  } = useModal();
  useTimeout(() => secondModal(), 2000);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      stikyModal();
    } else {
      stikyClose();
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  return (
    <div className="container">
      <Nav className={`${stkyNav && "navsticky"}`}>
        <div className="container">
          <NavBox id="home">
            <Icons>
              <a href="https://github.com/DiyorbekkAbdullayev" target="_blank">
                <AiFillGithub style={icons} />
              </a>
              <a href="https://t.me/Storm_02031" target="_blank">
                <BsTelegram style={icons} />
              </a>
              <a
                href="https://www.instagram.com/diyorbek.webs/"
                target={"_blank"}
              >
                <BsInstagram style={icons} />
              </a>
              <a href="https://twitter.com/storm02031" target={"_blank"}>
                <BsTwitter style={icons} />
              </a>
              <a
                href="https://www.facebook.com/Diyorbek.Webs/"
                target={"_blank"}
              >
                <FaFacebookF style={icons} />
              </a>
              <a
                href="https://www.linkedin.com/in/honor-9-454914257/"
                target={"_blank"}
              >
                <FaLinkedinIn style={icons} />
              </a>
            </Icons>

            <Hamburger
              toggle={openModal}
              toggled={isOpen}
              onClick={() => openModal()}
              duration={1.6}
            />
            {isOpen ? <Modal close={closeModal} /> : <Modal stylee={styyle} />}
          </NavBox>
        </div>
      </Nav>

      <Fade bottom>
        <HeaderBottom>
          {secondOpen ? (
            <Tittle>
              <Typical
                steps={["Diyorbek Abdullayev", 1000]}
                loop={1}
                wrapper="p"
              />
            </Tittle>
          ) : null}
          <Text1>I'M A WEB DEVELOPER IN UZBEKISTAN </Text1>
          {secondOpen ? (
            <Fade top>
              <ArrowBottom />
            </Fade>
          ) : null}
        </HeaderBottom>
      </Fade>
    </div>
  );
}
