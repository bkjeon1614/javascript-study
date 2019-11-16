import { createAction, handleActions } from 'redux-actions';

const DECREMENT = 'counter/DECREMENT';
const INCREMENT = 'counter/INCREMENT';

export const actionCreators = {
  decrement: createAction(DECREMENT),
  increment: createAction(INCREMENT),
};

export interface ICounterState {
  value: number;
}

const initialState: ICounterState = {
  value: 0
};

export default handleActions<ICounterState>(
  {
    [INCREMENT]: (state) => ({ value: state.value + 1 }),
    [DECREMENT]: (state) => ({ value: state.value - 1 }),
  }, 
  initialState
);