import React, { FunctionComponent } from 'react';
import * as S from './styles';

interface ChipProps {
  children: string;
}

const Chip: FunctionComponent<ChipProps> = ({ children }) => {
  return (
    <S.Container>
      <span className="label">{children}</span>
    </S.Container>
  );
};

export default Chip;
