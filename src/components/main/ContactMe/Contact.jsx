import React from "react";
import styled from "styled-components";
import { Tittle } from "../About/About";
import "./contact.css";
const ContactUS = styled.div`
  padding: 90px 0px;
  background-color: #22252c;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  
`;
const Input1 = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width:430px){
    flex-direction: column;
  }
`;
const Btn = styled.button`
  padding: 18px 50px;
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  color: #02cfb4;
  border: 1px solid #02cfb4;
  text-transform: uppercase;
  background-color: transparent;
`;
const Contact = () => {
  return (
    <ContactUS id="contact">
      <div className="container">
        <Box>
          <Tittle>Contact Me</Tittle>
          <Form>
            <Input1>
              <div class="inputBox">
                <input type="text" required />
                <span>Name *</span>
                <i></i>
              </div>
              <div class="inputBox">
                <input type="text" required />
                <span>Email *</span>
                <i></i>
              </div>
            </Input1>
            <div class="inputBox input2">
              <input type="text" required />
              <span>Message *</span>
              <i></i>
            </div>
            <Btn>Send Message</Btn>
          </Form>
        </Box>
      </div>
    </ContactUS>
  );
};

export default Contact;
