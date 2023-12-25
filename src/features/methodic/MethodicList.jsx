import { useQuery, useQueryClient } from '@tanstack/react-query';

import styled from 'styled-components';
import MethodicItem from './MethodicItem';
import { getMethodic } from '../../services/apiMethodic';
import Spinner from '../../ui/Spinner';
import { useSearchParams } from 'react-router-dom';
import { METHODIC_SIZE } from './../../services/apiMethodic';
import Pagination from '../../ui/Pagination';

const StyledMethodicList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 35px;
`;

function MethodicList() {
  const [searchParams] = useSearchParams();
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));
  const queryClient = useQueryClient();

  const { data: { data: methodic = [], count } = {}, isLoading } = useQuery({
    queryKey: ['methodic', page],
    queryFn: () => getMethodic({ page }),
  });

  const pageCount = Math.ceil(count / METHODIC_SIZE);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ['methodic', page + 1],
      queryFn: () => getMethodic({ page: page + 1 }),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ['methodic', page - 1],
      queryFn: () => getMethodic({ page: page - 1 }),
    });
  }

  if (isLoading) return <Spinner />;

  return (
    <>
      <StyledMethodicList>
        {methodic.map((method) => (
          <MethodicItem key={method.id} method={method} />
        ))}
      </StyledMethodicList>
      <Pagination count={count} size={METHODIC_SIZE} />
    </>
  );
}

export default MethodicList;
