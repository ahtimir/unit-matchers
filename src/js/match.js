/* eslint-disable linebreak-style */

export default function sortHeroes(heroes) {
  heroes.sort((a, b) => b.health - a.health);
  return heroes;
}
