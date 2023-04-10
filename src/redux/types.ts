export type Todo = {
	id: number;
	title: string;
	description: string;
};
export interface State {
	id: number;
	todos: Todo[];
}
