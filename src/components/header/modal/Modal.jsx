import React from "react";
import styled from "styled-components";
import { VscChromeClose } from "react-icons/vsc";
const ModalWindow = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000000e7;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 1;
  color: #fff;
  transform: translateY(-0%);
  transition: 1.3s;
  cursor: default;
`;
const CloseBtn = styled(VscChromeClose)`
  font-size: 42px;
  transform: translate(-20px, 20px);
  position: absolute;
  top: 0;
  transition: 1s;
  right: 0;
  cursor: pointer;
  &:hover {
    font-size: 45px;
    transition: 1s;
    color: #00D7BB;
  }
`;
const Texts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;
const Item = styled.li`
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transition: 0.8s;
    color: #00d7bb;
  }
`;
export default function Modal({ close, stylee }) {
  return (
    <ModalWindow style={{ ...stylee }}>
      <CloseBtn onClick={() => close()} />
      <Texts>
        <Item>Home</Item>
        <Item>About</Item>
        <Item>Education</Item>
        <Item>Portfolio</Item>
        <Item>Single</Item>
        <Item>Testimonials</Item>
        <Item>Blog</Item>
        <Item>Contact Me</Item>
      </Texts>
    </ModalWindow>
  );
}
