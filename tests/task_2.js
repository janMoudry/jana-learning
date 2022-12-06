const test_2 = (arrays) => {
  const solution = require("../Výsledky/task_2");
  const task = require("../Zadání/task_2");

  const array1 = solution(arrays);
  const array2 = task(arrays);

  if (array1.length !== array2.length) return "špatně";

  for (let index in solution) {
    if (array1[index] !== array2[index]) return "Špatně";
  }
  return "Správně";
};

const arrays1 = {
  array1: [2, 5, 4, 2, 4, 1, 6, 4, 8, 50],
  array2: [0, 1, 0, 4, 5, 5, 8, 4, 4],
  array3: [4, 5, 8, 4, "pes", 4, 9, 4],
};
const arrays2 = {
  array1: [5000, 5454545, 1587, 1267, 0, 545],
  array2: [4, 4, 4, 4, 4, 4, 4, 4],
  array3: ["kočka", 4, 5, 87, 5, 123],
};

console.log("\n\n\ntest 1 ", test_2(arrays1), "\n\n");
console.log("test 2 ", test_2(arrays2), "\n\n\n");
