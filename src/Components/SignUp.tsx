import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import scheme from "./Scheme";
import FormData from "./Types";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(scheme),
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <Container>
      <Input onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input
            {...register("firstName")}
            type="text"
            placeholder="First Name"
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </label>
        <label>
          <input
            {...register("lastName")}
            type="text"
            placeholder="Last Name"
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </label>
        <label>
          <input {...register("email")} type="text" placeholder="Email" />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <label>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </label>
        <button type="submit">claim your free trial</button>
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
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  border-radius: 10px;

  label {
    width: 100%;
    position: relative;

    input {
      width: 100%;
      height: 56px;
      border: 1px solid #dedede;
      border-radius: 5px;
      padding: 0 19.4px;
      font-weight: 500;
      font-size: 14px;
      line-height: 26px;
      letter-spacing: 0.25px;
      color: #3d3b48;
      mix-blend-mode: normal;

      :focus {
        outline: 1px solid #5e54a4;
      }
      ::placeholder {
        font-family: "Poppins";
        font-weight: 500;
        font-size: 14px;
        line-height: 26px;
        letter-spacing: 0.25px;
        color: #3d3b48;
        mix-blend-mode: normal;
        opacity: 0.75;
      }
    }
    p {
      font-size: 14px;
      line-height: 26px;
      text-align: right;
      color: #ff7979;
      font-style: italic;
      position: absolute;
      bottom: -20px;
      text-align: end;
      width: 100%;
    }
  }
  button {
    background: #38cc8b;
    box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);
    border-radius: 5px;
    border: none;
    height: 56px;
    font-family: "Poppins";
    font-weight: 500;
    font-size: 15px;
    line-height: 26px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1px;

    color: #ffffff;
  }

  @media (min-width: 1024px) {
    gap: 20px;
    padding: 40px;
  }
`;
