import React from "react";
import styled from "styled-components";
import { profile } from "../../../assets/img/img";
import { Tittle } from "../About/About";
import Card from "./Card";

const Work = styled.div`
  background-color: #22252c;
`;
const Box1 = styled.div`
  /* margin-bottom: 80px; */
`;
const Text = styled.div`
  background-color: #22252c;
  display: flex;
  align-items: center;
  padding: 114px 0px 80px 0px;

  @media (max-width:430px){
    padding: 50px 0px 50px 0px;
  }
`;
const Tittle1 = styled(Tittle)`
  text-align: center;
  text-transform: uppercase;
`;
const Portfolios = styled.div`
  display: flex;
  align-items: center;
  padding: 100px 0px 75px 0px;
  background-color: #00ffc5b2;
`;
const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  row-gap: 30px;
  column-gap: 30px;

  @media (max-width: 885px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 430px) {
    grid-template-columns: auto;
  }
`;
const Btn = styled.button`
  padding: 17px 46px;
  border: none;
  background-color: #22252c;
  text-transform: uppercase;
  color: #02cfb4;
  font-weight: 600;
  font-size: 14px;
  transition: 0.8s;

  &:hover {
    color: #22252c;
    border: 2px solid #22252c;
    background-color: transparent;
  }
`;
export default function Works() {
  return (
    <Work>
      <Text>
        <div className="container">
          <Box1>
            <Tittle1>Some Of My Works</Tittle1>
          </Box1>
        </div>
      </Text>
      <Portfolios>
        <div className="container">
          <Box2>
            <Cards>
              <Card img={profile} link={'https://ucell.uz/uz/subscribers'}/>
              <Card img={profile} link={'https://ucell.uz/uz/subscribers'}/>
              <Card img={profile} link={'https://ucell.uz/uz/subscribers'}/>
              <Card img={profile} link={'https://ucell.uz/uz/subscribers'}/>
              <Card img={profile} link={'https://ucell.uz/uz/subscribers'}/>
              <Card img={profile} link={'https://ucell.uz/uz/subscribers'}/>
              <Card img={profile} link={'https://ucell.uz/uz/subscribers'}/>
              <Card img={profile} link={'https://ucell.uz/uz/subscribers'}/>
              <Card img={profile} link={'https://ucell.uz/uz/subscribers'}/>

            </Cards>
            <Btn>Load More</Btn>
          </Box2>
        </div>
      </Portfolios>
    </Work>
  );
}
