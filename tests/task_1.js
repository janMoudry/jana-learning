const task_1_test = () => {
  const solution = require("../Výsledky/task_1");
  const task = require("../Zadání/task_1");

  return solution().toLowerCase() === task().toLowerCase()
    ? "Správně"
    : "Špatně";
};

console.log("\n\n\n\n", task_1_test(), "\n\n\n\n\n");
