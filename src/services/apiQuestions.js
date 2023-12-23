import supabase from './supabase';

export async function getQuestion() {
  const { data, error } = await supabase.from('questions').select('*');

  if (error) {
    console.error(error);
    throw new Error('Неудачная попытка загрузки');
  }
  return data;
}

export const createQuestion = async (newQuestion) => {
  const { data, error } = await supabase
    .from('questions')
    .insert([newQuestion]);
  if (error) {
    console.error(error);
    throw new Error('Неудачная попытка загрузки');
  }
  return data;
};

export const deleteQuestion = async (id) => {
  const { data, error } = await supabase
    .from('questions')
    .delete()
    .eq('id', id);
  if (error) {
    console.error(error);
    throw new Error('Неудачная попытка удаления');
  }
  return data;
};
