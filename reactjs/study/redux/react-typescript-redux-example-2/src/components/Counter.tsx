import * as React from 'react';

interface IProps {
  value: number;
  onIncrement(): void;
  onDecrement(): void;
}

const Counter: React.SFC<IProps> = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h2>카운터</h2>
    <h3>{value}</h3>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

export default Counter;