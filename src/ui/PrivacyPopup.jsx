import styled from 'styled-components';
import ButtonLink from './ButtonLink';
import Button from './Button';

const StyledPrivacyPopup = styled.div`
  position: fixed;
  left: 50%;
  bottom: 20px;
  z-index: 10;
  transform: translateX(-50%);
  max-width: 400px;
  padding: 15px;
  background-color: var(--color-dark-grey);
  border-radius: 5px;
  border: 1px solid var(--color-red);
  p {
    margin-bottom: 20px;
    font-size: 14px;
  }
`;

const LinksRow = styled.div`
  display: flex;
  column-gap: 20px;
  justify-content: space-between;
`;

function PrivacyPopup({ setShowPrivacyPopup }) {
  return (
    <StyledPrivacyPopup>
      <p>
        При работе с сайтом Вы даете согласие на обработку персональных данных,
        использование хранилища...
      </p>
      <LinksRow>
        <ButtonLink to="privacy">Прочитать все</ButtonLink>
        <Button
          title="Согласиться"
          onClick={() => setShowPrivacyPopup(false)}
        />
      </LinksRow>
    </StyledPrivacyPopup>
  );
}

export default PrivacyPopup;
