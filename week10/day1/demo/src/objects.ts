// let user: object = {
//     name: "joe"
// }
// this works but it sucks
// let user: {
//   name: string;
// } = {
//   name: "joe",
// };

// type alias
// type User = {
//   name: string;
//   username: string;
//   readonly age: number;
//   // prevents from being reassigned
//   emailAddress?: string;
//   // adding a question mark makes it optional
//   [k: string]: any;
//   // this allows you to add yet undefined key:values
// };

// let amanda: User = {
//     name: "Amanda",
//     username: "lizardgurl52xd",
//     age: 20,
//     emailAddress: "lizardsrox@yahoo.com"
// }

type Carpenter = {
  companyName: string;
  readonly id: number;
};

let listOfCarpenters: Carpenter[] = [];
//will only receive carpenters that meet the requirement datatype

type Password = {
  password: string | number;
  securityClearance: "Basic" | "Top Secret";
};

type SoftwareEngineer = {
  readonly id: number;
  password: Password;
};

const blke: SoftwareEngineer = {
  id: 1234,
  password: {
    password: 38473847,
    securityClearance: "Basic",
  },
};

type User = {
  id: number;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

// type MasterUser = {
//   id: number;
//   password: string;
//   email: string;
//   createdAt: Date;
//   updatedAt: Date;
//   clearanceLevel: "basic" | "top secret";
// };
// easier way to add a type using existing type
type MasterUser = User & {
    clearanceLevel: "basic" | "top secret"
}

const listOfUsers: User[] | MasterUser[] = [];
