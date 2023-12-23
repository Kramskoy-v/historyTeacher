import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import SectionTitle from '../ui/SectionTitle';
import ButtonLink from '../ui/ButtonLink';
import { getMethodicSingle } from '../services/apiMethodic';
import Spinner from '../ui/Spinner';

const MethodDescription = styled.p`
  line-height: 1.75;
  color: var(--color-grey-white);
`;

const Download = styled.a`
  display: block;
  width: max-content;
  margin-left: auto;
  padding: 7px 15px;
  background-color: var(--color-dark);
  border: 1px solid var(--color-dark-grey);
  font-size: 13px;
  color: var(--color-grey-white);
  text-transform: uppercase;
  &:hover {
    border-color: var(--color-red);
  }
  &:active {
    transform: scale(0.97);
  }
`;

function MethodicSingle() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['methodic', id],
    queryFn: () => getMethodicSingle(id),
    retry: false,
  });

  if (isLoading) return <Spinner />;
  const { title, description, downloadLink } = data;
  return (
    <>
      <SectionTitle content={title} />
      <MethodDescription>{description}</MethodDescription>
      <Download href={downloadLink} target="_blank" rel="noopener noreferrer">
        Перейти и скачать
      </Download>
      <ButtonLink back="back" />
    </>
  );
}

export default MethodicSingle;
