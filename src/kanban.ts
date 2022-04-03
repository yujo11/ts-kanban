import { Kanban, KanbanList } from "../@types/kanban"
import { Todo } from "../@types/todo"
import * as T from "./todo"

const kanbanList: KanbanList = []

export function getKanbanById(kanbanId: Kanban["id"]): Kanban {
  return kanbanList.find((kanban) => kanban.id === kanbanId)
}

export function createKanban(
  createProperties: Partial<Omit<Kanban, "id">>
): Kanban {
  const kanban: Kanban = {
    id: Date.now(),
    title: createProperties.title,
    todoList: [],
  }

  return kanban
}

export function addKanbanToList(kanban: Kanban): KanbanList {
  kanbanList.push(kanban)

  return kanbanList
}

export function getKanbanList(): KanbanList {
  return kanbanList
}

export function initKanbanList(): KanbanList {
  const kanbanList: KanbanList = [createKanban({ title: "Archive" })]

  return kanbanList
}

export function swapKanbanOrder(
  kanbanId1: Kanban["id"],
  kanbanId2: Kanban["id"]
): KanbanList {
  const kanban1: Kanban = getKanbanById(kanbanId1)
  const kanban2: Kanban = getKanbanById(kanbanId2)

  const kanbanList: KanbanList = getKanbanList()

  const kanban1Index: number = kanbanList.indexOf(kanban1)
  const kanban2Index: number = kanbanList.indexOf(kanban2)

  kanbanList[kanban1Index] = kanban2
  kanbanList[kanban2Index] = kanban1

  return kanbanList
}

export function updateKanbanTitle(
  kanbanId: Kanban["id"],
  title: Kanban["title"]
): KanbanList {
  const kanban: Kanban = getKanbanById(kanbanId)

  kanban.title = title

  return kanbanList
}

export function moveTodoToKanban(
  kanbanId: Kanban["id"],
  todoId: Todo["id"],
  destinationKanbanId: Kanban["id"]
): KanbanList {
  const kanban: Kanban = getKanbanById(kanbanId)
  const destinationKanban: Kanban = getKanbanById(destinationKanbanId)
  const todo: Todo = getTodoById(todoId)

  kanban.todoList.splice(kanban.todoList.indexOf(todo), 1)
  destinationKanban.todoList.push(todo)

  return kanbanList
}

export function deleteKanbanById(kanbanId: Kanban["id"]): Kanban {
  const kanban: Kanban = getKanbanById(kanbanId)

  const kanbanList: KanbanList = getKanbanList()

  const kanbanIndex: number = kanbanList.indexOf(kanban)

  kanbanList.splice(kanbanIndex, 1)

  return kanban
}

export function addTodoListoToKanban(
  kanbanId: Kanban["id"],
  todoList: Todo[]
): KanbanList {
  const kanban: Kanban = getKanbanById(kanbanId)

  kanban.todoList = todoList

  return kanbanList
}

export function deleteKanbanAndMoveTodoListToArchive(
  kanbanId: Kanban["id"]
): KanbanList {
  const kanban: Kanban = deleteKanbanById(kanbanId)

  const kanbanList: KanbanList = getKanbanList()

  const kanbanIndex: number = kanbanList.indexOf(kanban)

  kanbanList.splice(kanbanIndex, 1)

  return kanbanList
}

function getTodoById(todoId: string): Todo {
  throw new Error("Function not implemented.")
  //TODO 확인 후 구현 필요
}
