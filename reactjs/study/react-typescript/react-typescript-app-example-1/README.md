# React
해당 내용을 보기전 [react기본](https://github.com/bkjeon1614/javascript-study/tree/master/reactjs/study/base) 의 react-app-example-1 부터 선행하시면 좋습니다.

## React?
- **React Component:** 작업의 단위
- **Virtual DOM:** Virtual DOM으로 그린다음에 변경 되기 전의 상황과 변경 된 후의 Virtual DOM의 State들을 비교해서 바뀐부분(=diff)만 추출해내서 그 부분만 다시 render를 해주는것이 react의 핵심이다. `(State Change -> Compute Diff -> Re-render)`
- **JSX** 
  - Javascript XML - JSX 자체는 문법
  - 리액트에서는 JSX.Element로 그려질 Component를 표현한다.
  - React.createElement 함수를 통해서도 JSX.Element 를 만들수 있다.
    - [JSX]
      ```
      class HelloMessage extends React.Component {
        render() {
          return <div>Hello {this.props.name}</div>;
        }
      }
      ReactDOM.render(<HelloMessage name="Jane" />, mountNode);
      ```
    - [React Element]
      ```
      class HelloMessage extends React.Component {
        render() {
          return React.createElement(
            'div',
            null,
            'hello ',
            this.props.name
          );
        }
      }
      ReactDOM.render(React.createElement(HelloMessage, { name: 'jane' }), mountNode);
      ```
- **React.Component - render**
  - return JSX.Element
    - 리액트가 그려준다.
  - 데이터(props, state)가 변하면, 다시 render를 호출해서 그려준다.
    - render가 호출되고, 재호출되는 지점을 파악해야 한다.
    - render를 JSX로 표현해야 한다.
    - 데이터와 JSX가 합쳐져 하나의 컴포넌트를 이룬다.

> react는 props와 state를 어떻게 잘 활용하는지가 중요하다.

## 참조
https://www.inflearn.com/course/react-with-typescript#