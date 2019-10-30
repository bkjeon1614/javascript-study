import React, { Component } from 'react';
import PageNav from './components/PageNav';
import PageHeader from './components/PageHeader';
import PageArticle from './components/PageArticle';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'welcome',
      header: {title:'modify title', subTitle: 'modify subTitle'},
      contents:[
        {id:1, title:"modify HTML", subTitle:'modify HTML subTitle'},
        {id:2, title:"modify React", subTitle:'modify React subTitle'},
        {id:3, title:"modify Javascript", subTitle:'modify HTML Javascript'}
      ]
    }
  }
  render() {
    var _title, _subTitle = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.header.title;
      _subTitle = this.state.header.subTitle;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _subTitle = this.state.contents[0].subTitle;
    }
    return (
      <div className="App">
        <PageHeader 
          title={this.state.header.title} 
          subTitle={this.state.header.subTitle}
        ></PageHeader>
        <PageNav data={this.state.contents}></PageNav>
        <PageArticle title="Title Article" contents="Contents Article"></PageArticle>
      </div>
    );
  }
}

export default App;
