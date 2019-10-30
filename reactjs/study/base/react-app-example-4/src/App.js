import React, { Component } from 'react';
import PageNav from './components/PageNav';
import PageHeader from './components/PageHeader';
import PageArticle from './components/PageArticle';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode:'read',
      selected_content_id:2,
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
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _subTitle = data.subTitle;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
        <PageHeader 
          title={this.state.header.title} 
          subTitle={this.state.header.subTitle}
          onChangePage={function(){
            this.setState({mode: 'welcome'});
          }.bind(this)}
        ></PageHeader>
        <PageNav 
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
          }.bind(this)}
          data={this.state.contents}
        ></PageNav>
        <PageArticle title={_title} contents={_subTitle}></PageArticle>
      </div>
    );
  }
}

export default App;
