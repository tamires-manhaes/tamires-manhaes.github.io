import React from 'react';
import * as S from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PepperStdio = () => {
  return (
    <S.Container>
      <Header />
      <S.Main>
        <S.Hero id="hero">
          <S.IMGBox>
            <img src="./icons/p-logo.svg" />
          </S.IMGBox>
          <S.Description>
            <h2>
              Welcome to Pepper Studio, your one-stop shop for web and mobile
              app development!
            </h2>
            <p>
              At Pepper Studio, we specialize in building and managing custom
              web and mobile apps for businesses of all sizes. Whether
              you&apos;re looking to create a new app from scratch or improve an
              existing one, our team of experienced developers has the skills
              and expertise to help you succeed.
            </p>
          </S.Description>
        </S.Hero>
      </S.Main>
      <Footer />
    </S.Container>
  );
};

export default PepperStdio;
