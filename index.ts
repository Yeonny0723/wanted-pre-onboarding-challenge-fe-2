/*
    Q. DB에 Admin을 추가해야하는 상황. 
    기존 User 타입만 있던 DB에 Admin을 어떻게 추가할 수 있을까?
    A. 기존 User 타입 혹은 새로운 Admin 타입 둘 중 하나를 만족시키는 타임으로 (1) Union Person 타입을 생성한다. 
       User 타입만 참조하던 (2) 코드에 Admin 타입이 들어올 수 있기에 인풋 타입을 Person으로 변경한다. 
*/

interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin; // --- (1)

export const persons: Person[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

export function logPerson(user: Person) {
  // --- (2)
  console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
