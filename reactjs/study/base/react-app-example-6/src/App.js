import React, { Component } from 'react';
import PageNav from './components/PageNav';
import PageHeader from './components/PageHeader';
import ReadContent from './components/ReadContent';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.max_content_id = 3;
    this.state = {
      mode:'welcome',
      selected_content_id:2,
      header: {title:'modify title', subTitle: 'modify subTitle'},
      contents:[
        {id:1, title:"modify HTML", subTitle:'modify HTML subTitle'},
        {id:2, title:"modify React", subTitle:'modify React subTitle'},
        {id:3, title:"modify Javascript", subTitle:'modify HTML Javascript'}
      ]
    }
  }
  getReadContent() {
    var i = 0;
    while(i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
        break;
      }
      i = i + 1;
    }
  }
  getContent() {
    var _title, _subTitle, _article = null;

    if (this.state.mode === 'welcome') {
      _title = this.state.header.title;
      _subTitle = this.state.header.subTitle;
      _article = <ReadContent title={_title} contents={_subTitle}></ReadContent>
    } else if (this.state.mode === 'read') {
      var _content = this.getReadContent(); 
      _article = <ReadContent title={_content.title} contents={_content.subTitle}></ReadContent>
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _subTitle) {
        this.max_content_id = this.max_content_id+1;
        var _contents = Array.from(this.state.contents);
        _contents.push({id:this.max_content_id, title:_title, subTitle:_subTitle});
        this.setState({
          contents:_contents,
          mode:'read',
          selected_content_id:this.max_content_id
        })
      }.bind(this)}></CreateContent>
    } else if (this.state.mode === 'update') {
     _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={
        function(_id, _title, _subTitle) {
          var _contents = Array.from(this.state.contents);
          var i = 0;
          while(i < _contents.length) {
            if (_contents[i].id === _id) {
              _contents[i] = {id:_id, title:_title, subTitle:_subTitle};
              break;
            }
            i = i + 1;
          }
          this.setState({
            contents:_contents,
            mode:'read'
          })
      }.bind(this)}></UpdateContent>
    }

    return _article
  }
  render() {
  console.log('App render')
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
          // 변경
          if (_mode === 'delete') {
            if (window.confirm('정말 삭제하시겠습니까?')) {
              // 데이터 삭제
              var _contents = Array.from(this.state.contents);
              var i = 0;
              while (i < this.state.contents.length) {
                if (_contents[i].id === this.state.selected_content_id) {
                  // 발견한 원소의 id값 부터 1개를 지우고 원본을 변경
                  _contents.splice(i, 1);
                  break;
                }
                i = i + 1;
              }
              this.setState({
                mode: 'welcome',
                contents: _contents
              })
              alert('삭제가 완료되었습니다.');
            }
          } else {
            this.setState({
              mode:_mode
            })
          }
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
