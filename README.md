# 원티드 프론트엔드 2023-2월 챌린지 - Typescript

### 결과물 & 배운점

(1) JS DOC 설계

소스코드 파일에 주석을 달기 위해 사용하는 JS Doc 마크업 언어를 사용해서,
사용되는 모든 함수의 선언부만 만들어 타입크스립트처럼 코딩하는 연습을 하였습니다.
'타입 안정성'의 효과를 '설계'의 관점에서 느낄 수 있는 연습이었습니다.

> [🔗 JsDoc](https://yeonny0723.github.io/wanted-pre-onboarding-challenge-fe-2/ToDoList.html)

(2) TS 설계

JSDoc의 함수 설명서에 따라 타입을 설계하는 연습을 하였습니다.

> [🔗 타입설계](https://github.com/Yeonny0723/wanted-pre-onboarding-challenge-fe-2/blob/master/src/index.d.ts)

(3) Type 구현

타입을 설계한대로 구현하는 연습을하였습니다.

> [🔗 타입구현](https://github.com/Yeonny0723/wanted-pre-onboarding-challenge-fe-2/blob/master/src/index.ts)

(4) TS 연습

Typescript-exercises 문제를 1-9번까지 풀며 요구사항을 구현하기 위해 어떤 타입 에러가 발생하였고, 어떻게 해결할 수 있는지 기록하였습니다.
원본 문제는 각 파일 History에서 확인하실 수 있습니다.

* [Q1](/typescript-exercises/1.ts) - fix (2023.02.25.)
* [Q2](/typescript-exercises/2.ts) - fix (2023.02.25.)
* [Q3](/typescript-exercises/3.ts) - fix (2023.02.25.)
* [Q4](/typescript-exercises/4.ts) - fix (2023.02.25.)
* [Q5](/typescript-exercises/5.ts) - fix (2023.02.25.)
* [Q6](/typescript-exercises/6.ts) - fix (2023.02.25.)
* [Q7](/typescript-exercises/7.ts) - fix (2023.02.25.)
* Step8- ready
* Step9- ready
* Step10 - ready
* Step11 - ready
* Step12 - ready
* Step13 - ready
* Step14 - ready
* Step15 - ready



### 요구사항

> [🔗 사전미션](https://gist.github.com/pocojang/3c3d4470a3d2a978b5ebfb3f613e40fa)

아래 미션 요구사항을 참고하여, To Do List의 뼈대만 선언하는 과제였습니다.

```js
Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
}
```

#### CREATE

- [x] 할 일을 추가할 수 있다.
- [x] 내용없이 추가할 수 없다.

#### READ

- [x] 모든 할 일을 조회할 수 있다.
- [x] ID를 기반으로 특정 할 일을 조회할 수 있다.

#### UPDATE

- [x] ID를 제외한 모든 속성을 수정할 수 있다.
- [x] 특정 할 일의 특정 태그를 수정할 수 있다.

#### DELETE

- [x] ID를 기반으로 특정 할 일을 삭제할 수 있다.
- [x] 모든 할 일을 제거할 수 있다.
- [x] 특정 할 일의 특정 태그를 삭제할 수 있다.
- [x] 특정 할 일의 모든 태그를 제거할 수 있다.


#### Reference

- [jsdoc.app](https://jsdoc.app)
