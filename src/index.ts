interface Todo {
  id: number;
  content: string;
  completed: boolean;
  category: string;
  tags?: string[];
}

interface Kanban {
  id: number;
  order: number;
  title: string;
  todos: Todo[];
}

type CreateTodo = (todoInfo: {
  content: string;
  category: string;
  tags?: string[];
}) => Todo;

type GetTodos = () => Todo[];

type GetTodoById = (id: Todo['id']) => Todo;

type UpdateContent = (id: Todo['id'], content: Todo['content']) => Todo;

type UpdateCategory = (id: Todo['id'], category: Todo['category']) => Todo;

type UpdateTags = (id: Todo['id'], tags: Todo['tags']) => Todo;

type ToggleCompleted = (id: Todo['id']) => void;

type DeleteTodos = () => void;

type DeleteTodoById = (id: Todo['id']) => void;

type DeleteTagById = (id: Todo['id'], tag: string) => void;

type DeleteTagsById = (id: Todo['id']) => void;

type CreateKanban = (title: Kanban['title']) => Kanban;

type GetKanbans = () => Kanban[];

type UpdateKanbanOrder = (id: Kanban['id'], order: number) => void;

type UpdateKanbanTitle = (id: Kanban['id'], title: Kanban['title']) => void;

type UpdateKanbanTodo = (updateInfo: {
  baseId: Kanban['id'];
  targetId: Kanban['id'];
  todo: Todo;
}) => void;

type DeleteKanbanById = (id: Kanban['id']) => void;
