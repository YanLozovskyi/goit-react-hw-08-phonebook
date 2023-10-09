import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  max-width: 1440px;

  @media screen and (min-width: 375px) {
    &container {
      width: 375px;
    }
  }

  @media screen and (min-width: 768px) {
    &container {
      width: 768px;
      padding-right: 32px;
      padding-left: 32px;
    }
  }

  @media screen and (min-width: 1440px) {
    &container {
      width: 1440px;
    }
  }
`;
