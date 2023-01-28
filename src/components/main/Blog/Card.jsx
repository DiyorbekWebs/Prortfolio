import React from "react";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";
const Box1 = styled.div`
  background-color: #313741;
`;
const Box2 = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  @media (max-width: 821px) {
    padding: 18px;
  }
  @media (max-width: 430px) {
    padding: 24px;
  }
  @media (max-width:376px) {
    padding: 20px;
  }
  @media (max-width:361px) {
    padding: 18px;
  }
`;
const Tittle = styled.h1`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.4px;
  color: #02cfb4;
  width: 296px;
`;
const Img = styled.img`
  height: 245px;
  width: 360px;
  @media (max-width: 821px) {
    height: 225px;
    width: 346px;
  }
  @media (max-width: 770px) {
    height: 225px;
    width: 330px;
  }
  @media (max-width: 430px) {
    height: 245px;
    width: 360px;
  }
  @media (max-width: 376px) {
    height: 220px;
    width: 330px;
  }
`;
const DayText = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0.4px;
  text-align: left;
  transition: 0.6s;
  color: #ffff;

  &:hover {
    transition: 0.6s;
    color: #02cfb4;
  }
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Btn = styled.button`
  border: none;
  padding: 13px 12px 13px 20px;
  font-size: 12px;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  background: linear-gradient(90deg, #02cfb4 0%, #02cfa1 100%);
  text-transform: uppercase;
  color: #fff;
  display: flex;
  align-items: center;
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    color: #000;
  }
`;
const Paragrf = styled.p`
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  opacity: 0.75;
  width: 313px;
  color: #fff;
  opacity: 0.75;

  @media (max-width: 821px) {
    width: 310px;
  }
  @media (max-width: 770px) {
    width: 290px;
  }
  @media (max-width: 430px) {
    width: 303px;
  }
  @media (max-width: 361px) {
    width: 289px;
  }
  
`;
const IconRight = styled(BiChevronRight)`
  font-size: 18px;
`;
export default function Card({ img }) {
  return (
    <Box1>
      <Img src={img} alt="BlogImg" />
      <Box2>
        <Texts>
          <Tittle>Montu is Going to Breakup with Tuntuni</Tittle>
          <DayText>18, March, 2017 | 33 Comments</DayText>
          <Paragrf>
            There are many variations of passages of the Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected
            humour, or randomised.
          </Paragrf>
        </Texts>
        <Btn>
          read more <IconRight />
        </Btn>
      </Box2>
    </Box1>
  );
}
