import {pickItemFromList, pickIntegerInRange, createIdGeneration} from './util.js';

const descriptions = [
  'описание 1',
  'описание 2',
  'описание 3',
  'описание 4',
  'описание 5',
  'описание 6',
  'описание 7',
  'описание 8'
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


const generateCommentId = createIdGeneration();
//создаст объект комментария
const createCommentState = () => {
  const id = generateCommentId(1, 30);
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


const generatePhotoId = createIdGeneration();
//создаст объект фотографии
const createImageState = () => {
  const id = generatePhotoId(1, 25);
  const url = `photos/${pickIntegerInRange(1, 25)}.jpg`;
  const description = pickItemFromList(descriptions);
  const likes = pickIntegerInRange(15, 200);
  const comments = createCommentStateList(pickIntegerInRange(0, 30));

  return {id, url, description, likes, comments};
};

//создаст список объектов фотографий
const createImageStateList = () => {
  const imagesList = Array.from({length: 25}, createImageState);

  return imagesList;
};

export {createImageStateList};
