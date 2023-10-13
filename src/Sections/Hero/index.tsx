import React from 'react';
import * as S from './styles';

const Hero = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Description>
          <p>
            Hi 👋🏻, my name is <span className="gradient">Tamires</span> i build
            things for web
          </p>
        </S.Description>
        <S.Photo src="/icons/layer-photo.png" />
      </S.Wrapper>
    </S.Container>
  );
};

export default Hero;
