import styled from 'styled-components';
import FlexBox from '../ui/FlexBox';
import SectionTitle from '../ui/SectionTitle';
import ContactTitle from '../ui/ContactTitle';
import ContactMap from '../features/contacts/ContactMap';
import FormFeedback from '../features/contacts/FormFeedback';
import MessageList from '../features/contacts/MessageList';
import { useUser } from '../features/authentication/useUser';
import { LinkA } from '../ui/LinkA';

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-row: 1fr 1fr;
    grid-row-gap: 40px;
  }
  > div {
    display: flex;
    flex-direction: column;
    row-gap: 25px;
    @media screen and (max-width: 768px) {
      row-gap: 15px;
    }
  }
  address,
  > p {
    font-style: normal;
    color: var(--color-grey-white);
  }
  a {
    transition: all 0.3s;
    &:hover {
      color: var(--color-red);
    }
  }
`;

function Contacts() {
  const { isAuthenticated } = useUser();
  return (
    <>
      <SectionTitle content="Контакты" />
      {isAuthenticated && <MessageList />}
      <FlexBox src="contacts.jpg" alt="Блокнот и шариковая ручка">
        <p>
          Если у Вас есть вопросы, можете обратиться по месту моей работы МБОУ
          «Гимназия №1».
          <br />А если хотите написать лично мне, оставить пожелания или
          связаться, заполните форму связи.
          <br /> Спасибо!
        </p>
      </FlexBox>
      <GridBox>
        <div>
          <ContactTitle title="Адрес и телефон" />
          <ContactMap />

          <address>
            394088, город Воронеж, <br />
            улица Беговая, 146
          </address>
          <LinkA
            href="https://yandex.ru/maps/-/CDqHmYKA"
            target="_blank"
            rel="noopener noreferrer"
          >
            посмотреть на карте
          </LinkA>
          <div>
            <p>Телефон:&nbsp;&nbsp;+7 (473) 266‒09‒14</p>
            <p>
              Электронная почта:&nbsp;&nbsp;
              <a href="mailto:ivanhotepp@gmail.com">ivanhotepp@gmail.com</a>
            </p>
            <p>
              Сайт:&nbsp;&nbsp;
              <a
                href="http://gimnaz1.obrvrn.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                gimnaz1.obrvrn.ru
              </a>
            </p>
          </div>
        </div>
        <div>
          <ContactTitle title="Форма связи" />
          <FormFeedback />
        </div>
      </GridBox>
    </>
  );
}

export default Contacts;
