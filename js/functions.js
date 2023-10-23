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

/*
'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах

имяФункции('08:00', '17:30', '14:00', 90); // true
имяФункции('8:0', '10:0', '8:0', 120);     // true
имяФункции('08:00', '14:30', '14:00', 90); // false
имяФункции('14:00', '17:30', '08:0', 90);  // false
имяФункции('8:00', '17:30', '08:00', 900); // false
*/
const calculatePossibility = (startOfWorkingDay, endOfWorkingDay, startOfMeeting, meetingDuration) => {

  const durationOfWorkingDay = (parseInt(endOfWorkingDay, 10) * 60) - (parseInt(startOfWorkingDay, 10) * 60);
  if (durationOfWorkingDay < meetingDuration) {
    return false;
  }
  const endOfMeeting = (parseInt(startOfMeeting, 10) * 60) + meetingDuration;
  if (endOfMeeting > durationOfWorkingDay) {
    return false;
  }

  return true;

};

calculatePossibility ();
