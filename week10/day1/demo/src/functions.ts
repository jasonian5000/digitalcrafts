// functions
// () => {}
// parameters, arguments, body, name, return value

const returnTwelve = (): number => {
  return 12;
};

const returnNumberArray = (): number[] => {
  return [1, 2, 3, 4];
};

const parsePassword = (password: string): boolean => {
  if (password) {
    let compare = "";
    return true;
  } else {
    return false;
  }
};

const calcIncomeTax = (salary: number, state?: string): number => {
  if (state) {
    const total = salary * 1.3;
    return total * 1.2;
  }
  if (salary > 120_000) return salary * 1.3;
  return salary * 1.25;
};
