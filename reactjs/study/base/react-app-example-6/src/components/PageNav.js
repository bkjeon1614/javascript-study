import React, { Component } from 'react';

class PageNav extends Component {
  // 추가
  shouldComponentUpdate(newProps, newState) {
    console.log('===> Nav render shouldComponentUpdate'
      ,newProps.data
      ,this.props.data
    )
    if (this.props.data === newProps.data) {
      return false;
    }
    return true;
  }
  render() {
    console.log('===> Nav render');
    var list = [];
    var data = this.props.data
    var i = 0;
    while(i < data.length) {
        list.push(
          <li key={data[i].id}>
            <a 
              href={"/content/"+data[i].id}
              data-id={data[i].id}
              onClick={function(e){
                e.preventDefault();
                this.props.onChangePage(e.target.dataset.id);
              }.bind(this)}
            >{data[i].title}</a>
          </li>)
        i = i + 1;
    }
    return (
        <nav>
            <ul>
                {list}
            </ul>
        </nav>
    );
  }
}

export default PageNav;