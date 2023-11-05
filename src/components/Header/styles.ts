import styled from 'styled-components';

export const Header = styled.header``;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.span`
  margin-right: 250px;
  img {
    width: 65px;
    height: 45px;
  }

  @media screen and (max-width: 767px) {
    margin-right: 90px;
  }
`;

export const MenuBox = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 620px;
`;

export const MenuItem = styled.li`

  @media screen and (max-width: 768px) {
    justify-content: flex-end;
    width: 420px;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;


export const SocialMediaBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 135px;
`;

export const SocialMediaItem = styled.li`
  @media screen and (max-width: 768px) {
    justify-content: center;
    margin: 0 3px;
  }
`;
