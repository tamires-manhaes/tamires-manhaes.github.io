import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.section`
  margin: 0 0 100px;
`;

export const Wrapper = styled.div``;

export const Section = styled.div`
  margin-bottom: 120px;
  h2 {
    color: ${theme.colors.title};
    font-family: Poppins;
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: 52px; /* 123.81% */
    letter-spacing: -0.4px;
    margin-bottom: 15px;
  }

  p {
    color: ${theme.colors.text};
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 144.444% */
  }
`;

export const XPCardList = styled.ul``;

export const XPCardItem = styled.li`
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  margin-bottom: 15px;
`;

export const XPCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
  }

  span {
    color: ${theme.colors.text};
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 1px;

    svg > path {
      stroke: ${theme.colors.text};
    }
  }

  h4 {
    color: ${theme.colors.text};
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 1px;
    margin: 0;

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }

  .infosBox {
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 480px) {
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
    }
  }
`;

export const CardDescriptionRight = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    align-items: flex-start;
    width: 100%;
  }
`;

export const CardDescriptionLeft = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  span {
    margin-right: 15px;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
