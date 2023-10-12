import React from 'react';
import * as S from './styles';

const Footer = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <div>
          <img src="/icons/logo.png" alt="logo" />
        </div>
        <div>
          <span className="link">
            Designed by Pavan MG and and built Tamires 🤍
          </span>
        </div>
      </S.Wrapper>
    </S.Container>
  );
};

export default Footer;
