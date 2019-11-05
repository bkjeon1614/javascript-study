import * as React from 'react';
// NavLink 추가
import { BrowserRouter as Router, NavLink, Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import './App.css';

import logo from './logo.svg';

const Home = () => {
  return (
    <h3>Home</h3>
  );
};

const Post = (props: RouteComponentProps<{ postId: string }>) => {
  function goNextPost() {
    const nextPostId = Number(props.match.params.postId) + 1;
    props.history.push(`/posts/${nextPostId}`);
  }

  return (
    <div>
      <h3>Post {props.match.params.postId}</h3>
      <button onClick={goNextPost}>Next post</button>
      <p>{new URLSearchParams(props.location.search).get('body')}</p>
    </div>
  );
};

const PostList = (props: RouteComponentProps<{}>) => {
  return (
    <div>
      <Route exact={true} path={`${props.match.url}`} render={() => <h3>postList</h3>} />
      <Route path={`${props.match.url}/:postId`} component={Post} />
    </div>
  );
};

const NotFound = () => {
  return (
    <h3>Not Found!!</h3>
  );
};

// true로 수정
const Admin = () => {
  const isAdmin = true;
  return isAdmin
    ? <h3>Admin</h3>
    : <Redirect to="/" />
};

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </div>
          <nav>
            <ul>
              {/* 링크를 NavLink로 변경 */}
              <li><NavLink exact={true} activeStyle={{ fontSize: 24 }} to="/">Home</NavLink></li>
              <li><NavLink activeStyle={{ fontSize: 24 }} to="/intro">소개</NavLink></li>
              <li><NavLink activeStyle={{ fontSize: 24 }} to="/admin">어드민</NavLink></li>
            </ul>
          </nav>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/intro" render={() => <h3>소개</h3>} />
            {/* 추가 */}
            <Redirect from="/about" to="/intro" />
            <Route path="/posts" component={PostList} />
            <Route path="/admin" component={Admin} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
