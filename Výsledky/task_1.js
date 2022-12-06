/*
    Úloha 1

        zadání:
            vyttvoříš funkci, která vrátí den, co je dnes

        funkce vrátí string dne
            "středa"

*/

const whatDayToday = () => {
  const day = new Date().getDay();

  switch (day) {
    case 1:
      return "pondělí";
    case 2:
      return "úterý";
    case 3:
      return "středa";
    case 4:
      return "čtvrtek";
    case 5:
      return "pátek";
    case 6:
      return "sobota";
    case 7:
      return "neděle";
  }
};

module.exports = whatDayToday;
