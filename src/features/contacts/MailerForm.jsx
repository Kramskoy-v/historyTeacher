import styled from 'styled-components';
import InputItem from '../../ui/InputItem';
import Button from '../../ui/Button';

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;

function MailerForm() {
  return (
    <StyledForm action="phpmailer">
      <InputItem type="text" name="firstName" placeholder="Ваше имя" id={42} />
      <InputItem type="email" name="email" placeholder="Ваша почта" id={4542} />
      <InputItem
        type="tel"
        name="phone"
        placeholder="Ваш номер телефона"
        id={1042}
      />
      <InputItem
        type="textarea"
        name="message"
        placeholder="Сообщение"
        id={151}
      />
      <Button title="Отправить" />
    </StyledForm>
  );
}

export default MailerForm;
