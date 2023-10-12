import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.section``;

export const Wrapper = styled.div``;

export const Title = styled.h2`
  color: ${theme.colors.title};
  text-align: center;
`;

export const Description = styled.p`
  color: ${theme.colors.title};
  text-align: center;
`;

export const StackList = styled.ul`
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StackItem = styled.li`
  width: calc(100% / 6 - 15px);
  padding: 8px 4px;
  margin-bottom: 38px;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    width: 85px;
    height: 85px;
  }
`;
