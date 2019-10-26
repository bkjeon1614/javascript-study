import React, { Component } from 'react';
import PageNav from './components/PageNav';
import PageHeader from './components/PageHeader';
import PageArticle from './components/PageArticle';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader title="Title Example" subTitle="Sub Title Example"></PageHeader>
        <PageNav></PageNav>
        <PageArticle title="Title Article" contents="Contents Article"></PageArticle>
      </div>
    );
  }
}

export default App;
