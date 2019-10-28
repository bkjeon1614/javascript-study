import React, { Component } from 'react';
import PageNav from './components/PageNav';
import PageHeader from './components/PageHeader';
import ReadContent from './components/ReadContent';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.max_content_id = 3;
    this.state = {
      mode:'create',
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
    var _title, _subTitle, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _subTitle = this.state.welcome.subTitle;
      _article = <ReadContent title={_title} contents={_subTitle}></ReadContent>
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
      _article = <ReadContent title={_title} contents={_subTitle}></ReadContent>
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _subTitle) {
        this.max_content_id = this.max_content_id + 1;
        var _contents = this.state.contents.concat(
          {id:this.max_content_id, title:_title, subTitle:_subTitle}
        )
        this.setState({
          contents:_contents
        })
        console.log(_title, _subTitle)
      }.bind(this)}></CreateContent>
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
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          })
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}

export default App;
