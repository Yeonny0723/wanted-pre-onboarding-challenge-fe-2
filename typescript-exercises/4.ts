/*
    Q. User 타입인지 Admin 타입인지 점검하는 로직이 외부 함수에 의존하는 경우, TS는 여전히 오브젝트 내에서 없을 수 있는 속성을 꺼내려는 시도를 제한하게됩니다. 
    A. Type Predicate (타입 명제)를 사용해, 유효한 스포크 내 좁혀진 타입을 사용할 수 있습니다. 
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
];

export function isAdmin(person: Person): person is Admin {
  // 반환값을 person is Admin로 초기화.
  return person.type === "admin";
  // **Type Predicate (타입 명제)
  // return 값이 true라면,
  // TS는 위 반환값을 자동으로 true라고 인식하게 함
  // 그렇다면 이 결과값이 사용된 유효한 스코프 내에서는 person을 Admin 타입으로 좁힐 수 있게된다.
}

export function isUser(person: Person): person is User {
  return person.type === "user";
}

export function logPerson(person: Person) {
  let additionalInformation: string = "";
  if (isAdmin(person)) {
    additionalInformation = person.role;
  }
  if (isUser(person)) {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log("Admins:");
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log("Users:");
persons.filter(isUser).forEach(logPerson);
