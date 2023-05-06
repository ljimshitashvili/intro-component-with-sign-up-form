import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyles";

import bgMob from "./assets/bg-intro-mobile.png";

import TextInfo from "./TextIntro";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <TextInfo />
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

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 45px;
  }
`;
