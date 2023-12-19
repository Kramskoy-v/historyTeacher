import styled from 'styled-components';

import ButtonLink from '../../ui/ButtonLink';

const StyledMethodDevItem = styled.li`
  display: grid;
  grid-template-columns: 70px 1fr;
  padding: 15px 20px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
  gap: 35px;
  border: 1px solid var(--color-gray);

  h2 {
    margin-bottom: 10px;
  }
`;

const Description = styled.p`
  max-width: 730px;
  margin-bottom: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function MethodDevItem({ id, title, description, icon }) {
  return (
    <StyledMethodDevItem>
      <img src={icon} alt="" />
      <div>
        <h2>{title}</h2>
        <Description>{description}</Description>
        <ButtonLink mla="mla" to={`/methodological/${id}`}>
          Подробнее
        </ButtonLink>
      </div>
    </StyledMethodDevItem>
  );
}

export default MethodDevItem;
