import React, { Component } from 'react';

class UpdateContent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title:this.props.data.title,
        subTitle:this.props.data.subTitle
      }
      this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(e) {
      this.setState({[e.target.name]:e.target.value});
    }
    render() {
        console.log(this.props.data);
        console.log('UpdateContent render');
        return (
            <article>
              <h2>Update</h2>
              <form action="/create_process" method="post"
                onSubmit={function(e){
                  e.preventDefault();
                  // onSubmit에 id값을 추가하고 어차피 동기화가 되기때문에 title, subTitle도 this객체로 변경해준다.
                  this.props.onSubmit(
                    this.state.id,
                    this.state.title,
                    this.state.subTitle
                  );
                  alert('Submit!!!!');
                }.bind(this)}
              >
                {/* id 식별자 추가 */}
                <input type="hidden" name="id" value={this.state.id}></input>
                <p>
                  <input 
                    type="text" 
                    name="title" 
                    placeholder="title"
                    value={this.state.title}
                    onChange={this.inputFormHandler}
                    ></input>
                </p>
                <p>
                    <textarea 
                      name="subTitle" 
                      placeholder="subTitle"
                      value={this.state.subTitle}
                      onChange={this.inputFormHandler}
                    ></textarea>
                </p>
                <p>
                    <input type="submit"></input>
                </p>
              </form>
            </article>
        )
    }
}

export default UpdateContent;