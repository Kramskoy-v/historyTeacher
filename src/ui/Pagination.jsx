import { useSearchParams } from 'react-router-dom';

import styled from 'styled-components';
import Button from './Button';

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 30px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    row-gap: 30px;
  }
`;

const Buttons = styled.div`
  display: flex;
  column-gap: 30px;
  justify-content: space-between;
`;

function Pagination({ count, size }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get('page')
    ? 1
    : Number(searchParams.get('page'));

  const pageCount = Math.ceil(count / size);

  const prevPage = () => {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set('page', prev);
    setSearchParams(searchParams);
  };

  const nextPage = () => {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set('page', next);
    setSearchParams(searchParams);
  };

  if (pageCount <= 1) return null;

  return (
    <StyledPagination>
      <p>
        Страница: {currentPage} из {pageCount}{' '}
      </p>
      <Buttons>
        <Button
          title="предыдущая"
          onClick={prevPage}
          disabled={currentPage === 1}
        />
        <Button
          title="следующая"
          onClick={nextPage}
          disabled={currentPage === pageCount}
        />
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;
