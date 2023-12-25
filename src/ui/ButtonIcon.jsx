import styled, { css } from 'styled-components';
import closeIcon from '../assets/close.svg';
import trashIcon from '../assets/trash.svg';
import burgerIcon from '../assets/burger.svg';

const variants = {
  delete: css`
    width: 35px;
    height: 35px;
    position: absolute;
    top: 0;
    right: 0;
  `,
  burger: css`
    width: 65px;
    height: 65px;
    position: fixed;
    top: 10px;
    right: 20px;
    padding: 10px;
    z-index: 15;
    display: none;

    @media screen and (max-width: 992px) {
      display: block;
    }
  `,
};

const StyledButtonIcon = styled.button`
  background: none;
  border-radius: 50%;
  border: none;

  svg {
    width: 100%;
    height: 100%;
  }
  span {
    display: none;
    position: absolute;
    top: -38px;
    right: -10px;
    z-index: 2;
    width: max-content;
    padding: 13px 5px;
    border-radius: 5px;
    font-size: 10px;
    background-color: var(--color-red);
  }
  &:disabled {
    filter: grayscale(1);
  }
  &:hover {
    transform: scale(1.03);

    span {
      display: block;
    }
  }
  ${(prop) => variants[prop.variant]}
`;

StyledButtonIcon.defaultProps = {
  variant: 'delete',
};

function ButtonIcon({ type, showSidebar, onClick, disabled, variant }) {
  if (type === 'delete')
    return (
      <StyledButtonIcon onClick={onClick} disabled={disabled}>
        <img src={trashIcon} alt="Иконка удаления" />
        <span>Удалить запись</span>
      </StyledButtonIcon>
    );

  return (
    <StyledButtonIcon onClick={onClick} variant={variant}>
      {showSidebar ? (
        <img src={closeIcon} alt="Иконка закрыть" />
      ) : (
        <img src={burgerIcon} alt="Иконка меню" />
      )}
    </StyledButtonIcon>
  );
}

export default ButtonIcon;
