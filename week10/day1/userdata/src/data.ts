const userIds = [
  {
    id: "b6809de6-1743-11ed-861d-0242ac120002",
  },
  {
    id: "b680a0b6-1743-11ed-861d-0242ac120002",
  },
  {
    id: "b680a1e2-1743-11ed-861d-0242ac120002",
  },
  {
    id: "b680a2fa-1743-11ed-861d-0242ac120002",
  },
  {
    id: "b680a3fe-1743-11ed-861d-0242ac120002",
  },
  {
    id: "b680a7c8-1743-11ed-861d-0242ac120002",
  },
  {
    id: "b680a8ea-1743-11ed-861d-0242ac120002",
  },
  {
    id: "b680aa0c-1743-11ed-861d-0242ac120002",
  },
  {
    id: "b680ab2e-1743-11ed-861d-0242ac120002",
  },
];

const listOfNames:string[] = [
  "sam",
  "john",
  "joe",
  "brandy",
  "andy",
  "blk",
  "ramen",
  "radDad",
  "Jason",
];

const usersToAssign = [
  { name: "user" },
  { name: "user" },
  { name: "user" },
  { name: "user" },
  { name: "user" },
  { name: "user" },
  { name: "user" },
  { name: "user" },
  { name: "user" },
];


type FormattedUser = {
    name: string,
    dept: string,
    id: string,
    createdAt: Date,
    updatedAt: Date,
    // userVerification: boolean
}

// assign IDs to users
const assignId = ():string => {
  return userIds[Math.floor(Math.random() * userIds.length-1)].id;
}

// replace all users with the name "user" to a random name generated
const giveNames = ():string => {
  for (let index = 0; index < usersToAssign.length; index++) {
    const randomIndex:number = Math.floor(Math.random() * listOfNames.length)
    const newName:string = listOfNames[randomIndex]
    listOfNames.splice(randomIndex, 1)
    usersToAssign[index].name = newName
  }
  return "did the thing"
}

giveNames()

const assignName = ():string => {
  return usersToAssign[Math.floor(Math.random() * usersToAssign.length - 1)].name;
}

// userVerifcation func
// I should be able to pass the name of the user and the id, and it should match one of these id's and the name should match one of the names in your list
// const userVerication = (id:string,name:string):boolean => {
// // check if the name is the name list
// // check if the id is in the id list
// // if it passes all test, it returns true, else false
//   if (usersToAssign.includes(name) && userIds.includes(id)) return true
//   return false
// }


// format the user to send to DB
const userToSend: FormattedUser = {
  name: assignName(),
  dept: "developer",
  id: assignId(),
  createdAt: new Date,
  updatedAt: new Date,
  // userVerification: userVerification( id, name),
};

// userVerifcation func
// I should be able to pass the name of the user and the id, and it should match one of these id's and the name should match one of the names in your list
// const userVerication = (id,name) => {
// // check if the name is the name list
// // check if the id is in the id list
// // if it passes all test, it returns true, else false
// }