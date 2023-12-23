import { useQuery } from '@tanstack/react-query';

import styled from 'styled-components';
import MethodicItem from './MethodicItem';
import { getMethodic } from '../../services/apiMethodic';
import Spinner from '../../ui/Spinner';

const StyledMethodicList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 35px;
`;

function MethodicList() {
  const { data: methodic, isLoading } = useQuery({
    queryKey: ['methodic'],
    queryFn: getMethodic,
  });

  if (isLoading) return <Spinner />;

  return (
    <StyledMethodicList>
      {methodic.map((method) => (
        <MethodicItem key={method.id} method={method} />
      ))}
    </StyledMethodicList>
  );
}

export default MethodicList;
