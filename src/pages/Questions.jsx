import QuestionsList from '../features/questions/QuestionsList';
import SectionTitle from '../ui/SectionTitle';

function Questions() {
  return (
    <>
      <SectionTitle content="Вопросы и ответы" />
      <QuestionsList />
    </>
  );
}

export default Questions;
