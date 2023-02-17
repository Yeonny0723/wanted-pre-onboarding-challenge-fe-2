// 설계
export interface IToDoItem {
  toDoId: number;
  content: string;
  isCompleted: boolean;
  category: string;
  tags: ITag[];
}

export interface ITag {
  tagId: number;
  content: string;
}

export interface IToDoList {
  create(content: string, category: string): void;
  createTagsByToDoId(toDoId: number, ...tags: string[]): void;
  read(): IToDoItem[];
  updateContent(toDoId: number, content: string): void;
  updateIsCompleted(toDoId: number): void;
  updateCategory(toDoId: number, category: string): void;
  updateTag(toDoId: number, tagId: number, tag: string): void;
  deleteById(toDoId: number): void;
  deleteTagByToDoId(toDoId: number, tagId: number): void;
  deleteAllTagsByToDoId(toDoId: number): void;
  deleteAll(): void;
}
