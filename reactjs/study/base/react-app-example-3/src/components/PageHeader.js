import React, { Component } from 'react';

class PageHeader extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                {this.props.subTitle}
            </header>
        );
    }
}

export default PageHeader;