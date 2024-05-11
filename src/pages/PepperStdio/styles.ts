import theme from '../../theme';
import styled from 'styled-components';

export const Container = styled.main`
  margin: 15px;
  padding: 0 180px;

  @media screen and (max-width: 1024px) {
    padding: 0 60px;
  }

  @media screen and (max-width: 768px) {
    padding: 40px;
  }
`;

export const Main = styled.main`
  height: 80vh;
`;

export const Hero = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const IMGBox = styled.div`
  > img {
    border-radius: 20%;
  }
`;

export const Description = styled.div`
  color: ${theme.colors.title};

  > h2 {
    font-size: 42px;
    margin-bottom: 15px;
  }
`;
