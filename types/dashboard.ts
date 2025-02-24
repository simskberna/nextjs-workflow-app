export type TaskStatus = "TO_DO" | "IN_PROGRESS" | "COMPLETED" | "BLOCKED" | "ON_HOLD";
export type Task = {
  id: string;
  status: TaskStatus;
  title: string;
  tag: string;
};
export type Board = {
  title:string;
  isActive:boolean;
}
export type Column = {
  id: string;
  title: string;
};
