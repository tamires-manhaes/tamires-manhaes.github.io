import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.section`
  padding: 150px 0 80px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.div`
  p {
    color: ${theme.colors.title};
    font-family: Poppins;
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px; /* 120.69% */
    letter-spacing: -1px;
  }

  .gradient {
    background: -webkit-linear-gradient(#00f3ff, #930eff, #fc45ed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Photo = styled.img``;
