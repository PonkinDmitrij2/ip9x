'use strict';

const hash = {
  'Marcus Aurelius': '+380445554433',
  'Hunter Jason': '+3802593787',
  'David Ethan': '+3803130144',
  'Isaac Devin': '+3803622020',
  'Michael Nathaniel': '+3802806889',
  'Andrew Colin': '+3803831708',
};

/**
 * Finds a phone number by name.
 *
 * @param {string} name Name.
 * @returns {string} Phone number found by name.
 */
const findPhoneByName = (name) => hash[name];

console.log(findPhoneByName('Isaac Devin'));
