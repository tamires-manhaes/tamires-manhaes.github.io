import styled from 'styled-components';
import theme from '../../theme';
export const Container = styled.section``;

export const Wrapper = styled.div`
  margin: 80px 0;
`;

export const ProjectsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 100px 0 80px;
  p {
    margin: 40px 0 20px;
    color: #ccc;
    font-size: 23px;
    text-align: center;
  }
`;

export const ProjectItem = styled.li`
  width: calc(100% / 3 - 10px);
  max-width: 400px;
  border-radius: 20px;
  background: #363636;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin: 16px 8px;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 165px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const CardDetails = styled.div`
  padding: 35px 25px;
  margin-top: 145px;
  h3 {
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    color: ${theme.colors.title};
  }

  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 26px;
    margin: 12px 0;
    text-align: start;
    color: ${theme.colors.title};
  }

  span {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    color: ${theme.colors.title};
  }

  div {
    margin: 10px 0 0;
    > a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px;
      > svg {
        margin-right: 8px;
      }
    }
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 32px;
`;

export const Subtitle = styled.p`
  text-align: center;
  width: 100%;
  margin: 0 auto;
`;
