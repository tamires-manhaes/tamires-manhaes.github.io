import React from 'react';
import * as S from './styles';
import content from '../../contents/HeaderContent.json';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <S.Header>
      <S.Wrapper>
        <S.Logo>
          <img src={content.logo} alt="logo-tamires" />
        </S.Logo>

        <S.MenuBox>
          <S.MenuList>
            {content.menu.map((item) => {
              return (
                <S.MenuItem key={item.index}>
                  <Link to={item.redirectTo} className="link">
                    {' '}
                    {item.title}
                  </Link>
                </S.MenuItem>
              );
            })}
          </S.MenuList>
          <S.SocialMediaBox>
            {content.socialMedia.map((item) => {
              return (
                <S.SocialMediaItem key={item.index}>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <img src={item.iconPath} />
                  </a>
                </S.SocialMediaItem>
              );
            })}
          </S.SocialMediaBox>
        </S.MenuBox>
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
