# ts-kanban

```javascript
Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
}

Kanban {
  아이디(required),
  제목(required),
  할일들: Todo[],
}
```
