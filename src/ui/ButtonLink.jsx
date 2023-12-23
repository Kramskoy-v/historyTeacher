import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledButtonLink = styled(Link)`
  display: block;
  width: max-content;
  margin-left: ${(props) => (props.mla ? 'auto' : 0)};
  padding: 7px 15px;
  background-color: var(--color-dark);
  border: 1px solid var(--color-dark-grey);
  font-size: 13px;
  color: var(--color-grey-white);
  text-transform: uppercase;
  transition: all 0.3s;
  &:hover {
    border-color: var(--color-red);
  }
`;

function ButtonLink({ to, children, mla, back }) {
  const navigate = useNavigate();

  if (back) {
    return (
      <StyledButtonLink
        onClick={() => {
          navigate(-1);
        }}
      >
        &larr; назад
      </StyledButtonLink>
    );
  } else {
    return (
      <StyledButtonLink mla={mla} to={to}>
        {children}
      </StyledButtonLink>
    );
  }
}

export default ButtonLink;
