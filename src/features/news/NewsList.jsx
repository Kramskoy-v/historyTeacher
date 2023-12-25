import { useQuery, useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

import { NEWS_SIZE, getNews } from '../../services/apiNews';
import Spinner from '../../ui/Spinner';
import NewsItem from './newsItem';
import Pagination from '../../ui/Pagination';
import { useSearchParams } from 'react-router-dom';

const StyledNewsList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

function NewsList() {
  const [searchParams] = useSearchParams();
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));
  const queryClient = useQueryClient();

  const { isLoading, data: { data: news = [], count } = {} } = useQuery({
    queryKey: ['news', page],
    queryFn: () => getNews({ page }),
  });

  const pageCount = Math.ceil(count / NEWS_SIZE);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ['news', page + 1],
      queryFn: () => getNews({ page: page + 1 }),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ['news', page - 1],
      queryFn: () => getNews({ page: page - 1 }),
    });
  }

  if (isLoading) return <Spinner />;

  return (
    <>
      <StyledNewsList>
        {news.map((item) => (
          <NewsItem key={item.id} {...item} />
        ))}
      </StyledNewsList>
      <Pagination count={count} size={NEWS_SIZE} />
    </>
  );
}

export default NewsList;
