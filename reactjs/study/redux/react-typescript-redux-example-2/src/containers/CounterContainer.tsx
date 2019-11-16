import * as React from 'react';
import Counter from 'components/Counter';
import { actionCreators as counterActions } from 'store/modules/counter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IStoreState } from 'store/modules';

export interface IProps {
  value: number;
  CounterActions: typeof counterActions;
};

class CounterContainer extends React.Component<IProps> {
  onIncrement = () => {
    const { CounterActions } = this.props;
    CounterActions.increment();
  }
  onDecrement = () => {
    const { CounterActions } = this.props;
    CounterActions.decrement();
  }
  render() {
    const { onIncrement, onDecrement } = this;
    const { value } = this.props;
    return (
      <Counter
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        value={value}
      />
    );
  }
}

export default connect(
  ({ counter }: IStoreState) => ({
    value: counter.value
  }),
  (dispatch) => ({
    CounterActions: bindActionCreators(counterActions, dispatch)
  })
)(CounterContainer);