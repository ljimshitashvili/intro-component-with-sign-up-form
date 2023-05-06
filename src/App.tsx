import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <Container>
      <GlobalStyle />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: black;
`;
