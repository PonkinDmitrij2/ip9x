'use strict';

// https://github.com/HowProgrammingWorks/Reusable/blob/master/Exercises.ru.md#%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D1%8B

const phoneDirectory = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Hunter Jason', phone: '+3802593787' },
  { name: 'David Ethan', phone: '+3803130144' },
  { name: 'Isaac Devin', phone: '+3803622020' },
  { name: 'Michael Nathaniel', phone: '+3802806889' },
  { name: 'Andrew Colin', phone: '+3803831708' },
];

/**
 * Finds a phone number by name.
 *
 * @param {Object[]} phoneBook - Phone book.
 * @param {string} name - Name.
 * @returns {string} Phone number found by name.
 */
const findPhoneByName = (phoneBook, name) => {
  const { phone } = phoneBook.find((item) => item.name === name);

  return phone;
};

console.log(findPhoneByName(phoneDirectory, 'Andrew Colin'));
