import counter, { ICounterState } from './counter';
import { combineReducers } from 'redux';
import todos, { TodosState } from './todos';

export default combineReducers({
  counter,
  todos
});

// 스토어의 상태 타입 정의
export interface IStoreState {
  counter: ICounterState;
  todos: TodosState;
}