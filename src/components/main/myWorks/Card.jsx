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
`;
const Hover = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 294px;
  height: 294px;
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
const Img = styled.img`
  background-size: 100%;
  background-position: center;
`;

export default function Card({ img, link }) {
  const { closeModal, isOpen, openModal } = useModal();
  return (
    <>
      <Cart>
        <Img src={img} alt="Portfolio Img" />
        <Hover className="hover">
          <a href={link} target="_blank">
            <IconStyle>
              <BsLink45Deg />
            </IconStyle>
          </a>
          <IconStyle onClick={() => openModal()}>
            <RxZoomIn />
          </IconStyle>
        </Hover>
      </Cart>
      {isOpen ? (
        <Modal img={img} close={closeModal} />
      ) : (
        <Modal stylee={styyle} />
      )}
    </>
  );
}
