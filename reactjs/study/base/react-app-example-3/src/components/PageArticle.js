import React, { Component } from 'react';

class PageArticle extends Component {
    render() {
        return (
            <article>
                <h2>{this.props.title}</h2>
                {this.props.contents}
            </article>
        )
    }
}

export default PageArticle;