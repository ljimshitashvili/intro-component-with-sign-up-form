import styled from "styled-components";

export default function Try() {
  return (
    <Container>
      <p>
        Try it free 7 days <span>then $20/mo. thereafter</span>
      </p>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 327px;
  background: #5e54a4;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  border-radius: 10px;
  padding: 18px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 700;
    font-size: 15px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 0.267857px;
    color: #ffffff;
    max-width: 195px;

    span {
      font-weight: 500;
    }
  }

  @media (min-width: 1024px) {
    max-width: 540px;
    padding: 17px 0;

    p {
      max-width: unset;
    }
  }
`;
