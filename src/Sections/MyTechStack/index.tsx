import React from 'react';
import * as S from './styles';
import content from '../../contents/MyTechStackCont.json';

const MyTechStack = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title className="title">{content.title}</S.Title>
        <S.Description className="text">{content.description}</S.Description>
        <S.StackList>
          {content.stacks.map((stack) => {
            return (
              <S.StackItem key={stack.alt}>
                <img src={stack.iconUrl} alt={stack.alt} className="icon" />
              </S.StackItem>
            );
          })}
        </S.StackList>
      </S.Wrapper>
    </S.Container>
  );
};

export default MyTechStack;
