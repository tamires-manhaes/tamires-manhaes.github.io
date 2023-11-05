import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.section`
  padding: 150px 0 80px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Description = styled.div`
  padding-right: 125px;

  @media screen and (max-width: 1024px) {
    padding-right: 95px;
  }

  @media screen and (max-width: 768px) {
    padding-right: 0;
  }

  p {
    color: ${theme.colors.title};
    font-family: Poppins;
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px; /* 120.69% */
    letter-spacing: -1px;

    @media screen and (max-width: 768px) {
      font-size: 58px;
    }

    @media screen and (max-width: 480px) {
      font-size: 38px;
      line-height: 48px;
    }
  }

  .gradient {
    background: -webkit-linear-gradient(#00f3ff, #930eff, #fc45ed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Photo = styled.img`
  @media screen and (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;
