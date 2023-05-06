import styled from "styled-components";
import { useForm } from "react-hook-form";

interface FormData {}

export default function SignUp() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <Container>
      <Input>
        <label>
          <input />
        </label>
        <label>
          <input />
        </label>
        <label>
          <input />
        </label>
        <label>
          <input />
        </label>
      </Input>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 327px;

  @media (min-width: 1024px) {
    max-width: 540px;
  }
`;

const Input = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;

  @media (min-width: 1024px) {
    gap: 20px;
    padding: 40px;
  }
`;
