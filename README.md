# 원티드 프론트엔드 2023-2월 챌린지 - Typescript

### 배운점

> [🔗 구현링크](https://yeonny0723.github.io/wanted-pre-onboarding-challenge-fe-2/ToDoList.html)

소스코드 파일에 주석을 달기 위해 사용하는 JS Doc 마크업 언어를 사용해서,
사용되는 모든 함수의 선언부만 만들어 타입크스립트처럼 코딩하는 연습을 하였습니다.
'타입 안정성'의 효과를 '설계'의 관점에서 느낄 수 있는 연습이었습니다.

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

#### Modeling (Shape)

```js
Item {
  property(required),
  property(optional),
}
```

#### Reference

- [jsdoc.app](https://jsdoc.app)
