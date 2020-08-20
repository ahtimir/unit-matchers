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

test('match  test (even health)', () => {
  const squad = [
    { name: 'мечник', health: 50 },
    { name: 'маг', health: 50 },
    { name: 'лучник', health: 50 },
  ];
  const squadSorted = [
    { name: 'мечник', health: 50 },
    { name: 'маг', health: 50 },
    { name: 'лучник', health: 50 },
  ];
  const sorted = sortHeroes(squad);
  expect(sorted).toEqual(squadSorted);
});

test('match toEqual test (7 person squad)', () => {
  const squad = [
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 10 },
    { name: 'мечник', health: 20 },
    { name: 'рыцарь', health: 60 },
    { name: 'вор', health: 50 },
    { name: 'паладин', health: 40 },
    { name: 'нежить', health: 90 },
  ];
  const squadSorted = [
    { name: 'нежить', health: 90 },
    { name: 'лучник', health: 80 },
    { name: 'рыцарь', health: 60 },
    { name: 'вор', health: 50 },
    { name: 'паладин', health: 40 },
    { name: 'мечник', health: 20 },
    { name: 'маг', health: 10 },
  ];
  const sorted = sortHeroes(squad);
  expect(sorted).toEqual(squadSorted);
});

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
  expect(sorted).not.toBe(squadSorted);
});
