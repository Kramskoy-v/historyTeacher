import { useQuery } from '@tanstack/react-query';
import { getFeedback } from '../../services/apiFeedback';
import MessageItem from './MessageItem';
import Spinner from '../../ui/Spinner';

function MessageList() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['feedback'],
    queryFn: getFeedback,
  });

  if (isLoading) return <Spinner />;
  return (
    <>
      <h2>Входящие сообщения</h2>
      <ul>
        {data.map((message) => (
          <MessageItem key={message.id} {...message} />
        ))}
      </ul>
    </>
  );
}

export default MessageList;
