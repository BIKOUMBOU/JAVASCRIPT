/*
 fonction : categorieAge
 données : age entier
 résultat : ?
 */
function categorieAge(age) {
  let categorie = "";
  if (age === 6 || age === 7) {
    categorie = "Poussin";
  }
  if (age === 8 || age === 9) {
    categorie = "Pupille";
  }
  if (age === 10 || age === 11) {
    categorie = "Minime";
  }
  if (age >= 12) {
    categorie = "Cadet";
  }
  return categorie;
}
console.log("6-7   ans " + categorieAge(6));
console.log("8-9   ans " + categorieAge(9));
console.log("10-11 ans " + categorieAge(11));
console.log("12+   ans " + categorieAge(12));

/*
 fonction : initTableauHasard
 données : ?
 résultat : ?
 */
const BORNE_MAX = 100;
function initTableauHasard() {}
// let tab = initTableauHasard(?);
// console.log(tab);

/*
fonction : identique
données : ?
resultat : ?
*/
function identique() {}
/*
fonction : presente
données : ?
resultat : ?
*/
function presente() {}

const tableau = [12, 23, 12];
console.log(presente(tableau));
