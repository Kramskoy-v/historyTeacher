import styled from 'styled-components';
import FlexBox from '../ui/FlexBox';
import SectionTitle from '../ui/SectionTitle';
import ContactTitle from '../ui/ContactTitle';
import ContactMap from '../features/contacts/ContactMap';
import FormFeedback from '../features/contacts/FormFeedback';
import MessageList from '../features/contacts/MessageList';
import { useUser } from '../features/authentication/useUser';

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  > div {
    display: flex;
    flex-direction: column;
    row-gap: 40px;
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
          Алиса немного удивилась этому, но она слишком трепетала перед
          Королевой, чтобы не поверить этому. «Попробую, когда пойду домой, —
          подумала она про себя, — когда в следующий раз немного опоздаю к
          ужину». Говоря это, она довольно робко взглянула на настоящую
          Королеву, но ее спутник лишь приятно улыбнулся. и сказал: «С этим
          легко справиться». Если хочешь, ты можешь стать пешкой Белой Королевы,
          поскольку Лили слишком молода, чтобы играть; и ты для начала на Втором
          квадрате: когда доберешься до Восьмого квадрата, ты будешь Королевой –
          «Как раз в этот момент, так или иначе, они начали бежать
        </p>
      </FlexBox>
      <GridBox>
        <div>
          <ContactTitle title="Адрес и телефон" />
          <ContactMap />

          <address>
            394088, город Воронеж, <br />
            улица Беговая, 146​
          </address>
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
