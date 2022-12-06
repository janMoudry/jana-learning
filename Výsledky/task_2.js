/*
    Úloha 2

        zadání:
           Dostaneš 3 arraye. 

       Funkce vrátí array o 3 číslech ve stejném pořadí jak jsou array
        return [50, 3, 5]

        Pravidla:
        1. V 1. array najdeš nejvyšší číslo
        2. V 2. array řekneš kolikrát se tam opakuje číslo 4
        3. V 3. array najdeš text mezi čísli a vrátíš na jakém indexu se nachází

*/

const arrayMetods = ({ array1, array2, array3 }) => {
  let biggestNum = 0;
  let countNums = 0;
  let indexOfString = 0;

  array1.map((item) => {
    if (item > biggestNum) biggestNum = item;
  });

  array2.map((item) => {
    if (item === 4) countNums++;
  });

  array3.map((item, index) => {
    if (typeof item === "string") indexOfString = index;
  });

  return [biggestNum, countNums, indexOfString];
};

module.exports = arrayMetods;
