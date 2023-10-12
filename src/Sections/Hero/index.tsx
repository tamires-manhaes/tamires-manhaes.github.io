import React from 'react';
import * as S from './styles';

const Hero = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Description>
          <p>
            Hi 👋🏻, <br />
            my name is <br />
            <span className="gradient">Tamires</span> <br />i build things for
            web
          </p>
        </S.Description>
        <S.Photo src="/icons/layer-photo.png" />
      </S.Wrapper>
    </S.Container>
  );
};

export default Hero;
