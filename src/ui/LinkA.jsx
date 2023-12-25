import styled from 'styled-components';

export const LinkA = styled.a`
  display: block;
  width: max-content;
  margin-left: auto;
  padding: 7px 15px;
  background-color: var(--color-dark);
  border: 1px solid var(--color-dark-grey);
  font-size: 13px;
  color: var(--color-grey-white);
  text-transform: uppercase;
  transition: all 0.3s;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    border-color: var(--color-red);
  }
  &:active {
    transform: scale(0.99);
    background-color: var(--color-dark-grey);
  }
`;
