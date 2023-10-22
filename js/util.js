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
/*
//функия для генерации рандомного id в указанном диапозоне без повторений
const createIdGeneration = (a, b) => {
  const previousId = [];
  return function () {
    let currentId = pickIntegerInRange(a, b);
    if (previousId.length === Math.floor(Math.max(a, b))) {
      return '';
    }
    while (previousId.includes(currentId)) {
      currentId = pickIntegerInRange(a, b);
    }
    previousId.push(currentId);
    return previousId;
  };
};
/*
const generateRandomIndex = (a, b) => {
  const indexNumbers = [];
  return () => {
      console.log(indexNumbers)
    let currentIndex = getRandomInteger(a, b);
    if (indexNumbers.length === Math.floor(Math.max(a, b))) {
      return '';
    }
    while (indexNumbers.includes(currentIndex)) {
      currentIndex = getRandomInteger(a, b);
    }
    indexNumbers.push(currentIndex);
    return currentIndex;
  };
};
*/
const createIdGeneration = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    if (lastGeneratedId > 30) {
      lastGeneratedId = 1;
    }
    return lastGeneratedId;
  };
};

export {pickItemFromList, pickIntegerInRange, createIdGeneration};
