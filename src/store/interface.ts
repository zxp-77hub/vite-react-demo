export interface ITodoInfo {
  id: string;
  text: string;
  isDone: boolean;
}
export type ITodoList = Array<ITodoInfo|any>;