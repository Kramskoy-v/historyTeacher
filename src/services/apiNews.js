import supabase, { supabaseUrl } from './supabase';
export const NEWS_SIZE = 3;

export async function getNews({ page }) {
  const from = (page - 1) * NEWS_SIZE;
  const to = from + NEWS_SIZE - 1;

  const { data, error, count } = await supabase
    .from('news')
    .select('*', { count: 'exact' })
    .range(from, to)
    .order('date', { ascending: false });

  if (error) {
    console.error(error);
    throw new Error('Неудачная попытка загрузки');
  }
  return { data, count };
}

export const createNews = async (newNews) => {
  const imageName = `${Math.random()}-${newNews.image.name}`.replaceAll(
    '/',
    ''
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/images-news/${imageName}`;

  //создание новости
  const { data, error } = await supabase
    .from('news')
    .insert([{ ...newNews, image: imagePath }]);

  if (error) {
    console.error(error);
    throw new Error('Неудачная попытка загрузки');
  }

  // загрузка иконки
  const { error: storageError } = await supabase.storage
    .from('images-news')
    .upload(imageName, newNews.image);

  //
  if (storageError) {
    await supabase.from('news').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error('Ошибка загрузки и создания записи');
  }
  return data;
};

export const deleteNews = async (id) => {
  const { data, error } = await supabase.from('news').delete().eq('id', id);
  if (error) {
    console.error(error);
    throw new Error('Неудачная попытка удаления');
  }
  return data;
};
