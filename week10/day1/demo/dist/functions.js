"use strict";
// functions
// () => {}
// parameters, arguments, body, name, return value
const returnTwelve = () => {
    return 12;
};
const returnNumberArray = () => {
    return [1, 2, 3, 4];
};
const parsePassword = (password) => {
    if (password) {
        let compare = "";
        return true;
    }
    else {
        return false;
    }
};
const calcIncomeTax = (salary, state) => {
    if (state) {
        const total = salary * 1.3;
        return total * 1.2;
    }
    if (salary > 120000)
        return salary * 1.3;
    return salary * 1.25;
};
