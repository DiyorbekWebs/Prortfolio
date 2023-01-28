import React from "react";
import styled from "styled-components";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import About from "../components/main/About/About";
import Interest from "../components/main/About/Interest";
import Blog from "../components/main/Blog/Blog";
import Contact from "../components/main/ContactMe/Contact";
import HireMe from "../components/main/hire_me/HireMe";
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
        <About id="about"/>
        <Interest />
        <Works id="portfolio"/>
        <Blog id="blog"/>
        <HireMe/>
        <Contact id="contact"/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}
