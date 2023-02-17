import { IToDoItem, ITag, IToDoList } from "./index.d";

class ToDoList implements IToDoList {
  private toDoList: IToDoItem[] = [];
  private toDoId = 0;
  private tagId = 0;

  private inputValidator(input: string) {
    if (input.trim() == "") {
      throw new Error("Input string can't be empty.");
    }
    return input;
  }

  private findToDoIndex(toDoId: number) {
    const idx = this.toDoList.findIndex((toDo) => toDo.toDoId === toDoId);
    if (idx == -1) {
      throw new Error(`No To Do item with index ${idx} found.`);
    }
    return idx;
  }

  private findTagIndex(toDo: IToDoItem, tagId: number) {
    const idx = toDo.tags.findIndex((tag) => tag.tagId === tagId);
    if (idx == -1) {
      throw new Error(`No Tag with index ${idx} found.`);
    }
    return idx;
  }

  create(content: string, category: string) {
    const newToDo: IToDoItem = {
      toDoId: this.tagId,
      content: this.inputValidator(content),
      isCompleted: false,
      category: category,
      tags: [],
    };
    this.toDoId++;
    this.toDoList.push(newToDo);
  }

  createTagsByToDoId(toDoId: number, ...tags: string[]) {
    for (let i = 0; i < tags.length; i++) {
      const newTag: ITag = {
        tagId: this.tagId,
        content: this.inputValidator(tags[i]),
      };
      this.tagId++;
      this.toDoList[toDoId].tags?.push(newTag);
    }
  }

  read(): IToDoItem[] {
    return this.toDoList;
  }

  updateContent(toDoId: number, content: string) {
    const index = this.findToDoIndex(toDoId);
    this.toDoList[index].content = this.inputValidator(content);
  }
  updateIsCompleted(toDoId: number) {
    const index = this.findToDoIndex(toDoId);
    const toDo = this.toDoList[index];
    this.toDoList[toDoId].isCompleted = !toDo.isCompleted;
  }
  updateCategory(toDoId: number, category: string) {
    const index = this.findToDoIndex(toDoId);
    this.toDoList[index].category = category;
  }
  updateTag(toDoId: number, tagId: number, tag: string) {
    const toDoIdx = this.findToDoIndex(toDoId);
    const toDo = this.toDoList[toDoIdx];
    const tagIdx = this.findTagIndex(toDo, tagId);
    this.toDoList[toDoIdx].tags[tagIdx].content = tag;
  }
  deleteById(toDoId: number) {
    const index = this.findToDoIndex(toDoId);
    const filteredToDoLst = this.toDoList.filter(
      (toDo) => toDo.toDoId !== index
    );
    this.toDoList = filteredToDoLst;
  }
  deleteTagByToDoId(toDoId: number, tagId: number) {
    const toDoIdx = this.findToDoIndex(toDoId);
    const toDo = this.toDoList[toDoIdx];
    const tagIdx = this.findTagIndex(toDo, tagId);
    const filteredTagLst = toDo.tags?.filter((tag) => tag.tagId !== tagId);
    return filteredTagLst;
  }
  deleteAllTagsByToDoId(toDoId: number) {
    const index = this.findToDoIndex(toDoId);
    this.toDoList[index].tags = [];
  }
  deleteAll() {
    this.toDoList = [];
  }
}

const toDoList = new ToDoList();
toDoList.create("프리온보딩 3일차 정리", "Must");
toDoList.create("블로그 포스팅 정리", "Must");
toDoList.create("알고리즘 문제 풀이 정리", "Must");
toDoList.createTagsByToDoId(0, "태그1.1");
toDoList.createTagsByToDoId(1, "태그2.1", "태그2.2");
toDoList.createTagsByToDoId(2, "태그3.1", "태그3.2", "태그3.3");
toDoList.updateContent(0, "프리온보딩 3일차 복습");
toDoList.updateIsCompleted(0);
toDoList.updateCategory(0, "Moderate");
toDoList.updateTag(0, 0, "태그업데이트");
toDoList.deleteById(0);
toDoList.deleteTagByToDoId(1, 1);
toDoList.deleteAllTagsByToDoId(2);
toDoList.deleteAll();
