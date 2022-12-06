/*
    Úloha 0

        zadání:
            vytvoříš funkci, která vrátí 100 různých slov na základu čísla. 
            0 až 99 

        funkce vrátí array o objectech ve  kterých bude číslo a text

            Pravidla:
                1. Když bude číslo menší/rovno 20 (x <= 20) -> každé slovo bude začínat "f"
                2. když bude číslo větší 20 (x > 20) -> každé slovo bude začínat s "l"
                3. Když bude číslo sudé -> bude končit s "e"
                4. Když bude číslo liché -> bude končit s "o"
                5. Když bude číslo 42 -> slovo bude jen "god"
                6. Když bude číslo dělitelné 3 nebo 5 -> střed slova bude bar
                7. Když nebude číslo dělitelné 3 nebo 5 -> střed slova bude foo 
*/

const createWordsSolution = () => {
  const solutionArray = [];

  const connectLast = (currentString, index) => {
    if (index % 2) {
      return `${currentString}o`;
    } else {
      return `${currentString}e`;
    }
  };

  const connectStart = (currentString, index) => {
    if (index <= 20) {
      return connectLast(`f${currentString}`, index);
    } else {
      return connectLast(`l${currentString}`, index);
    }
  };
  for (let i = 0; i < 100; i++) {
    if (i === 42) {
      solutionArray.push("god");
    } else {
      if (i % 3 && i % 5) {
        solutionArray.push({ word: connectStart("foo", i), index: i });
      } else {
        solutionArray.push({ word: connectStart("bar", i), index: i });
      }
    }
  }

  return solutionArray;
};

// Zobrazení výsledku

module.exports = createWordsSolution;
