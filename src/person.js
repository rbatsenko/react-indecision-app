console.log('person.js is running');

export const isAdult = (age) => age >= 18;

const isSenior = (age) => age >= 65;

export { isSenior as default };