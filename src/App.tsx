import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyles";

import bgMob from "./assets/bg-intro-mobile.png";

import TextInfo from "./Components/TextIntro";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <TextInfo />
      <SignUp />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ff7979;
  background-image: url(${bgMob});
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  justify-content: center;
  padding: 88px 0;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: unset;
    justify-content: space-around;
  }
`;
