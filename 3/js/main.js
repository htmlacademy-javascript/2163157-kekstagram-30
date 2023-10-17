const descriptions = [
  'описание 1',
  'описание 2',
  'описание 3'
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = [
  'Артём',
  'Пётр',
  'Максим',
  'Мария',
  'Дарья',
  'Екатерина'
];

//функция для вычисления рандомного элемента в массиве
const pickItemFromList = (list) => {
  const index = Math.floor(Math.random() * list.length);

  return list[index];
};

//функция для вычисления рандомного числа в заданном диапозоне
const pickIntegerInRange = (min, max) => {
  const value = min + Math.random() * (max - min);

  return Math.round(value);
};

//функия для генерации рандомного id в указанном диапозоне без повторений
const createId = () => {
  const previousId = [];

  let currentId = pickIntegerInRange(1, 25);

  if (previousId >= 25) {
    return null;
  }

  while (previousId.includes(currentId)) {
    currentId = pickIntegerInRange(1, 25);
  }

  previousId.push(currentId);
  return currentId;
};

//создаст объект комментария
const createCommentState = () => {
  const id = createId();
  const avatar = `img/avatar-${pickIntegerInRange(1, 6)}.svg`;
  const message = pickItemFromList(messages);
  const name = pickItemFromList(names);

  return {id, avatar, message, name};
};

//создаст список комментариев
const createCommentStateList = () => {
  const commentsList = Array.from({length: pickIntegerInRange(0, 30)}, createCommentState);

  return commentsList;
};


//создаст объект фотографии
const createImageState = () => {
  const id = createId();
  const url = `photos/${pickIntegerInRange(1, 25)}.jpg`;
  const description = pickItemFromList(descriptions);
  const likes = pickIntegerInRange(15, 200);
  const comment = createCommentStateList(pickIntegerInRange(0, 25));

  return {id, url, description, likes, comment};
};


//создаст список объектов фотографий
const createImageStateList = () => {
  const imagesList = Array.from({length: pickIntegerInRange(0, 30)}, createImageState);

  return imagesList;
};


createImageStateList();
