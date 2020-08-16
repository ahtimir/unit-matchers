/* eslint-disable linebreak-style */

import sortHeroes from '../match';

test('match toEqual test (Deep Equality)', () => {
  const squad = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const squadSorted = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const sorted = sortHeroes(squad);
  expect(sorted).toEqual(squadSorted);
});

/*
test('match toBe test', () => {
  const squad = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const squadSorted = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const sorted = sortHeroes(squad);
  expect(sorted).toBe(squadSorted);
});
*/
