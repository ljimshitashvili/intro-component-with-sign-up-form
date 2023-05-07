import styled from "styled-components";

export default function TextInfo() {
  return (
    <Container>
      <h1>Learn to code by watching others</h1>
      <h2>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.{" "}
      </h2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  max-width: 327px;
  margin-bottom: 40px;

  h1 {
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    text-align: center;
    letter-spacing: -0.291667px;
    color: #ffffff;
  }

  h2 {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
  }

  @media (min-width: 1024px) {
    gap: 32px;
    max-width: 525px;

    h1 {
      font-size: 50px;
      line-height: 55px;
      text-align: left;
      letter-spacing: -0.520833px;
    }

    h2 {
      text-align: left;
    }
  }
`;
