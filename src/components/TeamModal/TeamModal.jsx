import Modal from 'components/Modal/Modal';
import Deniss from '../../images/team/Deniss.jpg';
import Vitaliy from '../../images/team/Vitaliy.jpg';
import Dmitriy from '../../images/team/Dmitriy.jpg';
import Svetlana from '../../images/team/Svetlana.jpg';
import Irina from '../../images/team/Irina.png';
import Galya from '../../images/team/Galya.png';
import Zara from '../../images/team/Zara.png';
import Aleksandr from '../../images/team/Aleksandr.png';
import Andrey from '../../images/team/Andrey.jpeg';

import {
  InfoDescr,
  InfoTitle,
  TeamImg,
  TeamInfo,
  TeamItem,
  TeamList,
  TeamWrapper,
} from './TeamModal.styled';

export default function TeamModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <TeamWrapper>
        <TeamList>
          <TeamItem>
            <TeamImg src={`${Deniss}`} alt="Deniss" />
            <TeamInfo>
              <InfoTitle>Deniss Simonaits</InfoTitle>
              <InfoDescr>
                {' '}
                Team Lead <br />
                Frontend, Backend{' '}
              </InfoDescr>
            </TeamInfo>
          </TeamItem>
          <TeamItem>
            <TeamImg src={`${Irina}`} alt="Deniss" />
            <TeamInfo>
              <InfoTitle>Ирина Журавель</InfoTitle>
              <InfoDescr>
                Scrum <br />
                Frontend
              </InfoDescr>
            </TeamInfo>
          </TeamItem>
          <TeamItem>
            <TeamImg src={`${Galya}`} alt="Deniss" />
            <TeamInfo>
              <InfoTitle>Галина Матвиенко</InfoTitle>
              <InfoDescr>Frontend, Backend </InfoDescr>
            </TeamInfo>
          </TeamItem>
          <TeamItem>
            <TeamImg src={`${Aleksandr}`} alt="Deniss" />
            <TeamInfo>
              <InfoTitle>Александр Протопоп</InfoTitle>
              <InfoDescr>Frontend</InfoDescr>
            </TeamInfo>
          </TeamItem>
          <TeamItem>
            <TeamImg src={`${Andrey}`} alt="Deniss" />
            <TeamInfo>
              <InfoTitle>Андрей Соколовский</InfoTitle>
              <InfoDescr>Backend</InfoDescr>
            </TeamInfo>
          </TeamItem>
          <TeamItem>
            <TeamImg src={`${Zara}`} alt="Deniss" />
            <TeamInfo>
              <InfoTitle>Зара Меликян</InfoTitle>
              <InfoDescr>Frontend</InfoDescr>
            </TeamInfo>
          </TeamItem>
          <TeamItem>
            <TeamImg src={`${Svetlana}`} alt="Deniss" />
            <TeamInfo>
              <InfoTitle>Светлана Редюхина</InfoTitle>
              <InfoDescr>Frontend, Backend </InfoDescr>
            </TeamInfo>
          </TeamItem>
          <TeamItem>
            <TeamImg src={`${Vitaliy}`} alt="Deniss" />
            <TeamInfo>
              <InfoTitle>Виталий Герасимов</InfoTitle>
              <InfoDescr>Frontend</InfoDescr>
            </TeamInfo>
          </TeamItem>
          <TeamItem>
            <TeamImg src={`${Dmitriy}`} alt="Deniss" />
            <TeamInfo>
              <InfoTitle>Дмитрий Базалей</InfoTitle>
              <InfoDescr>Frontend, Backend </InfoDescr>
            </TeamInfo>
          </TeamItem>
        </TeamList>
      </TeamWrapper>
    </Modal>
  );
}
