import supabase from './supabase';

export async function getFeedback() {
  const { data, error } = await supabase.from('feedback').select('*');

  if (error) {
    console.error(error);
    throw new Error('Неудачная попытка загрузки');
  }
  return data;
}

export const createFeedback = async (newFeedback) => {
  const { data, error } = await supabase.from('feedback').insert([newFeedback]);
  if (error) {
    console.error(error);
    throw new Error('Неудачная попытка загрузки');
  }
  return data;
};

export const deleteFeedback = async (id) => {
  const { data, error } = await supabase.from('feedback').delete().eq('id', id);
  if (error) {
    console.error(error);
    throw new Error('Неудачная попытка удаления');
  }
  return data;
};
