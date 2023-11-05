import React, { FunctionComponent } from 'react';
import * as S from './styles';
import content from '../../contents/ProjectsContent.json';
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';

interface ProjectCard {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
  techStach: string[];
  previewUrl?: string;
  githubUrl?: string;
}

const ProjectCard: FunctionComponent<ProjectCard> = ({
  id,
  imgUrl,
  title,
  description,
  techStach,
  previewUrl,
  githubUrl,
}) => {
  return (
    <S.ProjectItem key={id} id={id}>
      <S.CardImg src={imgUrl} />
      <S.CardDetails>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>
          <strong>Tech stack: </strong>
          {techStach[0]},{techStach[1]}
        </span>
        <div>
          <a href={previewUrl} target="_blank" rel="noreferrer">
            <AiOutlineLink size={20} color="#fff" /> Live Preview
          </a>

          <a href={githubUrl} target="_blank" rel="noreferrer">
            <AiFillGithub size={20} color="#fff" /> View Code
          </a>
        </div>
      </S.CardDetails>
    </S.ProjectItem>
  );
};

const Projects = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title className="title">{content.title}</S.Title>
        <S.Subtitle className="text">{content.subtitle}</S.Subtitle>
        <S.ProjectsList>
          {content?.projects.map((project) => {
            return (
              <ProjectCard
                id={project.id}
                key={project.id}
                imgUrl={project.imgUrl}
                title={project.title}
                description={project.description}
                techStach={project.techStach}
                previewUrl={project.previewUrl}
                githubUrl={project.githubUrl}
              />
            );
          })}
        </S.ProjectsList>
      </S.Wrapper>
    </S.Container>
  );
};

export default Projects;
