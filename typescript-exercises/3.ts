/*
    Q3. 앞 Q2에서 기존 User 타입이 유니온 타입의 Person 타입으로 변경되며 
        각 타입 별 확실히 존재하지 않는 속성을 꺼내려할 때 에러가 발생함. 
    A3. (2) person.role과 같이 속성을 바로 꺼내려는 시도 대신, 속성이 객체 내 존재하는("role" in person) 조건을 줄 수 있다. 
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

export type Person = User | Admin;

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

export function logPerson(person: Person) {
  let additionalInformation: string;
  if ("role" in person) {
    // --- (1)
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
