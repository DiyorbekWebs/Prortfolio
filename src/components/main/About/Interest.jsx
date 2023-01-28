import React from "react";
import styled from "styled-components";
import { FaPencilAlt, FaCoffee } from "react-icons/fa";
import { ImCalculator } from "react-icons/im";
import { MdPublic } from "react-icons/md";

import {
  IoAirplaneSharp,
  IoMusicalNotesSharp,
} from "react-icons/io5";
const Interestt = styled.div`
  padding: 20px 283px 120px 283px;
  background-color: #22252c;

  @media (max-width: 1281px) {
    padding: 20px 165px 120px 165px;
  }
  @media (max-width: 885px) {
    padding: 20px 0px 120px 0px;
  }
`;
const Box = styled.div`
  display: flex;
  gap: 48px;
  flex-direction: column;
`;
const Tittle = styled.h1`
  font-weight: 700;
  font-size: 35px;
  line-height: 47px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  background: linear-gradient(270deg, #00f298 0%, #07f7f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
const List = styled.ul`
  display: flex;
  gap: 72px;
  @media (max-width: 885px) {
    padding: 0px 50px;
    gap: 150px;
    row-gap: 80px;
    flex-wrap: wrap;
  }
  @media (max-width: 821px) {
    padding: 0px 30px;
    gap: 100px;
    row-gap: 80px;
    flex-wrap: wrap;
  }
  @media (max-width: 430px) {
    padding: 0px 5%;
    gap: 100px;
    row-gap: 50px;
    flex-wrap: wrap;
  }
  @media (max-width: 395px) {
    padding: 0px 5%;
    gap: 80px;
    row-gap: 50px;
    flex-wrap: wrap;
  }
  @media (max-width: 376px) {
    padding: 0px 4%;
    gap: 60px;
    row-gap: 40px;
  }
`;
const HoverText = styled.p`
  font-family: Open Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.4000000059604645px;
  text-align: center;
  position: absolute;
  top: 150px;
  left: 25%;
  transition: 1s;
  color: #fff;
  z-index: -2;
  text-align: center;
`;
const Item = styled.li`
  padding: 18px 27px;
  border: 2px solid #00d7bb;
  color: #00d7bb;
  border-radius: 100%;
  transition: 0.3s;
  font-size: 50px;
  position: relative;
  text-align: center;
  margin: 0 auto;

  &:hover {
    transition: 0.5s;
    background-color: #00d7bb;
    color: #fff;
  }
  &:hover > .wer {
    transition: 1s;
    top: 115px;
    z-index: 0;
  }
`;
const HoverText1 = styled(HoverText)`
  left: 12%;
`;
const PlaneIcon = styled(IoAirplaneSharp)`
  transform: rotate(-45deg);
`;

export default function Interest() {
  return (
    <Interestt>
      <div className="container">
          <Box>
            <Tittle>My interests</Tittle>
            <List className="red">
                <Item className="item">
                  <FaPencilAlt />
                  <HoverText1 className="wer">Drawing</HoverText1>
                </Item>
                <Item className="item">
                  <PlaneIcon />
                  <HoverText className="wer">Travel</HoverText>
                </Item>

                <Item className="item">
                  <IoMusicalNotesSharp />
                  <HoverText className="wer">Music</HoverText>
                </Item>
                <Item className="item">
                  <FaCoffee />
                  <HoverText className="wer">Coffe</HoverText>
                </Item>
                <Item className="item">
                  <ImCalculator />
                  <HoverText className="wer">Math</HoverText>
                </Item>
                <Item className="item">
                  <MdPublic />
                  <HoverText1 className="wer">Language</HoverText1>
                </Item>
            </List>
          </Box>
      </div>
    </Interestt>
  );
}
