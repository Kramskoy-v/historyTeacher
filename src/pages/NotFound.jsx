import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import ButtonLink from '../ui/ButtonLink';

const glitch = keyframes`
  2%, 64% {
    transform: translate(2px, 0) skew(0deg);
  }
  4%, 60% {
    transform: translate(-2px, 0) skew(0deg);
  }
  62% {
    transform: translate(0, 0) skew(5deg);
  }`;

const glitchTop = keyframes`
		2%, 64% {
			transform: translate(2px, -2px);
		}
		4%,	60% {
			transform: translate(-2px, 2px);
		}
		62% {
			transform: translate(13px, -1px) skew(-13deg);
		}`;

const glitchBotom = keyframes`
  2%, 64% {
    transform: translate(-3px, 0);
  }
  4%, 60% {
    transform: translate(-3px, 0);
  }
  62% {
    transform: translate(-25px, 5px) skew(21deg);
  }`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100dvw;
  height: 100dvh;
  align-items: center;
  justify-content: center;
  margin: 0;
  font-family: 'Share Tech Mono', monospace;
  background: var(--color-dark);

  p {
    font-size: 6rem;
    margin-bottom: 3rem;
  }
`;

const Title = styled.h1`
  animation: ${glitch} 1s linear infinite;
  font-size: 30rem;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -7px;
  &:before,
  &:after {
    content: '404';
    position: absolute;
    left: 0;
  }
  &:before {
    animation: ${glitchTop} 1s linear infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  }
  &:after {
    animation: ${glitchBotom} 1.5s linear infinite;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  }
`;

function NotFound() {
  return (
    <Wrapper>
      <Title>404</Title>
      <p>Страница не найдена</p>
      <ButtonLink to="/home">На главную</ButtonLink>
    </Wrapper>
  );
}

export default NotFound;
