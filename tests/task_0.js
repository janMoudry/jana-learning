const tests = () => {
  const createWordsSolution = require("../Výsledky/task_0");
  const createWords = require("../Zadání/task_0");

  const test = createWordsSolution();
  const solution = createWords();

  for (let index in test) {
    if (solution.length < 100) return "špatně";
    if (test.word[index] !== solution.word[index]) {
      return "Špatně";
    }
    return "Správně";
  }

  return test;
};

console.log("\n\n\n\n", tests(), "\n\n\n\n");
