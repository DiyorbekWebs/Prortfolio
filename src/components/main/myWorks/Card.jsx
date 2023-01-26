import React from "react";
import styled from "styled-components";
import { BsLink45Deg } from "react-icons/bs";
import { RxZoomIn } from "react-icons/rx";
import useModal from "../../../hooks/useModal";
import Modal from "./Modal";
const Cart = styled.div`
  height: 294px;
  width: 294px;
  border: none;
  overflow: hidden;
  position: relative;
  transition: 1s;

  &:hover {
    transition: 1s;
    margin-top: -15px;
  }
  &:hover > .hover {
    transform: translateY(0%);
    transition: 1s;
  }
  @media (max-width: 885px) {
    width: 345px;
    height: 345px;
  }
  @media (max-width: 430px) {
    width: 100%;
    height: 350px;
  }
  /* @media (max-width: 415px) {
    width: 384px;
    height: 384px;
  }

  @media (max-width: 395px) {
    width: 360px;
    height: 360px;
  }
  @media (max-width: 376px) {
    width: 345px;
    height: 345px;
  }
  @media (max-width: 360px) {
    width: 330px;
    height: 330px;
  }
  @media (max-width: 321px) {
    width: 290px;
    height: 290px;
  } */
`;
const Hover = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #22252cb5;
  transform: translateY(200%);
  transition: 1s;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
`;

const IconStyle = styled.div`
  color: #00ffc5b2;
  padding: 12px 12px;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 3px solid #00ffc5b2;
  transition: 0.5s;

  &:hover {
    transition: 0.8s;
    background-color: #00ffc5b2;
    color: #fff;
  }
`;
const styyle = {
  transform: "translateY(-200%)",
  transition: "1.5s",
};
export default function Card({ img, link }) {
  const { closeModal, isOpen, openModal } = useModal()
  return (
    <>
      <Cart>
        <img src={img} alt="Portfolio Img" />
        <Hover className="hover">
          <a href={link} target='_blank'>
            <IconStyle >
              <BsLink45Deg />
            </IconStyle>
          </a>
          <IconStyle onClick={() => openModal()}>
            <RxZoomIn />
          </IconStyle>

        </Hover>
      </Cart>
      {
        isOpen ? <Modal img={img} close={closeModal} /> : <Modal stylee={styyle} />
      }
    </>
  );
}
