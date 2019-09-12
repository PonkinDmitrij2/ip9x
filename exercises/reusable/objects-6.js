'use strict';

/**
 * Creates a user.
 *
 * https://github.com/HowProgrammingWorks/Reusable/blob/master/Exercises.ru.md#%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B
 *
 * @param {string} name - User name.
 * @param {string} city - User city.
 * @returns {Object} User object.
 * @example
 *
 * createUser('Marcus Aurelius', 'Roma')
 * // => { name: 'Marcus Aurelius', city: 'Roma' }
 */
const createUser = (name, city) => ({ name, city });

console.log(createUser('Marcus Aurelius', 'Roma'));
