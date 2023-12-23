import supabase, { supabaseUrl } from './supabase';

export async function getNews() {
  const { data, error } = await supabase.from('news').select('*').range(0, 10);

  if (error) {
    console.error(error);
    throw new Error('Неудачная попытка загрузки');
  }
  return data;
}

export const createNews = async (newNews) => {
  const imageName = `${Math.random()}-${newNews.image.name}`.replaceAll(
    '/',
    ''
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/images-news/${imageName}`;

  //создание метода
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
