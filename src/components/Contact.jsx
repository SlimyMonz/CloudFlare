import React from "react";
import { useState } from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
// Components
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import { userInfo } from "../data";

const StyledSection = styled.section`
  min-height: 50vh;

  display: flex;
  justify-content: center;

  h2 {
    margin-top: 25rem;
  }

  form {
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40rem;
  }

  input,
  textarea,
  input[type="submit"] {
    margin-top: 1rem;
  }
`;


export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const mailtoLink = `mailto:${userInfo.email}?subject=${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`;
    window.location.href = mailtoLink;
  }

  return (
    <Element name={"Contact"} id="contact">
      <StyledSection className="d-flex flex-column justify-content-center">
        <Container className="d-flex">
          <Title>
            <h2>Contact Me</h2>
            <div className="underline"></div>
            <StyledSection className="flex-column">
              <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={name} onChange={(event) => setName(event.target.value)} required />
                <input type="email" name="email" placeholder="Your Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                <textarea name="message" rows="5" cols="30" placeholder="Your Message" value={message} onChange={(event) => setMessage(event.target.value)} required />
                <input type="submit" value="Send" />
              </form>
            </StyledSection>
          </Title>
        </Container>
      </StyledSection>
    </Element>
  );
}
// eventually add a resume in here?