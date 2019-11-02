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


## React 프로젝트 생성
기존에는 React를 사용하기 위해선 즉, Javascript버전과 JSX를 해석하기 위해선 Babel을 사용하였다.
> babel: javascript transpiler이다. 즉, 최신 버전의 javascript 문법은 브라우저가 이해하지 못하기 때문에 babel이 브라우저가 이해할 수 있는 문법으로 변환해준다. ES6 등의 최신 문법을 사용해서 코딩을 할 수 있기 때문에 생산성이 향상된다.  


## React 프로젝트 설정

### React with Babel [es6, jsx]
- module bundler
  - webpack 2
  - webpack-dev-server: 서버 test 사용 용도
- loader
  - babel-loader: 어떤 javascript 파일 JSX가 들어있는 React Component 작성한 파일을 읽어다가 Module loader들을 통해서 transpile을 해주는걸 설정해주는것이 loader이다.
    - babel-core
    - babel-preset-env: 어떤 babel을 쓸건지 결정
    - babel-plugin-transform-react-jsx: jsx을 transpile하기 위해 사용
- react
  - react: react component를 만들때 사용
  - react-dom: react component를 만든것을 rendering할 때 사용

### React with Typescript [ts, tsx]
- module bundler
  - webpack 2
  - webpack-dev-server
- **loader**
  - **ts-loader: webpack에서 file을 읽어다가 typesript -> javascript 변경해서 내려줌**
    - **typescript**
  - **tslint-loader: typescript를 컴파일하기 위해서 typescript의 진짜 컴파일러를 가지고 와야 한다. 즉, typescript 컴파일러가 무조건 있어야한다.**
    - **tslint: 미리 lint를 한다.**
    - **tslint-react: 얘도 같이 설치해야 정상작동한다.**
  - source-map-loader: 소스의 어느부분에서 잘못되었는지 확인하기 위해 필요
- react(@types/.. 가 있는경우도 있고 없는 경우도 있으니 확인할 것)
  - react, @types/react
  - react-dom, @types/react-dom

### webpack.config.js 설정
Sample로 되어있는 webpack을 설정하는 내용에 대해 확인해보자.
[프로젝트구조]
```
    react-typescript-app-example-1
    ├── .git    
    ├── dist
    ├── node_modules
    ├── src
    │    └── components
    ├── index.html
    ├── .gitignore
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    ├── tslint.json
    ├── webpack.config.js
    └── yarn.lock
```

[webpack.config.js]
```
  // input 설정
  entry: './src/index.tsx',

  // output 설정
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  // 어떤 파일들을 webpack에서 해석할건지 파일의 확장자를 적어줌.
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },

  // transformations 설정
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
      },
      {
        enforce: "pre",
        test: /\.(ts|tsx)$/,
        loader: "tslint-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },

  // sourcemaps 설정: Enable sourcemaps for debugging webpack's output
  devtool: 'source-map',

  // server 설정
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    historyApiFallback: true
  }
```

ts-loader만 쓰면 어떻게 컴파일되는지 알 수 없으므로 tsconfig.json을 넣어주어야 한다. tsconfig.json의 내용은 최소설정이 되어있고 원하는 기능을 넣어서 세팅하면 된다. (공식홈페이지에 내용이 있다.)  

tslint.json: ts-lint-loader를 돌릴 때 어떤 규칙에 맞게 lint를 처리해줄건지 적어놓는다.
[tslint.json]
```
  {
    "extends": ["tslint-react"],  // 아까 설치한 tslint-react를 상속받는다.
    "rules": {
      // log level 설정
      "no-console": [
        true,
        "log",
        "error",
        ...
      ]
    }
  }
```

### dev서버 실행
```
  yarn start
```
> 이제 세팅은 다 되어있고 Component안에서 원하는 구성을 만들면 된다.


## 참조
https://www.inflearn.com/course/react-with-typescript#  
https://medium.com/@ljs0705
