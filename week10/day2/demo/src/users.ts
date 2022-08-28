type Student = {
  readonly name: string;
  chatty: boolean;
  cohort: "Full time" | "Part time";
  instructor: "Joe";
  employed: boolean;
  ta: "Violet" | "Rayleigh";
};

type ProStudent = Student & {
  typingSpeed: 9000;
  jobOffers: "Google" | "Meta" | "Microsoft" | "Apple";
  algoProficiency: "master";
};

const Stacy: Student = {
  name: "Stacy",
  chatty: true,
  cohort: "Full time",
  instructor: "Joe",
  employed: false,
  ta: "Violet",
};

const Amanda: ProStudent = {
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

const celebrateStudent = (student: Student | ProStudent):string => {
    const employmentStatus = student.employed ? "Employed" : "Unemployed"
    const message:string = `
    I'm celebrating ${student.name}
    They are part of the ${student.cohort} cohort
    They are currently ${employmentStatus}
    `
    return message
}

console.log(celebrateStudent(Amanda))