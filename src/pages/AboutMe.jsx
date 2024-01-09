import styled from 'styled-components';

import SectionTitle from '../ui/SectionTitle';
import FlexBox from '../ui/FlexBox';

const Experience = styled.ul`
  list-style-type: '📌';
  padding-left: 17px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  li {
    color: var(--color-grey-white);
    padding-left: 10px;
  }
`;

function AboutMe() {
  return (
    <>
      <SectionTitle content="Обо мне" />
      <FlexBox src="about-me.jpg" alt="Иван Неретин">
        <h2>Я люблю то, чем занимаюсь</h2>
        <p>
          Родился 16 мая 1989 года в небольшом селе Лещаное, что в Воронежской
          области. Все детство провел в этом селе, а после успешной сдачи ЕГЭ,
          как и планировал, поступил в ВГПУ на исторический факультет. В вузе
          познакомился с прекрасной дисциплиной – археологией, которая открыла
          для меня научное мировоззрение, которого я стараюсь придерживаться.
          После учебы для меня выбор не стоял, я связал свою жизнь с
          преподаванием, чем занимаюсь и сейчас.
        </p>
      </FlexBox>
      <Experience>
        <li>
          С 2020 года являюсь членом комиссии по проверке экзаменационных работ
          ЕГЭ по обществознанию
        </li>
        <li>
          А с 2016- по настоящее время являюсь учителем истории и обществознания
          в МБОУ «Гимназия №1»
        </li>
        <li>
          С 2013-2016 гг. трудился в Дворце творчества детей и молодежи как
          педагог дополнительного образования
        </li>
        <li>
          С 2012-2013 гг. работал в Воронежском техникуме строительных
          технологий в должности преподавателя истории и обществознания
        </li>
        <li>
          В 2010-2012 закончил магистратуру ВГПУ получив степень магистра
          «Социально-экономического образования»
        </li>
        <li>
          В 2006-2010 учился в Воронежском государственном педагогическом
          университете получив степень бакалавра «Социально-экономического
          образования»
        </li>
      </Experience>
    </>
  );
}

export default AboutMe;
