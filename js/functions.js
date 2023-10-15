//Функции для тренировки

//функция для проверки длины строки.
function checkString (string, x) {
  const result = (string.length <= x) ? 'true' : 'false';
  return result;
}

checkString('Строка для проверки', 20);

//Функция для проверки, является ли строка палиндромом.
function isPalindrom (string) {
  const strLowCase = string.toLowerCase();
  const strRepAll = strLowCase.replaceAll(' ', '');
  const strReverse = strRepAll.split('').reverse().join('');
  const result = (strRepAll === strReverse) ? 'true' : 'false';
  return result;
}

isPalindrom('Лёша на полке клопа нашёл ');

//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
function getNumber (string) {
  const result = string.replace(/\D/g, '');
  return parseInt(result, 10);
}

getNumber('2023 год');


/**
 * Добавит в начало строки символы новой строки.
 * В результате исходная строка достигнет заданной длинны.
 * @param {string} string
 * @param {number} minLength
 * @param {string} pad
 */
function padStart (string, minLength, pad) {
  const result = pad.repeat(minLength);

  return `${result}${string}`.slice(-minLength);
}

padStart('1', 2, '0');
