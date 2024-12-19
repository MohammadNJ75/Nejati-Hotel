import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 2;
  top: 50%;
  left: 50%;
`;

const Background = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-image: url("../../public/cover.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(8px);
`;
function Login() {
  return (
    <>
      <Background />
      <LoginLayout>
        <Logo />
        <Heading as="h4" style={{ color: "black" }}>
          Log in to your account
        </Heading>
        <LoginForm />
      </LoginLayout>
    </>
  );
}

export default Login;
