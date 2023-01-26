import React from "react";
import styled from "styled-components";
import Header from "../components/header/header";
import About from "../components/main/About/About";
import Interest from "../components/main/About/Interest";
import Works from "../components/main/myWorks/Works";
const Headerr = styled.header`
  height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(23, 211, 150, 0.78) 0%,
    rgba(7, 247, 247, 0.78) 100%
  );
  @media (max-width: 885px) {
    height: 100vh;
  }
  @media (max-width: 430px) {
    height: 100vh;
  }
`;
export default function Layout() {
  return (
    <>
      <Headerr>
        <Header />
      </Headerr>
      <main>
        <About />
        <Interest/>
        <Works/>
      </main>
    </>
  );
}
