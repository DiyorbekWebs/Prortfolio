import React from "react";
import styled from "styled-components";
import { blogImg1, blogImg2, blogImg3 } from "../../../assets/img/img";
import { Tittle } from "../About/About";
import Fade from "react-reveal/Fade";
import Card from "./Card";
const Blogg = styled.div`
  padding: 80px 0px;
  background-color: #22252c;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
`;

const Cards = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 886px) {
    flex-wrap: wrap;
    gap: 28px;
  }
  @media (max-width: 820px) {
    flex-wrap: wrap;
    gap: 20px;
  }
  @media (max-width: 430px) {
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }
`;
const Btn = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0.4000000059604645px;
  text-align: center;
  text-transform: uppercase;
  padding: 17px 50px;
  color: #fff;
  background: linear-gradient(90deg, #02cfb4 0%, #02cfa1 100%);
`;
export default function Blog() {
  return (
    <Blogg>
      <div className="container">
        <Box>
          <Fade bottom>
            <Tittle>Blog Posts</Tittle>
          </Fade>
          <Cards>
            <Fade left>
              <Card img={blogImg1} />
            </Fade>
            <Fade bottom>
              <Card img={blogImg2} />
            </Fade>
            <Fade right>
              <Card img={blogImg3} />
            </Fade>
          </Cards>
          <Fade top>
            <Btn>Load More</Btn>
          </Fade>
        </Box>
      </div>
    </Blogg>
  );
}
