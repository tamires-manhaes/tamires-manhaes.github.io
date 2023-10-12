import React from 'react';
import * as S from './styles';
import content from '../../contents/ProjectsContent.json';

const Projects = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title className="title">{content.title}</S.Title>
        <S.Subtitle className="text">{content.subtitle}</S.Subtitle>
        <S.ProjectsList>
          {content.projects.length === 0 && (
            <p className="link"> Projects soon... 👀</p>
          )}
        </S.ProjectsList>
      </S.Wrapper>
    </S.Container>
  );
};

export default Projects;
