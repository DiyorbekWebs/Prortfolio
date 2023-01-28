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
    color: #00d7bb;
  }
`;

const Img = styled.img`
  width: 294px;
  height: 294px;
  background-size: cover;
  
`;
export default function Modal({ close, stylee, img }) {
  return (
    <ModalWindow style={{ ...stylee }}>
      <CloseBtn onClick={() => close()} />
      <Img src={img} alt="ModalImg" />
    </ModalWindow>
  );
}
