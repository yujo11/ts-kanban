import { Todo } from '../todo';

export interface Kanban {
  id: number;
  title: string;
  todoList: Todo[];
}

export type KanbanList = Kanban[];
export type CreateKanban = Partial<Omit<Kanban, 'id'>>;

export const kanbanList: KanbanList;
export const archiveId: Kanban['id'];

// Helper Functions
// declare function createKanbanId(): Kanban['id']; // util.ts uid() 함수 사용
export function getKanbanById(kanbanId: Kanban['id']): Kanban;


// CREATE
  // 칸반을 만들 수 있다.
export function createKanban(createProperties: CreateKanban): Kanban;
  // 칸반을 추가할 수 있다.
export function addKanbanToList(kanban: Kanban): KanbanList


// READ
  // 항상 칸반은 전체 조회된다.
export function getKanbanList(): KanbanList;
  // 가장 우측에는 Archive 칸반이라는 지정되지 않은 할 일 보관소가 상시 존재한다
    // kanbanList = [createKanban('Archive', T.getTodoList())];
  // 초기에는 ID를 기반으로 칸반이 가로 정렬된다.
export function initKanbanList(): KanbanList;


// UPDATE
  // 칸반의 가로 순서를 변경할 수 있다.
export function swapKanbanOrder(kanbanId1: Kanban['id'], kanbanId2: Kanban['id']): KanbanList;
  // 칸반의 제목을 변경할 수 있다.
export function updateKanbanTitle(updateKanbanId: Kanban['id'], title: Kanban['title']): KanbanList;
  // 칸반이 가지고 있는 할 일을 1개씩 다른 칸반으로 옮길 수 있다.
export function moveTodoToKanban(tagetKanbanId: Kanban['id'], targetTodoId: Todo['id'], destinationKanbanId: Kanban['id']): KanbanList; 

// DELETE
  // 모든 할 일이 제거되더라도 기존 칸반이 제거되지는 않는다.
  // ID를 기반으로 특정 칸반을 1개씩 삭제할 수 있다.
export function deleteKanbanById(deleteKanbanId: Kanban['id']): Kanban; 
  // 삭제된 칸반의 기존 할 일은 모두 Archive칸반으로 이동한다.
export function addTodoListToKanban(kanbanId: Kanban['id'], todoList: Todo[]): KanbanList; 
export function deleteKanbanAndMoveTodoListToArchive(deleteKanbanId: Kanban['id']): KanbanList;

