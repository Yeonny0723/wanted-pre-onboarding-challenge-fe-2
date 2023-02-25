/*
  Q. type을 제외한 유저의 속성으로 필터링하는 기능을 구현하려고 합니다. Type structures를 복제/변형하지 않고 가능한 방법이 무엇인가요?
  A. 
    (1) 속성 'type'을 제외한 나머지 타입의 부분 집합에 대한 타입: Partial<Omit<User, 'type'>>. 
    Omit 유틸리티 타입을 활용하면, 특정 속성을 일시 배제함으로써 반드시 필요한 속성만 남길 수 있습니다. 
    Partial 유틸리티 타입을 활용하면, 대상 속성들을 optional로 처리해 부분 타입 집합으로 사용할 수 있습니다. 

    (2) 속성 'type'을 제외한 나머지 속성을 배열로 받는 경우의 타입 설정: Object.keys(criteria) as (keyof Omit<User, "type">)[];
    keyof 연산자를 활용해 객체 구조의 타입을 모두 뽑아 유니온 타입으로 만들어줄 수 있습니다. eg. string | number
*/

interface User {
  type: "user";
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: "admin";
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    type: "user",
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    type: "admin",
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    type: "user",
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    type: "admin",
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
  {
    type: "user",
    name: "Wilson",
    age: 23,
    occupation: "Ball",
  },
  {
    type: "admin",
    name: "Agent Smith",
    age: 23,
    role: "Administrator",
  },
];

export const isAdmin = (person: Person): person is Admin =>
  person.type === "admin";
export const isUser = (person: Person): person is User =>
  person.type === "user";

export function logPerson(person: Person) {
  let additionalInformation = "";
  if (isAdmin(person)) {
    additionalInformation = person.role;
  }
  if (isUser(person)) {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

export function filterUsers(
  persons: Person[],
  criteria: Partial<Omit<User, "type">>
): User[] {
  // --- (1) "type" 속성을 제외한 속성의 모든 조합이 들어올 수 있도록 제한.
  return persons.filter(isUser).filter((user) => {
    const criteriaKeys = Object.keys(criteria) as (keyof Omit<User, "type">)[]; // as: 타입 단언. 추론한 타입이 있더라도 as로 강제 -- (2)
    return criteriaKeys.every((fieldName) => {
      // keyof: 객체 구조의 타입을 모두 뽑아 유니온 타입으로 만들어주는 연산자 | typeof: 객체 데이터에서 객체 구조 타입을 뽑아주는 연산자
      return user[fieldName] === criteria[fieldName];
    });
  });
}

console.log("Users of age 23:");

filterUsers(persons, {
  age: 23,
}).forEach(logPerson);
