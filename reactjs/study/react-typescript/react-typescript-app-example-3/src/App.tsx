import * as React from 'react';
import './App.css';

interface IAppProps {
  name: string;
  company?: string;
}

interface IAppState {
  age: number;
}

class App extends React.Component<IAppProps, IAppState> {
  static defaultProps = {
    company: 'Studio XID'
  };
  constructor(props: IAppProps) {
    console.log('App constructor');
    super(props);
    this.state = {
      age: 35
    };
    this._rollback = this._rollback.bind(this);
  }

  componentWillMount() {
    console.log('App componentWillMount');
  }
  componentDidMount() {
    console.log('App componentDidMount');
    setInterval(() => {
      this.setState({
        age: this.state.age + 1
      });
    }, 2000);
  }
  componentWillUnmount() {
    console.log('App componentWillUnmount');
  }
  componentWillReceiveProps(nextProps: IAppProps) {
    console.log(`App componentWillReceiveProps: + ${JSON.stringify(nextProps)}`);
  }
  shouldComponentUpdate(nextProps: IAppProps, nextState: IAppState) {
    console.log(`App shouldComponentUpdate: + ${JSON.stringify(nextProps)}, ${JSON.stringify(nextState)}`);
    return true;
  }
  componentWillUpdate(nextProps: IAppProps, nextState: IAppState) {
    console.log(`App componentWillUpdate: + ${JSON.stringify(nextProps)}, ${JSON.stringify(nextState)}`);
  }
  componentDidUpdate(prevProps: IAppProps, prevState: IAppState) {
    console.log(`App componentDidUpdate: + ${JSON.stringify(prevProps)}, ${JSON.stringify(prevState)}`);
  }

  render() {
    console.log('App render')
    return (
      <div className="App">
        {this.props.name}, {this.props.company}, {this.state.age}
        <button onClick={this._rollback}>회춘</button>
        <StatelessComponent name="Anna">나는 자식이다.</StatelessComponent>
      </div>
    );
  }

  private _rollback() {
    this.setState({
      age: 25
    });
  }
}

const StatelessComponent: React.SFC<IAppProps> = ({name, company = 'Home', children}) => {
  return (
    <h2>{name}, {company}, {children}</h2>
  );
}

export default App;
