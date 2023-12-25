import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import SectionTitle from '../ui/SectionTitle';
import ButtonLink from '../ui/ButtonLink';
import { getMethodicSingle } from '../services/apiMethodic';
import Spinner from '../ui/Spinner';
import { LinkA } from '../ui/LinkA';

const MethodDescription = styled.p`
  line-height: 1.75;
  color: var(--color-grey-white);
`;

function MethodicSingle() {
  const { id } = useParams();

  const { data = [], isLoading } = useQuery({
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
      <LinkA href={downloadLink} target="_blank" rel="noopener noreferrer">
        Перейти и скачать
      </LinkA>
      <ButtonLink back="back" />
    </>
  );
}

export default MethodicSingle;
