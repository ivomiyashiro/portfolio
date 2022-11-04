import styled from 'styled-components';
import { breakpoints } from '../../styles';

export const Section = styled.section`
  padding-bottom: 60px;

  ${ breakpoints.tablet } {
    padding-bottom: 80px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 60px;
  width: 100%;

  ${ breakpoints.tablet} {
    padding: 0;
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  width: 100%;
  position: relative;
`;
