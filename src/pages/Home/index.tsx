import React, { FunctionComponent } from 'react';
import * as S from './styles';
import Header from '../../components/Header';
import Hero from '../../Sections/Hero';
import MyTechStack from '../../Sections/MyTechStack';
import About from '../../Sections/About';
import Projects from '../../Sections/Projects';
import Footer from '../../components/Footer';

const Home: FunctionComponent = () => {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <Hero />
        <About />
        <MyTechStack />
        <Projects />
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
};

export default Home;
