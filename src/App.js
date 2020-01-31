import React, { useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, #0f2027, #203a43, #2c5364);
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles};
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  background-color: #eee;
  min-height: 100px;
  resize: none;
  ${sharedStyles};
`;

const StyledButton = styled.button`
  display: block;
  background-color: #274b59;
  color: #fff;
  border: 0;
  border-radius: 5px;
  font-size: 0.9rem;
  height: 40px;
  padding: 0 20px;
  box-sizing: border-box;
  cursor: pointer;
`;

const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;

  legend {
    padding: 10px 0;
  }

  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm>
          <h2>Example Contact Form</h2>
          <label htmlFor="name">Name</label>
          <StyledInput type="text" name="name" />
          <label htmlFor="email">Email</label>
          <StyledInput type="email" name="email" />
          <StyledFieldset>
            <legend>Gender</legend>
            <label>
              <input type="radio" name="female" />
              Female
            </label>
            <label>
              <input type="radio" name="male" />
              Male
            </label>
          </StyledFieldset>
          <label htmlFor="message">Message</label>
          <StyledTextArea name="message" />
          <StyledError>
            <p>Error Message Here!</p>
          </StyledError>
          <StyledButton type="submit">Send Message</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
}

export default App;
