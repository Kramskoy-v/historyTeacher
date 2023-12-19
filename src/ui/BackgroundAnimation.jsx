import styled, { keyframes } from 'styled-components';

const anim = keyframes`
0% {
    opacity: 0;
    -webkit-transform: scale(1) translate(0, 0);
            transform: scale(1) translate(0, 0);
    -webkit-transform-origin: 84% 50%;
            transform-origin: 84% 50%;
  }
  8% {
    opacity: 1;
  }
  16% {
    opacity: 1;
  }
  33% {
    opacity: 1;
  }
  51% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.25) translateX(20px);
            transform: scale(1.25) translateX(20px);
    -webkit-transform-origin: right;
            transform-origin: right;
  }`;

const StyledBackgroundAnimation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100dvh;
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    animation-name: ${anim};
    animation-delay: 0;
    animation-duration: 15s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    &:nth-child(1) {
      background-image: url('bg_full_1.jpg');
    }
    &:nth-child(2) {
      background-image: url('bg_full_2.jpg');
      animation-delay: 5s;
    }
    &:nth-child(3) {
      background-image: url('bg_full_3.jpg');
      animation-delay: 10s;
    }
  }
`;
function BackgroundAnimation() {
  return (
    <StyledBackgroundAnimation>
      <div></div>
      <div></div>
      <div></div>
    </StyledBackgroundAnimation>
  );
}

export default BackgroundAnimation;
