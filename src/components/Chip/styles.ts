import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  padding: 0 22px;
  background: ${theme.colors.chip.bg};
  border-radius: 8px;
  display: inline-flex;

  .label {
    color: ${theme.colors.chip.text};
    text-align: center;
    font-family: Poppins;
    font-size: 9px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
  }
`;
