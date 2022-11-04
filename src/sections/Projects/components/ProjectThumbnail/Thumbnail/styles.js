import styled, { css, keyframes } from 'styled-components';
import { breakpoints } from '../../../../../styles';

const slideUp = keyframes`
  0% {
    transform: translateY(-300px);
  }
  100% {
    transform: translateY(-20px);
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(150px);
  }
  100% {
    transform: translateY(-80px);
  }
`;

const active_down = css`
  animation: 30s ease-out 0s 1 normal forwards running ${ slideDown };
`;

const active_up = css`
  animation: 30s ease-out 0s 1 normal forwards running ${ slideUp };
`;

const active_animation = css`
  opacity: 1;
  transition: opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const Div = styled.div`
  align-items: center;
  display: flex;
  gap: 2em;
  height: 300px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;

  ${ breakpoints.desktop } {
    height: 100%;
  }
`;

export const Blackout = styled.div`
  background-color: ${ props => props.theme.color_background_1};
  height: 100%;
  opacity: 0.6;
  position: absolute;
  width: 100%;
  z-index: 2;
`;

export const Shadow = styled.div`
  position: absolute;
  width: 300px;
  height: 100%;
      background: linear-gradient(to right, rgb(18, 29, 44), rgb(18, 29, 44, 0));
  left: 0;
  z-index: 2;
`;

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${ props => props.theme.color_text_accent };
  border-radius: 50%;
  box-shadow: rgb(10 25 41) 0px 3.57436px 44.6795px;
  display: flex;
  height: 80px;
  justify-content: center;
  width: 80px;
  transition: 1000ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: box-shadow .2s;
  opacity: 0;
  ${ props => props.active && active_animation }


  :hover {
    box-shadow: rgb(206 224 243 / 50%) 0px 6px 20px 0px;
    transition: box-shadow 0.2s;
  }

  :nth-child(1) {
    transition: opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  :nth-child(2) {
    transition: opacity 2000ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  :nth-child(3) {
    transition: opacity 3000ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  ${ breakpoints.desktop } {
    width: 100px;
    height: 100px;
  }
`;

export const Logos = styled.div`
  display: flex;
  gap: 2em;
  left: min(50%, 500px);
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  
  ${ breakpoints.desktop } {
    left: 35%;
  }
`;

export const Images = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    ${ props => props.theme.color_background_1 } 0%,
    rgba(10, 25, 41, 0) 30%,
    rgba(10, 25, 41, 0) 70%,
    ${ props => props.theme.color_background_1 } 100%
  );
  z-index: 1;
  left: 36%;
  position: absolute;
  justify-content: center;
  display: flex;
  transform: translateX(-40%) rotateZ(30deg) rotateX(8deg) rotateY(-8deg);
  transform-origin: center center;

  ${ breakpoints.tablet } {
    left: 40%;
  }
`;

export const Col = styled.div`
  display: grid;
  grid-template-rows: min-content;
  width: min-content;
  gap: 1.25em;
  ${ props => props.active && active_up };

  :last-child {
    margin-left: 1.25em;
    ${ props => props.active && active_down };
  }

  ${ breakpoints.desktop } {
    gap: 5em;

    :last-child {
      margin-left: 5em;
    }
  }
`;

export const Img = styled.img`
  display: block;
  width: 200px;
  height: 109.778px;
  border: 6px solid rgb(45, 56, 67);
  border-radius: 10px;
  object-fit: cover;
  transition-property: all;
  transition-duration: 150ms;
  box-shadow: rgb(0 0 0 / 60%) 0px 4px 20px;
  opacity: 0;
  ${ props => props.active && active_animation }

  :nth-child(1) {
    transition: opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  :nth-child(2) {
    transition: opacity 2000ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  :nth-child(3) {
    transition: opacity 3000ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  ${ breakpoints.tablet } {
    width: 300px;
    height: 164.667px;
  }

  ${ breakpoints.desktop } {
    width: 450px;
    height: 247px;
  }
`;
