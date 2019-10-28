import React, { Component } from 'react';

class PageHeader extends Component {
    render() {
        console.log('PageHeader render')
        return (
            <header>
                <h1><a href="/" onClick={function(e){
                  e.preventDefault();
                  this.props.onChangePage();
                }.bind(this)}>{this.props.title}</a></h1>
                {this.props.subTitle}
            </header>
        );
    }
}

export default PageHeader;