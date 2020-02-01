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

const initialState = {
  name: "",
  email: "",
  gender: "",
  message: ""
};

function App() {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submited");
    console.log("STATE: ", state);

    for (let key in state) {
      if (state[key] === "") {
        setError(`You must provide the ${key}!`);
        return;
      }
    }
    setError("");
    setState({
      name: "",
      email: "",
      gender: "",
      message: ""
    });
    console.log("Successfully Submited!!");
  };

  const handleInput = e => {
    const inputName = e.target.name;
    const value = e.target.value;

    setState(prev => ({ ...prev, [inputName]: value }));
  };

  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <h2>Example Contact Form</h2>
          <label htmlFor="name">Name</label>
          <StyledInput
            type="text"
            name="name"
            value={state.name}
            onChange={handleInput}
          />
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email"
            value={state.email}
            onChange={handleInput}
          />
          <StyledFieldset>
            <legend>Gender</legend>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={state.gender === "female"}
                onChange={handleInput}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={state.gender === "male"}
                onChange={handleInput}
              />
              Male
            </label>
          </StyledFieldset>
          <label htmlFor="message" value={state.message} onChange={handleInput}>
            Message
          </label>
          <StyledTextArea
            name="message"
            value={state.message}
            onChange={handleInput}
          />
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <StyledButton type="submit">Send Message</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
}

export default App;
