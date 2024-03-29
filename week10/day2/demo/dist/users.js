"use strict";
const Stacy = {
    name: "Stacy",
    chatty: true,
    cohort: "Full time",
    instructor: "Joe",
    employed: false,
    ta: "Violet",
};
const Amanda = {
    name: "Amanda",
    chatty: false,
    cohort: "Full time",
    instructor: "Joe",
    employed: false,
    ta: "Violet",
    typingSpeed: 9000,
    jobOffers: "Google",
    algoProficiency: "master",
};
const celebrateStudent = (student) => {
    const employmentStatus = student.employed ? "Employed" : "Unemployed";
    const message = `
    I'm celebrating ${student.name}
    They are part of the ${student.cohort} cohort
    They are currently ${employmentStatus}
    `;
    return message;
};
console.log(celebrateStudent(Amanda));
