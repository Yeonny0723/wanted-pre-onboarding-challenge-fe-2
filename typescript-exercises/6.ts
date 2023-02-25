/*
  Q. person이 user이던 admin이던 필터링 할 수 있어야함. 

  Q. personType이 각 'user'인 경우와 'admin'인 경우 'type'을 제외한 속성을 받고, User[], Admin[]을 바로 리턴하도록 개발하자. 
  A. 오버로딩으로 구현. TS는 받는 인자는 다르되 같은 이름을 가진 함수를 여러게 정의할 수 있다. 
     이 기능을 추가하게된 맥락을 이해해보면, 나중에 type이 'user', 'admin'이 아닌 새로운 personType이 생성될 것을 고려해 personType이 string인 함수를 그대로 둔 것 같다. 
     (+추가: 동일한 이름을 공유하는 함수들은 여러개의 call signature와 하나의 Implementation을 갖는다!)

  Q. Person[]을 리턴하는 함수가 내부적으로 필터링 할 때, (1) 대신 criteria의 key를 반환하는 getObjectKeys함수를 개발하자. 
  A. (2) 개발. Object.keys는 key의 타입에 상관없이 문자열로 캐스팅한다. 원치 않는 캐스팅은 개발자의 의도를 거스르는 행위이므로. 
    본래의 타입을 그대로 갖도록 타입을 Generic <T>으로 받아오고, <T>에서 추출한 원래 key 타입을 (keyof) 리턴값으로 준다. 


  +추가 에러)
  (3)번 코드에서 "Argument of type 'T' is not assignable to parameter of type 'object'."라는 에러가 발생했다. 
  (3)-1번 <T> 제네릭 타임을 Object 타입으로 확장해주니 에러가 해결되었다. 
  어떤 차이가 있을깨?
  - 일반적으로 T는 undefined, null, string, number.. 어떤 값을 할당해도 문제 없다.
  - Object는 null과 undefined를 할당하지 못하도록 강제한다.
  T 타입은 컴파일 단계에서 결정이 나기 때문에, 그 전에 ts-checker가 T에 undefined|null이 할당된 경우 에러가 발생할 위험이 있음을 알려주는 코드이다!
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
  { type: "admin", name: "Jane Doe", age: 32, role: "Administrator" },
  { type: "user", name: "Kate Müller", age: 23, occupation: "Astronaut" },
  { type: "admin", name: "Bruce Willis", age: 64, role: "World saver" },
  { type: "user", name: "Wilson", age: 23, occupation: "Ball" },
  { type: "admin", name: "Agent Smith", age: 23, role: "Anti-virus engineer" },
];

export function logPerson(person: Person) {
  console.log(
    ` - ${person.name}, ${person.age}, ${
      person.type === "admin" ? person.role : person.occupation
    }`
  );
}

// *Task2* 함수 생성
function getObjectKeys<T extends Object>(criteria: T) {
  // (3)-1. <T> -> <T extends Object>
  // -- (2): (1)번 코드를 대신하는 함수
  return Object.keys(criteria) as (keyof T)[]; // 타입 캐스팅을 피해주기 위해 T에서 뽑은 key의 타입을 계속 가지도록 한다 -- (3)
}

export function filterPersons(
  persons: Person[],
  personType: "user",
  criteria: Partial<Omit<User, "type">>
): User[];
export function filterPersons(
  persons: Person[],
  personType: "admin",
  criteria: Partial<Omit<Admin, "type">>
): Admin[];

export function filterPersons(
  persons: Person[],
  personType: string,
  criteria: Partial<Person>
): Person[] {
  return persons
    .filter((person) => person.type === personType) // 여기서 Person 타입이 User인지 Admin인지 구분된 상태이므로, (1)처럼 아래 keyof로 유니온 타입을 만들어 줄 필요가 없어짐.
    .filter((person) => {
      // let criteriaKeys = Object.keys(criteria) as (keyof Person)[]; // --- (1) 타입 캐스팅. 개발자의 의도에 거스르는 행위!
      let criteriaKeys = getObjectKeys(criteria); // -- (1)번과 동일하게 동작하는 코드
      return criteriaKeys.every((fieldName) => {
        return person[fieldName] === criteria[fieldName];
      });
    });
}

export const usersOfAge23 = filterPersons(persons, "user", { age: 23 });
export const adminsOfAge23 = filterPersons(persons, "admin", { age: 23 });

console.log("Users of age 23:");
usersOfAge23.forEach(logPerson);

console.log();

console.log("Admins of age 23:");
adminsOfAge23.forEach(logPerson);
