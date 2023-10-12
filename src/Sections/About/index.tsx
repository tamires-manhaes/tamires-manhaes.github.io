import React, { FunctionComponent } from 'react';
import { BsFillBuildingFill, BsCalendar3 } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import * as S from './styles';
import content from '../../contents/AboutMeContent.json';
import Chip from '../../components/Chip';

interface IExperienceCard {
  position: string;
  company: string;
  location: string;
  type: string;
  periodWorked: string;
}

const XPCard: FunctionComponent<IExperienceCard> = ({
  position,
  company,
  location,
  periodWorked,
  type,
}) => {
  return (
    <S.XPCardItem>
      <S.XPCardWrapper>
        <S.CardDescriptionLeft>
          <h4>{position}</h4>
          <div>
            <span>
              <BsFillBuildingFill size={12} color="#A7A7A7" /> {company}
            </span>
            <span>
              <GrLocation size={12} color="#A7A7A7" /> {location}
            </span>
          </div>
        </S.CardDescriptionLeft>
        <S.CardDescriptionRight>
          <Chip>{type}</Chip>
          <span>
            <BsCalendar3 size={12} color="#A7A7A7" /> {periodWorked}
          </span>
        </S.CardDescriptionRight>
      </S.XPCardWrapper>
    </S.XPCardItem>
  );
};

const About: FunctionComponent = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Section>
          <h2>About</h2>
          <p>{content.descrition}</p>
        </S.Section>
        <S.Section>
          <h2>Work Experience</h2>
          {content.workXP.map((xp) => {
            return (
              <XPCard
                key={xp.company}
                position={xp.position}
                company={xp.company}
                location={xp.location}
                periodWorked={xp.periodWorked}
                type={xp.type}
              />
            );
          })}
        </S.Section>
      </S.Wrapper>
    </S.Container>
  );
};

export default About;
