import supabase, { supabaseUrl } from './supabase';
export const METHODIC_SIZE = 10;

export async function getMethodic({ page }) {
  const from = (page - 1) * METHODIC_SIZE;
  const to = from + METHODIC_SIZE - 1;

  const { data, error, count } = await supabase
    .from('methodic')
    .select('id,title, description, image', { count: 'exact' })
    .range(from, to)
    .order('created_at', { ascending: false });

  if (error) {
    console.error(error);
    throw new Error('Неудачная попытка загрузки');
  }
  return { data, count };
}

export const createMethod = async (newMethod) => {
  const imageName = `${Math.random()}-${newMethod.image.name}`.replaceAll(
    '/',
    ''
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/icons-methodic/${imageName}`;

  //создание метода
  const { data, error } = await supabase
    .from('methodic')
    .insert([{ ...newMethod, image: imagePath }]);

  if (error) {
    console.error(error);
    throw new Error('Неудачная попытка загрузки');
  }
  // загрузка иконки
  const { error: storageError } = await supabase.storage
    .from('icons-methodic')
    .upload(imageName, newMethod.image);

  //
  if (storageError) {
    await supabase.from('methodic').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error('Ошибка загрузки и создания записи');
  }
  return data;
};

export const deleteMethod = async (id) => {
  const { data, error } = await supabase.from('methodic').delete().eq('id', id);
  if (error) {
    console.error(error);
    throw new Error('Неудачная попытка удаления');
  }
  return data;
};

//страница загрузки одной методики

export async function getMethodicSingle(id) {
  const { data, error } = await supabase
    .from('methodic')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    throw new Error('Неудачная попытка загрузки');
  }
  return data;
}
